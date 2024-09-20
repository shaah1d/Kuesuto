"use client" 
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const page = () => {
   return (
          <>
    <div className="w-full">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost font-bold"
              >
                Kuesuto
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li><a href="/">Home</a></li>
                <li><Link href="/how-it-works">How it works?</Link></li>
                <li><Link href="/about">About</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
                 <div className="container mx-auto px-4 py-8 max-w-full sm:max-w-4xl">
     

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-primary">Let's delve deeper into how Kuesuto works and explore its user-friendly features:</h1>

<h2 className="text-3xl font-semibold mb-4 text-primary">The Magic Behind Kuesuto</h2>
<p className="text-lg mb-4">
    Kuesuto is a powerful web application that leverages advanced AI technology to create customized quizzes on any topic imaginable. At its core, Kuesuto utilizes the Gemini-1.5 flash model, a sophisticated AI system that generates quiz content based on user input.
</p>

<h2 className="text-3xl font-semibold mb-4 text-primary">Quiz Generation Process: A Detailed Look</h2>
<ol className="list-decimal list-inside space-y-4 mb-8">
    <li className="text-sm sm:text-base md:text-lg">
        <strong>User Input:</strong> The journey begins with you. Simply type in any topic that piques your interest, whether it's "Renaissance Art," "Quantum Mechanics," or "Pop Culture of the 90s." You can also specify the difficulty level by adding "easy," "medium," or "hard" to your request.
    </li>
    <li className="text-sm sm:text-base md:text-lg">
        <strong>AI Processing:</strong> Once you've submitted your topic, our advanced Gemini-1.5 model springs into action. This sophisticated AI system analyzes your request, drawing upon its vast knowledge base to generate relevant and engaging quiz content. It considers factors like the topic's scope, complexity, and your specified difficulty level to craft appropriate questions.
    </li>
    <li className="text-sm sm:text-base md:text-lg">
        <strong>JSON Formatting:</strong> After the AI generates the quiz content, it's structured into a specific JSON (JavaScript Object Notation) format. This step is crucial as it organizes the quiz data - including questions, multiple-choice options, correct answers, and explanations - into a standardized, easily readable structure for our system.
        <div className="mockup-code bg-base-200 text-base-content my-4 text-xs sm:text-sm md:text-base w-full overflow-x-auto">
  <pre className="whitespace-pre-wrap break-all"><code>{`
{
  "quizTitle": "string",
  "quizDescription": "string",
  "questions": [
    {
      "question": "string",
      "options": [
        "string",
        "string",
        "string",
        "string"
      ],
      "correctAnswer": "string",
      "explanation": "string"
    }
  ]
}
          `}</code></pre>
</div>
    </li>
    <li className="text-sm sm:text-base md:text-lg">
        <strong>Data Validation and Refinement:</strong> Before moving to the frontend, the JSON data undergoes a validation process. This ensures all necessary fields are present, formatted correctly, and meet our quality standards. If needed, additional AI processing may occur to refine or expand the content.
    </li>
    <li className="text-sm sm:text-base md:text-lg">
        <strong>Frontend Rendering:</strong> The validated JSON data is then sent to the frontend of our application. Here, it's interpreted and transformed into the visually appealing and interactive quiz interface you see. This step involves:
        <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Parsing the JSON to extract quiz elements</li>
            <li>Applying our custom-designed UI components and styles</li>
            <li>Implementing interactive features like selecting answers and displaying results</li>
            <li>Ensuring responsive design for various device sizes</li>
        </ul>
    </li>
    <li className="text-sm sm:text-base md:text-lg">
        <strong>User Interaction:</strong> Finally, the quiz is presented to you, ready for your engagement. As you progress through the questions, your answers are processed in real-time, providing immediate feedback and tallying your score.
        <div className="my-4">
            <Image src="/flow.png" alt="flow of the website" width={800} height={400} className="rounded-lg shadow-md w-full h-auto" />
        </div>
    </li>
</ol>

<h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-primary">Customizing Difficulty Levels</h2>
<p className="text-sm sm:text-base md:text-lg mb-4">
    One of Kuesuto's standout features is its ability to adjust quiz difficulty with minimal effort. To set the difficulty level of your quiz, simply include the desired level in your input. For example:
</p>
<div className="my-4">
    <Image src="/difficulty.png" alt="image" width={800} height={400} className="rounded-lg shadow-md w-full h-auto" />
</div>
<ul className="list-disc list-inside space-y-2 mb-8">
    <li><strong>Easy:</strong> "Easy World Geography Quiz"</li>
    <li><strong>Medium:</strong> "Medium Ancient History Quiz"</li>
    <li><strong>Hard:</strong> "Hard Quantum Physics Quiz"</li>
</ul>
<p className="text-lg mb-4">
    By adding these simple keywords, Kuesuto automatically tailors the complexity of the questions to match your desired difficulty level.
</p>

<h2 className="text-3xl font-semibold mb-4 text-primary">User-Friendly Interface</h2>
<p className="text-lg mb-4">
    To ensure a seamless user experience, Kuesuto employs a range of modern web technologies:
</p>
<ul className="list-disc list-inside space-y-2 mb-8">
    <li><strong>Tailwind CSS:</strong> For responsive and clean layouts</li>
    <li><strong>shadcn, daisyUI, and AceTrinityUI:</strong> These Tailwind libraries add sophisticated UI components and styling options.</li>
</ul>

<h2 className="text-3xl font-semibold mb-4 text-primary">The Power of Flexibility</h2>
<p className="text-lg mb-8">
    Whether you're a student looking to test your knowledge, a teacher creating educational materials, or simply a curious mind exploring new topics, Kuesuto adapts to your needs. You can create quizzes on various subjects and themes, all tailored to your specific interests or educational requirements.
</p>
<p className="text-lg mb-8">
    With its intuitive design and powerful AI backend, Kuesuto transforms the way we learn and test our knowledge, making education more accessible, engaging, and fun for everyone.
</p>
<p className="text-lg mb-8">
  If you feel like discussing anything feel free to contact me via my <span className='mt-3'>Email:</span> <Link href="mailto:writetoshaahid@gmail.com" className="text-green-500">writetoshaahid@gmail.com</Link>
</p>
        </div>
        </>
)
}

export default page