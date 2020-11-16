import React, {useState} from 'react';
import {Navbar,Nav,Button,Form, FormControl} from 'react-bootstrap';
import {Link } from 'react-router-dom';


const NavBarComponent =(props)=>{
return(
    <>
    <Navbar bg="secondary" variant="dark">
      <Navbar.Brand>Prueba Técnica</Navbar.Brand> 
      <Nav className="mr-auto">
      <Nav.Link as={Link} to="/one" >Exercise One</Nav.Link>
      <Nav.Link as={Link} to="/two">Exercise Two</Nav.Link>
      </Nav>
    </Navbar>
    </>
    );
};
export default NavBarComponent;