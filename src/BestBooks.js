import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Bookitems from './bookitems'

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
    .get(`http://localhost:3001/books?email=${userEmail}`)
    .then( result =>{
      this.setState({
        books:result.data
      })
      console.log(result);
    })
    .catch (err =>{
      console.log('error');
    })
  }

  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>

        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
      
        <Bookitems books = {this.state.books}></Bookitems>
        
      
      </>
    )
  }
}

export default withAuth0(BestBooks);
