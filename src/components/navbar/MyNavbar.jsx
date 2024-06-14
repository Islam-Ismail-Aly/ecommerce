import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

export default function MyNavbar() {
  return (
   <>
   <Navbar bg="info" data-bs-theme="white">
     <Container>
       <Navbar.Brand href="#home">Marketoo</Navbar.Brand>
       <Nav className="ms-auto">
       <NavLink className={( { isActive } ) => isActive ? 'text-success nav-link' : 'nav-link'} to="/">Home</NavLink>
       <NavLink className={( { isActive } ) => isActive ? 'text-success nav-link' : 'nav-link'} to="/products">Products</NavLink>
       </Nav>
     </Container>
   </Navbar>
 </>
  )
}
