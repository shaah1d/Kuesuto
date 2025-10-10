import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(request: Request) {
    try {
        const { topic } = await request.json();

        // Validate input
        if (!topic || typeof topic !== 'string') {
            throw new Error('Invalid topic provided');
        }

        const prompt = `You are a QuizBot. Your task is to generate a quiz in JSON format with 10 questions. Follow this structure exactly:

        {
          "title": "string", // Write a compelling and detailed heading for the quiz.
          "questions": [
            {
              "question": "string", // The quiz question
              "options": ["string", "string", "string", "string"], // Four options
              "correctAnswer": "string", // The correct answer
              "explanation": "string" // Explanation of why the correct answer is right
            }
            // Repeat this block for 10 questions
          ]
        }

        Omit backticks, code blocks, or symbols that are not allowed in JSON.
        The quiz must contain exactly 10 questions.
        Each question must have four answer options, with one correct answer and an explanation of why it's correct.
        The topic of this quiz is: ${topic}`;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        // Clean and validate JSON response
        try {
            const cleanedResponseText = responseText.replace(/```json|```/g, '').trim();
            const quizData = JSON.parse(cleanedResponseText);

            return new Response(
                JSON.stringify({ data: quizData }),
                { headers: { 'Content-Type': 'application/json' } }
            );
        } catch (e) {
            throw new Error('Invalid JSON response from AI');
        }

    } catch (error) {
        console.error('API Error:', error);
        return new Response(
            JSON.stringify({
                error: 'Failed to process request',
                details: error instanceof Error ? error.message : 'Unknown error'
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
}
