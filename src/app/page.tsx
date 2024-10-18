"use client"
import { useSession } from "next-auth/react"
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Quiz from './Quiz'
import About from "./About"

export default function Component() {


  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
     
      <main className="flex-grow flex flex-col w-full">
        <Quiz />
        <About />
      </main>
    </div>
  )
}
