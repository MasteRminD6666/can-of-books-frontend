import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Bookitems from './bookitems';
import FormHnadle from './components/form';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  componentDidMount = () =>{
    // const { user } = this.props.auth0; this is for the auth
    const userEmail = 'rami-zaitoun@hotmail.com';
    axios
    .get(`https://can-of-books201.herokuapp.com/books?email=${userEmail}`)
    .then( result =>{
      this.setState({
        books:result.data
      })

    })
    .catch (err =>{
      console.log('error');
    })
  }

  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>

        <h2>Your Essential Lifelong Learning</h2>
        <FormHnadle></FormHnadle>
      
        <Bookitems books = {this.state.books}></Bookitems>
        
      
      </>
    )
  }
}

export default withAuth0(BestBooks);
