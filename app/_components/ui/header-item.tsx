import { Link, NavbarItem } from '@nextui-org/react'
import React from 'react'

interface HeaderItemProps {
  nome: string
  href: string
}

// todo lógica do isActive

const HeaderItem = ({nome, href} : HeaderItemProps)  => {
  return (
    <NavbarItem>
      <Link color="foreground" href={href} className='font-semibold'>
        {nome}
      </Link>
    </NavbarItem>
  )
}

export default HeaderItem