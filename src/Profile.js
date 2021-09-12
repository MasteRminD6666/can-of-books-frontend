import { Component } from "react";
import { withAuth0 } from '@auth0/auth0-react';
class Profile extends Component {

  render() {
    /* TODO: render information about logged in user */
    const { user } = this.props.auth0;
    /* STRETCH TODO: if no logged in user then redirect home */
    return <div>Hello {user.name}</div>;
  }
};

export default withAuth0(Profile);
