import React, { useState, useEffect } from 'react';
import QuizInput from './QuizInput';
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import confetti from 'canvas-confetti';

function MyComponent() {
    const [data, setData] = useState('');
    const [error, setError] = useState('');
    const [qnum, setQnum] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
    const [scoredisplay, setScoredisplay] = useState(null);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isWrong, setIsWrong] = useState([]);
    const [info, setInfo] = useState([]);
    useEffect(() => {
       if(quizFinished){
        confetti({
          particleCount: 150,
          spread: 130,
          origin: { y: 0.6 },
        });
      }}, [quizFinished]);

    const processInput = (input) => {
        const defaultPrompt = `
        You are a QuizBot. Your task is to generate a quiz in JSON format with 10 questions. Follow this structure:

{ "title": "string", // Write a compelling and detailed heading for the quiz. "questions": [ { "question": "string", // The quiz question "options": [ "string", // Option 1 "string", // Option 2 "string", // Option 3 "string" // Option 4 ], "correctAnswer": "string", // Specify the correct answer "explanation": "string" // Provide a brief explanation of why the correct answer is right } // Repeat this block for 10 questions ] }

Omit backticks, code blocks, or symbols that are not allowed in JSON.
The quiz must contain exactly 10 questions.
Each question must have four answer options, with one correct answer and an explanation of why it's correct.
Example:


Copy code
{
  "title": "The Fascinating World of Photosynthesis",
  "questions": [
    {
      "question": "What is the primary function of photosynthesis?",
      "options": [
        "To produce oxygen",
        "To generate glucose",
        "To absorb carbon dioxide",
        "To convert sunlight into energy"
      ],
      "correctAnswer": "To generate glucose",
      "explanation": "The main purpose of photosynthesis is to convert light energy into chemical energy, producing glucose for the plant's energy."
    },
    {
      "question": "Where does photosynthesis primarily occur in plants?",
      "options": [
        "In the roots",
        "In the stems",
        "In the chloroplasts of leaves",
        "In the flowers"
      ],
      "correctAnswer": "In the chloroplasts of leaves",
      "explanation": "Photosynthesis occurs in chloroplasts, primarily found in plant leaves, where chlorophyll captures sunlight."
    }
    // (Add 8 more questions following the same format)
  ]
}
Ensure all strings are properly formatted in JSON.
the topic on which this quiz needs to be based is given here: 
`;
    const prompt2 = `
        { "title": "string", "explanation": "string" } Prompt: I will provide the user-generated questions that were answered incorrectly. Based on these, write a short explanation of the topic. Return the response in a JSON format as follows: { "title": "The topic the question is about", "explanation": "A concise paragraph explaining the topic" }

The "title" should clearly state the subject of the question.
The "explanation" should give a brief summary of the concept in one paragraph.
Ensure that no backticks, code blocks, or extra characters appear, as this will be parsed into JSON.
Omit any unnecessary formatting or symbols that are not allowed in JSON.
Keep the response clear and concise.
Here's an array of incorrect questions: ${JSON.stringify(isWrong)}.
Example: imput array
[
  {
    "question": "What is photosynthesis?",
    
  },
  {
    "question": "What is the capital of France?",

  }
]    
     output array: 
     {
  "questions": [
    {
      "title": "Photosynthesis",
      "explanation": "Photosynthesis is the process by which plants convert light energy from the sun into chemical energy in the form of glucose, using carbon dioxide and water. This process occurs in the chloroplasts and produces oxygen as a byproduct."
    },
    {
      "title": "Capital of France",
      "explanation": "The capital of France is Paris. It is the most populous city in France and a major hub for art, culture, and history in Europe."
    }
  ]
}
   `
        return { prompt: `${defaultPrompt} : ${input}`, prompt2 };

    };
 

    const handleSubmitInput = (input) => {
        setIsLoading(true);
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); 
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const { prompt, prompt2 } = processInput(input);

        model.generateContent(prompt)
            .then(result => {
                const responseText = result.response.text();

                try {
                    const jsonData = JSON.parse(responseText);

                    setData(jsonData);
                    setError('');
                } catch (parseError) {
                    console.error('Error parsing JSON:', parseError);
                    setError('Failed to parse the response. Please check the API output.');
                }
            })
            .catch(err => {
                console.error('Error:', err);
                setData('');
                if (err.message.includes('SAFETY')) {
                    setError('The generated content was blocked due to safety concerns. Please try a different prompt.');
                } else {
                    setError('An error occurred. Please try again.');
                }
            })
            .finally(() => {
                setIsLoading(false);
            });


        // model.generateContent(prompt2)
        // .then(result => {
        //     const responseText = result.response.text(); 


        // })
    };



    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleSubmitAnswer = (e) => {
        e.preventDefault();
        const correctAnswer = data.questions[qnum].correctAnswer;
        if (selectedOption === correctAnswer) {
            setScoredisplay(true);
            setScore(score + 1);
  
        } else {
            setScoredisplay(false);
            setIsWrong([...isWrong, {
                questionNumber: qnum + 1,
                question: data.questions[qnum].question,  // Changed from qnum - 1 to qnum
                // userAnswer: selectedOption,
                // correctAnswer: data.questions[qnum].correctAnswer,  // Changed from qnum - 1 to qnum
                // explanation: data.questions[qnum].explanation
            }])
        }
        setIsAnswerSubmitted(true);
    };

    const handleNextQuestion = (e) => {
        e.preventDefault();
        if (qnum < data.questions.length - 1) {
            setQnum(qnum + 1);
            setIsAnswerSubmitted(false);
            setSelectedOption('');
            setScoredisplay(null);
          

            if (qnum === data.questions.length - 2) {
                const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

                // Use processInput to get prompt2
                const { prompt2 } = processInput('');



                model.generateContent(prompt2)
                    .then(result => {
                        const responseText = result.response.text();

                        const incdata = JSON.parse(responseText);
                      
                        setInfo(incdata.questions);
                        // You might want to set this response to state or process it further
                    })
                    .catch(err => {
                        console.error('Error generating content for prompt2:', err);
                    });
            }
        } else {
            setQuizFinished(true);
        }
    };

    return (
        <div className="flex justify-center items-start h-[100vh]">
            {!data ? (
                <div className="w-full">
                    <QuizInput onSubmitInput={handleSubmitInput} isLoading={isLoading} />
                </div>
            ) : (
                <div className="w-[90%] max-w-4xl mx-auto mt-8">
                    {quizFinished ? (
                        <>
                            <h1 className='text-4xl font-bold text-center mb-6 text-black'>Quiz Results</h1>
                            <h1 className='text-6xl font-bold text-center mb-6 text-green-600'>{score} / 10</h1>
                            <p className="text-xl text-center text-gray-600">Great effort!</p>


                            <h1 className=' text-2xl font-bold mt-3 text-green-700'>Topics to Review: </h1>
                            
                            <Accordion type="single" collapsible className="bg-green-10 rounded-lg mt-2 mb-5 p-4">
                                {info.map((item, index) => (
                                    <AccordionItem value={`item-${index + 1}`} key={index}>
                                        <AccordionTrigger className='text-green-800 hover:text-green-600 text-xl'>{item.title}</AccordionTrigger>
                                        <AccordionContent>
                                            <p className='text-green-700 text-lg'>{item.explanation}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>

                            <a href="/" className='btn btn-primary w-[100%]'>Give another quiz</a>
                        </>
                    ) : (
                        <div className="space-y-5">
                            <h1 className="text-4xl font-bold">{data.title}</h1>
                            {error && <p className="text-red-500">{error}</p>}
                            <h3>Score - {score}</h3>
                            <main>
                                <p className="font-bold text-2xl mb-2">{qnum + 1}) {data.questions[qnum].question}</p>
                                <form onSubmit={handleSubmitAnswer} className="space-y-4">
                                    {data.questions[qnum].options.map((option, j) => (
                                        <div style={{ display: 'block' }} key={j}>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name={`question-${qnum}`}
                                                    value={option}
                                                    checked={selectedOption === option}
                                                    onChange={handleOptionChange}
                                                    className='mt-2'
                                                />
                                                {option}
                                            </label>
                                        </div>
                                    ))}

                                    {scoredisplay === false && (
                                        <h2 className='mt-4'>
                                            <span className="font-bold ">Explanation: </span>{data.questions[qnum].explanation}
                                        </h2>
                                    )}

                                    <button type="submit" className="btn btn-primary mt-4" disabled={isAnswerSubmitted}>Submit Answer</button>
                                </form>

                                <button onClick={handleNextQuestion} className="btn btn-primary mt-4">Next Question</button>
                            </main>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default MyComponent;