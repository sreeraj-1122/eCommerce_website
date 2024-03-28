import React from "react";
import {Container, Nav, Navbar,} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    
      <Navbar expand="lg" className="bg-body-tertiary main-header shadow">
        <Container>
            <Link to='/' className="logo">Shopify</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto header-nav">
              <Link to="/">Home</Link>
              <Link to="/product">Products</Link>
              <Link to="/category">Categories</Link>
              <Link to="/users">Users</Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Header;
