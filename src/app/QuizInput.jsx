import React, { useState } from 'react';

function QuizInput({ onSubmitInput, isLoading }) {
    const [input, setInput] = useState('');
    const [isLoad, setIsLoad] = useState(false);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitInput(input);
        setIsLoad(true);
    };

    return (
        <div className='grid sm:grid-cols-12 h-screen'>
           <div className='sm:col-span-7 flex justify-center items-center h-full'>
            <div className='p-10'>
            <h1 className='text-6xl font-bold'>Quiz yourself on anything.</h1>
            <p className='text-lg mt-3'>Create engaging quizzes effortlessly with Kuesuto. Discover a versatile platform for testing knowledge on any topic, from ancient history to modern trends. Start creating today!</p>
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
                disabled={isLoad}
                // disabled={isLoading}
            >
                {isLoading ? "Loading..." : "Give it a shot"}
            </button>
        </form>
        <a 
  href="https://www.producthunt.com/posts/kuesuto?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-kuesuto" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <img 
    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=495106&theme=dark" 
    alt="Kuesuto - Kuesuto: AI-powered quizzes on any topic, anytime! | Product Hunt" 
    style={{ width: '250px', height: '54px', marginTop: '1rem' }} 
    width="62.5" 
    height="13.5" 
  />
</a>


            </div>
           </div>
           <div className='sm:col-span-5 h-full overflow-hidden'>
               <img src="/design.png" alt="" className='object-cover w-full h-full' />
           </div>
        </div>
    );
}

export default QuizInput;
