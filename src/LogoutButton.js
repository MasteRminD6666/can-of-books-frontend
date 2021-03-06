import { Component } from "react";
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button'
class LogoutButton extends Component {

  render() {
    const { isAuthenticated,logout } = this.props.auth0;
      
    return isAuthenticated && (
     
      <Button onClick={() => {
        logout({ returnTo: window.location.origin });
      }}variant="danger">Log Out </Button>
    );
  }
};

export default withAuth0(LogoutButton);
