import React, { useState, useEffect } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
/* import Image from  'next/image' */

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  };
  const imgStyle = {
    maxHeight: 128,
    maxWidth: 128
  }

  return (
    <div className={`header${sticky ? " sticky" : ""}`}>
      <Navbar light expand="md" >
        <Container>
{/*           <NavbarBrand href="/"><Image src={'/images/transportadora-boa-viagem-logo.png'} width={140}
                height={140}></Image></NavbarBrand> */}
                    <NavbarBrand href="/"><img src='/images/transportadora-boa-viagem-logo.png' style={imgStyle} /></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink href="/">Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#feature">Princípios </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#service">Filiais</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">Quem Somos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#work">Trabalhe Conosco</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
