import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import ThemeToggler from './ThemeToggler'

const Header = () => {
  return (
    <header>
      {/* My logo goes here */}
      <Logo />
      {/* Nav bar and buttons will go here */}
      <Nav />
      <ThemeToggler />
    </header>
  )
}

export default Header