"use client"
import { useSession } from "next-auth/react"
import { useState, useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import Quiz from '../components/pages/Quiz'
import About from "../components/pages/About"

export default function Component() {


  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
     
      <main className="flex-grow flex flex-col w-full">
        <Quiz />
        {/* <About /> */}
      </main>
    </div>
  )
}
