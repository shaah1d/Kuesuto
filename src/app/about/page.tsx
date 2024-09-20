import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";

export default function About() {
  const data = [
    {
      title: "Introduction",
      content: (
        <div>
          <p className="text-gray-700 mb-4">
            Welcome to Kuesuto, the revolutionary platform that transforms the way you learn and test your knowledge! Imagine having the power to create quizzes on literally anything under the sun, from the depths of ancient history to the latest pop culture phenomena. That's exactly what Kuesuto offers, and so much more!
          </p>
          <p className="text-gray-700 mb-4">
            Whether you're a curious mind eager to expand your general knowledge, a history buff diving deep into medieval lore, or a pop culture enthusiast ready to challenge your friends, Kuesuto is your ultimate companion. Our mission? To make learning not just accessible, but genuinely engaging and irresistibly fun for everyone, everywhere.
          </p>
        </div>
      ),
    },
    {
      title: "How Kuesuto Works Its Magic",
      content: (
        <div>
          <p className="text-gray-700 mb-4">
            Using Kuesuto is as easy as thinking of a topic - it's that simple! Just type in any subject that piques your interest. It could be as broad as "world geography" or as specific as "bioluminescent deep-sea creatures." In mere seconds, our intelligent system conjures up a tailor-made, 10-question quiz just for you. It's like having a genie that grants unlimited knowledge wishes!
          </p>
          <p className="text-gray-700 mb-4">
            But wait, there's more! Kuesuto understands that learning is a journey, and everyone's at a different stage. That's why we've introduced difficulty levels. Simply add "easy," "medium," or "hard" to your quiz request, and watch as Kuesuto adjusts its complexity to match your expertise. Whether you're dipping your toes into a new subject or you're ready to dive into the deep end of expert-level knowledge, Kuesuto's got your back.
          </p>
          <p className="text-gray-700 mb-4">
            Curious about the inner workings of this knowledge powerhouse? Dive into our comprehensive <span className="text-green-500"><Link href="/how-it-works">"How It Works"</Link></span> section for an in-depth exploration of Kuesuto's features and capabilities.
          </p>
        </div>
      ),
    },
    {
      title: "Why Kuesuto is Your New Best Friend in Learning",
      content: (
        <div>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li><strong>Infinite Topics, Infinite Possibilities:</strong> With Kuesuto, the world truly is your oyster. From everyday trivia to the most obscure specialized knowledge, if you can think it, we can quiz it!</li>
            <li><strong>Tailored Challenge Levels: </strong> Learning should be challenging, not overwhelming. With our easy-to-use difficulty settings, you're always in control of your learning journey. One word - "easy," "medium," or "hard" - is all it takes to customize your experience.</li>
            <li><strong>Lightning-Fast Quiz Generation:</strong> In today's fast-paced world, who has time to wait? With Kuesuto, you don't have to. Get your personalized quiz in seconds and dive right into learning or testing your knowledge. It's instant gratification for your brain!</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Unlock the Full Potential of Kuesuto",
      content: (
        <div>
          <p className="text-gray-700 mb-4">
            Ready to embark on your Kuesuto adventure? For a comprehensive guide on harnessing the full power of Kuesuto and unlocking all its exciting features, make sure to visit our <Link href="/how-it-works">How It Works</Link> section. This detailed walkthrough is your treasure map to getting the most out of the app, whether you're a newbie just starting your journey or a seasoned explorer ready to conquer expert-level topics. Get ready to supercharge your learning experience!
          </p>
        </div>
      ),
    },
    {
      title: "Developer Information",
      content: (
        <div>
          <p className="text-gray-700">
            Hi, I am shaah1d a MERN stack developer and I also make applications with the use of AI. I built this app to help people learn and test their knowledge. I am always looking for ways to improve the app and make it more useful for people. Feel free to contact me if you have any ideas or suggestions.      </p>
          <p> <span className='mt-3'>Github:</span> <Link href="https://github.com/shaah1d" className="text-green-500">@shaah1d</Link></p>
          <p><span className='mt-3'>Email:</span> <Link href="mailto:writetoshaahid@gmail.com" className="text-green-500">writetoshaahid@gmail.com</Link></p>

        </div>
      ),
    },

  ];
  return (
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a href="/">Home</a></li>
            <li><Link href="/how-it-works">How it works?</Link></li>
            <li><Link href="/about">About</Link></li> 
          </ul>
        </div>
      </div>
      </div>
      <Timeline data={data} />
    </div>
  );
}

