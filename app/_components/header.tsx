"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import HeaderItem from './ui/header-item';

const Header = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="text-xl font-bold text-inherit">Junior Rodrigues</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <HeaderItem nome="Home" href="#home" />
        <HeaderItem nome="About me" href="#about" />
        <HeaderItem nome="Experiences" href="#experiences" />
        <HeaderItem nome="Projects" href="#projects" />
        <HeaderItem nome="Skills" href="#skills" />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Say Hello!
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Header
