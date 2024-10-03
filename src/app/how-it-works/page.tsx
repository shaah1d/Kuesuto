import { ArrowDownIcon, BrainCircuitIcon, CodeIcon, UserIcon } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="navbar ">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a href="/">Home</a></li>
            <li><Link href="/how-it-works">How it works?</Link></li>
            <li><Link href="/about">About</Link></li> 
          </ul>
        </div>
      </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-green-800 mb-8">The Magic Behind Kuesuto</h1>
        
        <p className="text-lg text-gray-700 mb-12 text-center">
          Kuesuto is a powerful web application that leverages advanced AI technology to create customized quizzes on any topic imaginable. At its core, Kuesuto utilizes the Gemini-1.5 flash model, a sophisticated AI system that generates quiz content based on user input.
        </p>

        <h2 className="text-3xl font-bold text-green-700 mb-6">Quiz Generation Process: A Detailed Look</h2>

        <div className="space-y-12">
          {[
            {
              title: "User Input",
              icon: <UserIcon className="w-8 h-8 text-green-600" />,
              description: "The journey begins with you. Simply type in any topic that piques your interest, whether it's \"Renaissance Art,\" \"Quantum Mechanics,\" or \"Pop Culture of the 90s.\" You can also specify the difficulty level by adding \"easy,\" \"medium,\" or \"hard\" to your request."
            },
            {
              title: "AI Processing",
              icon: <BrainCircuitIcon className="w-8 h-8 text-green-600" />,
              description: "Once you've submitted your topic, our advanced Gemini-1.5 model springs into action. This sophisticated AI system analyzes your request, drawing upon its vast knowledge base to generate relevant and engaging quiz content."
            },
            {
              title: "JSON Formatting",
              icon: <CodeIcon className="w-8 h-8 text-green-600" />,
              description: "After the AI generates the quiz content, it's structured into a specific JSON format. This step is crucial as it organizes the quiz data into a standardized, easily readable structure for our system."
            },
            {
              title: "Data Validation and Refinement",
              icon: <ArrowDownIcon className="w-8 h-8 text-green-600" />,
              description: "Before moving to the frontend, the JSON data undergoes a validation process. This ensures all necessary fields are present, formatted correctly, and meet our quality standards."
            },
            {
              title: "Frontend Rendering",
            
              description: "The validated JSON data is then sent to the frontend of our application. Here, it's interpreted and transformed into the visually appealing and interactive quiz interface you see."
            }
          ].map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">{step.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-6 border border-green-200">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Customizing Difficulty Levels</h2>
          <p className="text-gray-700 mb-4">
            One of Kuesuto's standout features is its ability to adjust quiz difficulty with minimal effort. To set the difficulty level of your quiz, simply include the desired level in your input.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Easy", "Medium", "Hard"].map((level) => (
              <div key={level} className="bg-green-50 rounded-md p-4">
                <h3 className="font-semibold text-green-700 mb-2">{level}</h3>
                <p className="text-sm text-gray-600">"{level} World Geography Quiz"</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">User-Friendly Interface</h2>
          <p className="text-gray-700">
            To ensure a seamless user experience, Kuesuto employs a range of modern web technologies:
          </p>
          <ul className="mt-4 space-y-2">
            <li className="text-green-600">Tailwind CSS: For responsive and clean layouts</li>
            <li className="text-green-600">shadcn, daisyUI, and AceTrinityUI: These Tailwind libraries add sophisticated UI components and styling options.</li>
          </ul>
        </div>

        <div className="mt-12 bg-green-800 text-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">The Power of Flexibility</h2>
          <p className="mb-4">
            Whether you're a student looking to test your knowledge, a teacher creating educational materials, or simply a curious mind exploring new topics, Kuesuto adapts to your needs.
          </p>
          <p>
            With its intuitive design and powerful AI backend, Kuesuto transforms the way we learn and test our knowledge, making education more accessible, engaging, and fun for everyone.
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700">
            If you feel like discussing anything feel free to contact me via my Email:
          </p>
          <a href="mailto:writetoshaahid@gmail.com" className="text-green-600 hover:underline">
            writetoshaahid@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}