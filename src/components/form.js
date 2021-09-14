import axios from 'axios';
import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BookCards from '../components/Cards';
class FormHnadle extends React.Component {
    constructor(props){
        super(props)
        this.state={
            favbook:[]
        }
    }
    addBook= (event) => {
        // window.location.reload(false);
      event.preventDefault();
      const { user } =this.props.auth0
      const email=user.email
      
      const postData={
          BookName: event.target.bookName.value,
          ownerEmail: email
      }
      //https://can-of-books201.herokuapp.com/addBook
      axios.post(`https://can-of-books201.herokuapp.com/addBook`,postData)
      .then((results) => {
       this.setState({
           favbook:results.data
       })
      })
      .catch((error) => {
       console.log('error on adding ',error);
      })
      
    }
    render() {
        return (
            <>
            {console.log(this.state.favbook)}
                <Form onSubmit={this.addBook}>
                    
                    <Form.Label>Book name</Form.Label>
                     <Form.Control name ='bookName' size="sm" type="text" placeholder="Search For Any Book" />
                    <br></br>    
                    <Button variant="primary" type="submit">
                        ADD
                    </Button>
                </Form>
                {this.state.favbook.map((item) => {
                 return <BookCards item ={item}></BookCards>
                })}
               
            </>
        );
    }
}

export default withAuth0(FormHnadle);