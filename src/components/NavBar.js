
import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = (props) => {


  return (
 <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Salman</Navbar.Brand>
    <Nav className="mr-auto">
      <LinkContainer to="/">
      <Nav.Link>Home Page</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/Cart">
      <Nav.Link>Cart</Nav.Link>
      </LinkContainer>
    {/* <Link to="/">Home Page</Link>
    <Link to="/Cart">Cart</Link> */}
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search for shoes..." className="mr-sm-2" />
      <Button variant="outline-info" >Search</Button>
    </Form>
  </Navbar>
  </div>
    );
}
export default NavBar; 

