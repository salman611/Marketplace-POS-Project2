
import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div>
      <p>Hello....</p>
      <Nav>
      {/* <NavbarBrand href="/">Home Page</NavbarBrand> */}
        <NavItem>
          <Link to="/">Home Page</Link>
        </NavItem>
        <NavItem>
        <Link to="/Cart">Cart</Link>
        </NavItem>
      </Nav>
     
    </div>
  );
}

export default NavBar;
// import React, { useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   NavbarText
// } from 'reactstrap';

// const NavBar = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar color="light" light expand="md">
//         <NavbarBrand href="/">Home Page</NavbarBrand>
   
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="mr-auto" navbar>
      
//             <NavItem>
//               <NavLink href="/Cart/">Cart</NavLink>
//             </NavItem>
           
//           </Nav>
//           <NavbarText>Search</NavbarText>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default NavBar;