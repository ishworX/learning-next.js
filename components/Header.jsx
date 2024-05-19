import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import ThemeToggler from './ThemeToggler'
import MobileNav from './MobileNav'

const Header = () => {
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