import { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button'


 class LoginButton extends Component {

  render() {  
    const { loginWithRedirect } = this.props.auth0;
    /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
    return <Button onClick={() => loginWithRedirect()} variant="primary">Log in </Button>
  }
    
}
export default withAuth0(LoginButton);