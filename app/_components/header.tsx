import React from 'react'
import NavItem from './nav-item'

const Header = () => {
  return (
    <header className="fixed w-full top-0 right-0 flex items-center justify-between bg-transparent p-6 border-b border-transparent transition-all duration-200 ease-in-out">
      <a href="#" className="site-logo text-[var(--second-color)] text-lg font-medium mx-6 transition-all duration-200 ease-in-out"><span>J</span>unior</a>

      <ul className="flex">
        <NavItem href='#home' name='Home'/>
        <NavItem href='#about' name='About me'/>
        <NavItem href='#experience' name='Experience'/>
        <NavItem href='#portfolio' name='Portfolio'/>
        <NavItem href='#services' name='Services'/>
      </ul>
    </header>
  )
}


export default Header