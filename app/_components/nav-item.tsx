import React from 'react'

interface NavItemProps {
  href: string;
  name: string;
}

const NavItem = ({ href, name }: NavItemProps) => (
  <li>
    <a href={href} className="text-[var(--second-color)] text-lg font-medium mx-6 transition-all duration-200 ease-in-out">
      {name}
    </a>
  </li>
)

export default NavItem