import { Component } from "react";
import { useAuth0 } from '@auth0/auth0-react';

class LoginForm extends Component {

  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    return (
      <button onClick={() => loginWithRedirect()}>Log Isadasdn</button>
    );
  }
};

export default withAuth0(LoginForm);
