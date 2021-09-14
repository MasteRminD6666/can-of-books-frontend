import axios from 'axios';
import React from 'react';
import { Card } from 'react-bootstrap';
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
      const postData={
          BookName: event.target.bookName.value,
              
      }
      //https://can-of-books201.herokuapp.com/addBook
      axios.post(`http://localhost:3001/addbook`,postData)
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

export default FormHnadle;