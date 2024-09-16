import React, { useState } from 'react';

function QuizInput({ onSubmitInput, isLoading }) {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitInput(input);
    };

    return (
        <div className='grid sm:grid-cols-12 h-screen'>
           <div className='sm:col-span-7 flex justify-center items-center h-full'>
            <div className='p-10'>
            <h1 className='text-6xl font-bold'>Quiz yourself on anything.</h1>
            <p className='text-lg mt-3'><span className='font-bold'>Kuesuto</span> harnesses the power of AI to tailor quizzes that suit your interests and test your understanding on any topic you choose. Whether you're exploring new subjects or honing existing skills, our dynamic quizzes are designed to challenge and engage you.</p>
            <p className='text-md mt-2 mb-2 font-bold'>Try it out!</p>
            <form onSubmit={handleSubmit} className='flex'>
                <input
                id='input'
                type="text"
                placeholder="Write the topic here"     
                name="input"
                value={input}
                onChange={handleChange}
                autoComplete='off'
                className="input input-bordered min-w-sm w-[80%]"
                disabled={isLoading}
            />
            <button 
                type="submit" 
                className='btn btn-primary ml-4'
                // disabled={isLoading}
            >
                {isLoading ? "Loading..." : "Give it a shot"}
            </button>
        </form>
            </div>
           </div>
           <div className='sm:col-span-5 h-full overflow-hidden'>
               <img src="/design.png" alt="" className='object-cover w-full h-full' />
           </div>
        </div>
    );
}

export default QuizInput;
