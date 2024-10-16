"use client"
import { useSession } from "next-auth/react"
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Quiz from './Quiz'
import About from "./About"

export default function Component() {
  const { data: session, status } = useSession()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      setName(session.user.name ?? '');
      setEmail(session.user.email ?? '');
      setImage(session.user.image ?? '');
    
    }
  }, [status, session])

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar name={name} email={email} image={image} />
      <main className="flex-grow flex flex-col w-full">
        <Quiz />
        <About />
      </main>
    </div>
  )
}
