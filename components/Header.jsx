'use client'
import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import Nav from './Nav'
import ThemeToggler from './ThemeToggler'
import MobileNav from './MobileNav'

const Header = () => {

  const [header, setHeader] = useState(false);

  useEffect (() => {
    const scrollYpos = window.addEventListener('scroll', () => {
      window.scroll > 50? setHeader(true) :setHeader(false);
    });

    return () => window.removeEventListener('scroll', scrollYpos);
  });

  return (
    <header className='sticky top-0 py-4 z-30 transition-all max-padd-container flexBetween bg-[#fdf3fb] dark:bg-transparent'>
      {/* My logo goes here */}
      <Logo />
      {/* Nav bar and buttons will go here */}
      <Nav />
      <ThemeToggler />
      <MobileNav />

    </header>
  )
}

export default Header