import React, { useState } from 'react';
import QuizInput from './QuizInput';
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

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

    const processInput = (input) => {
        const defaultPrompt = `you are a QuizBot, your job is to create a json quiz code which has 10 questions and a summary of the topic in the end,
        now while generating the quiz follow this format: 
        {
  "title": "string",  // Write a really attractive and detailed heading
  "questions": [
    {
      "question": "string",  // The actual quiz question
      "options": [
        "string",  // Option 1
        "string",  // Option 2
        "string",  // Option 3
        "string"   // Option 4
      ],
      "correctAnswer": "string",  // The correct answer for the question
      "explanation": "string"  // A brief explanation of the correct answer
    }
  ],
  "quizDescription": [
     heading: "string",
     content: "string"
  ]    // A brief description of the quiz should be a minimum of 500 words, strictly follow the format and stick to 500 words please, also the content should be about the topic and not the quiz itself, explain the topic and not the quiz
}
omit the backticks from the output, I am parsing this into json in a variable please do not include anything that is not allowed in json
The topic of the quiz is: 
`;
        return `${defaultPrompt} : ${input}`;
    };

    const handleSubmitInput = (input) => {
        setIsLoading(true);
        const genAI = new GoogleGenerativeAI('AIzaSyDvO1wNf6PYMJzVUIl-WNwP3E0PlEMXwV4'); // Replace with your actual API key
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = processInput(input);

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
                        <h1 className='text-center text-xl font-bold'>Your score was: {score}</h1>
                        <Accordion type="single" collapsible className="bg-base-200 p-4 rounded-lg mt-5 mb-5">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Here is a 2-minute read article on your topic:</AccordionTrigger>
                                <AccordionContent>
                                    <h1 className='text-xl font-bold'>{data.quizDescription.heading}</h1>
                                    {data.quizDescription.content.split('\n\n').slice(0, 6).map((paragraph, index) => (
                                        <p key={index} className='text-md mt-5'>{paragraph}</p>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
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
