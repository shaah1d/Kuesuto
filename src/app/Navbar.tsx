"use client"
import React, { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  name: string;
  email: string;
  image: string;
}

const Navbar: React.FC<NavbarProps> = ({ name, email, image }) => {
  const { data: session, status } = useSession()
  const [isHovering, setIsHovering] = useState(false);
  console.log(image)

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar bg-base-100">
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
            <li><Link href="/how-it-works">How it works?</Link></li>
            <li><Link href="/about">About</Link></li> 
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        {status === "authenticated" ? (
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="text-xs font-bold p-2 rounded-full bg-green-400" >
              {email}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a onClick={() => signOut()}>Logout</a></li>
            </ul>
          </div>
        ) : (
          <div>
          <Link href="/api/auth/signin" className="relative inline-block overflow-hidden group">
    <span className="block translate-y-0 group-hover:-translate-y-full transition-transform duration-500">
      Login &rarr;
    </span>
  </Link>
       
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;

