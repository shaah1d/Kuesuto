import React, { useState, useEffect } from 'react';
import QuizInput from '../forms/QuizInput.tsx';
import { useSession } from 'next-auth/react';
import confetti from 'canvas-confetti';
import Finished from './Finished';
import { Button } from "@/components/ui/button";
import { Lightbulb } from 'lucide-react';

function QuizPage() {
    const { data: session, status } = useSession();
    const [quizData, setQuizData] = useState(null);
    const [error, setError] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [incorrectAnswers, setIncorrectAnswers] = useState([]);
   
    useEffect(() => {
        if (quizFinished) {
            confetti({
                particleCount: 150,
                spread: 130,
                origin: { y: 0.6 },
            });
        }
    }, [quizFinished]);

    const handleSubmitInput = async (input) => {
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('/api/quiz', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ topic: input }),
            });

            const result = await response.json();

            if (result.error) {
                throw new Error(result.error);
            }

            setQuizData(result.data);
        } catch (err) {
            console.error('Error:', err);
            setError('Failed to generate quiz. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    // Handle answer submission
    const handleSubmitAnswer = (e) => {
        e.preventDefault();

        const currentQuestion = quizData.questions[currentQuestionIndex];
        const isCorrect = selectedOption === currentQuestion.correctAnswer;

        if (isCorrect) {
            setScore(score + 1);
        } else {
            setIncorrectAnswers([
                ...incorrectAnswers,
                {
                    question: currentQuestion.question,
                    userAnswer: selectedOption,
                    correctAnswer: currentQuestion.correctAnswer,
                    explanation: currentQuestion.explanation
                },
            ]);
        }

        setIsAnswerSubmitted(true);
    };

    const handleNextQuestion = async (e) => {
        e.preventDefault();

        if (currentQuestionIndex < quizData.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setIsAnswerSubmitted(false);
            setSelectedOption('');
        } else {
            setQuizFinished(true);
        }
    };

    const renderQuiz = () => {
        const currentQuestion = quizData.questions[currentQuestionIndex];

        return (
            <div className="w-[90%] max-w-4xl mx-auto mt-8 space-y-5 h-auto">
                <div className="flex justify-between items-center">
                    <div className="bg-primary/10 px-4 py-2 rounded-full">
                        <span className="text-sm font-medium">Question {currentQuestionIndex + 1}/10</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-yellow-500" />
                        <span className="font-bold">Score: {score}</span>
                    </div>
                </div>
                <h1 className="text-4xl font-bold">{quizData.title}</h1>

                <main>
                    <p className="font-bold text-2xl mb-2">
                        {currentQuestionIndex + 1}) {currentQuestion.question}
                    </p>
                    <form onSubmit={handleSubmitAnswer} className="space-y-4">
                        {currentQuestion.options.map((option, index) => (
                            <div key={index} className="flex items-center">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name={`question-${currentQuestionIndex}`}
                                        value={option}
                                        checked={selectedOption === option}
                                        onChange={(e) => setSelectedOption(e.target.value)}
                                        className="w-4 h-4 text-primary border-gray-300 focus:ring-sucess radio radio-success"
                                    />
                                    <span className="text-base">{option}</span>
                                </label>
                            </div>
                        ))}

                        {isAnswerSubmitted && (
                            <div className="mt-4">
                                <p className={`font-bold ${selectedOption === currentQuestion.correctAnswer ? 'text-green-500' : 'text-red-500'}`}>
                                    {selectedOption === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect!'}
                                </p>
                                <p className="mt-2">
                                    <span className="font-bold">Explanation:</span> {currentQuestion.explanation}
                                </p>
                            </div>
                        )}

                        <div className="space-x-4">
                            <button
                                type="submit"
                                className="btn btn-primary mt-4"
                                disabled={isAnswerSubmitted || !selectedOption}
                            >
                                Submit Answer
                            </button>

                            <button
                                onClick={handleNextQuestion}
                                className="btn btn-primary mt-4"
                                disabled={!isAnswerSubmitted}
                            >
                                {currentQuestionIndex < quizData.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        );
    };

    return (
        <div className="flex justify-center items-start h-[100vh]">
            {!quizData ? (
                <div className="w-full">
                    <QuizInput onSubmitInput={handleSubmitInput} isLoading={isLoading} />
                </div>
            ) : quizFinished ? (
                <Finished score={score} incorrectAnswers={incorrectAnswers}/>
            ) : (
                renderQuiz()
            )}
        </div>
    );
}

export default QuizPage;
