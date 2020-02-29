import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
// import this LinkContainer, so we can merge between router and react bootstrap Nav
import { LinkContainer } from "react-router-bootstrap";

// bring this navbar from react Boostrap and send it app.js it's a child of app.js
const NavBar = props => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Salman</Navbar.Brand>
        <Nav className="mr-auto">
          
          {/* // without LinkContainer we would face issue to fix Nanbar
          // and we put the nan.link inside it  */}
          <LinkContainer to="/">
            <Nav.Link>Home Page</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Cart">
            <Nav.Link>Cart</Nav.Link>
          </LinkContainer>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search for shoes..."
            className="mr-sm-2" 
          />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
};
export default NavBar;
