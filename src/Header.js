import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton'
class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link>
        {/* TODO: if the user is logged in, render a navigation link to profile page */}
        {isAuthenticated &&
         <Link to="/Profile" className="nav-link">Profile</Link>    
        }
        {/* TODO: if the user is logged in, render the `LogoutButton` */}
        {isAuthenticated &&
         <LogoutButton></LogoutButton>
         }
         </NavItem>
      </Navbar>
    )
  }
}

export default withAuth0(Header);
