"use client"
import React, { useState, useEffect } from 'react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link';
import Image from 'next/image';

import { Button } from "../ui/button";
interface NavbarProps {
  name: string;
  email: string;
  image: string;
}

const Navbar: React.FC<NavbarProps> = () => {
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
  const [isHovering, setIsHovering] = useState(false);


  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost font-bold"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {isHovering ? 'kuesuto.' : 'クエスト'}
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a href="/">Home</a></li>
            <li><Link href="/pages/how-it-works">How it works?</Link></li>
            <li><Link href="/pages/about">About</Link></li> 
          </ul>
        </div>
      </div>
      <div className="navbar-end">
  {status === "authenticated" ? (
    <div className="dropdown dropdown-end"> {/* Changed to `dropdown-end` */}
      <div
        tabIndex={0}
        role="button"
        className="text-xs font-bold p-2 rounded-full"
      >
        <div className="avatar">
          <div className="ring-green-500 ring-offset-base-100 w-9 rounded-full ring ring-offset-2">
            <img src={image} />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 text-center rounded-box z-[1] mt-3 w-30 p-2 mr-4 shadow right-0" 
      >
        <li>
          <a onClick={() => signOut()}>Logout</a>
        </li>
      </ul>
    </div>
  ) : (
    <div>
      <Link href="/api/auth/signin" className="relative inline-block overflow-hidden group mr-4">
    
      Login
      </Link>
    </div>
  )}
</div>

      </div>
  
  )
}

export default Navbar;

