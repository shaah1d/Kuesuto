import React from 'react'

function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content text-center">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold">Quizify</h1>
        <p className="py-6">
        Unlock the power of personalized learning with our AI-driven quiz app! Whether you're curious about history, science, or any topic under the sun, our intelligent system crafts quizzes tailored just for you. Dive in, challenge yourself, and expand your knowledge effortlessly with quizzes designed to captivate and educate.
        </p>
        <a className="btn btn-primary min-w-md" href='/api/auth/signin'>Sign in to play</a>
      </div>
    </div>
  </div>
  )
}

export default Home