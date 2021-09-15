import axios from 'axios';
import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BookCards from './Cards';
import Row from 'react-bootstrap/Row';
import UpdateBook from './Update'
class FormHnadle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favbook: [],
            show: false,
            bookTitle: '',
            bookId:''
        }
    }
    addBook = (event) => {
        // window.location.reload(false);
        event.preventDefault();
        const { user } = this.props.auth0
        const email = user.email

        const postData = {
            BookName: event.target.bookName.value,
            ownerEmail: email
        }
        //https://can-of-books201.herokuapp.com/addBook
        axios.post(`https://can-of-books201.herokuapp.com/addbook`, postData)
            .then((results) => {
                this.setState({
                    favbook: results.data
                })
            })
            .catch((error) => {
                console.log('error on adding ', error);
            })

    }
    deleteBook = (id) => {
        const { user } = this.props.auth0
        const email = user.email
        console.log('Deleted');
        axios
            .delete(`https://can-of-books201.herokuapp.com/deleteBook/${id}?email=${email}`)
            .then((results) => {
                this.setState({
                    favbook: results.data
                })
            })
            .catch((err) => {
                console.log('error in deleting', err);
            })
    }
    handleClose = () => {
        this.setState({
            show: false
        })
    }
    handleShow = (title,id) => {
        this.setState({
            show: true,
            bookTitle: title,
            bookId :id

        })
      
    }
    updateBook = (event) => {
        event.preventDefault();
        const { user } = this.props.auth0
        const email = user.email
        const obj={
            title:event.target.bookName.value,
            email:email
        }
      
  
        axios
        .put(`https://can-of-books201.herokuapp.com/update/${this.state.bookId}`,obj)
        .then((result) => {
          this.setState({
            favbook: result.data
          })
        })
        .catch((err) => {
            console.log('error in deleting', err);
        })

    }


    render() {
        return (
            <>
                <Form onSubmit={this.addBook} style={{ marginTop: '20px' }}>
                    <Row xs='auto' >
                        <Form.Label><strong>Book name:</strong></Form.Label>
                        <Form.Control style={{ width: '20%' }} name='bookName' size="sm" type="text" placeholder="Search For Any Book" />

                        <Button style={{ width: '80px', marginLeft: '10px' }} variant="primary" type="submit">
                            ADD
                        </Button>
                    </Row>
                </Form>
                <Row xs={2} md={4} lg={6}>
                    {this.state.favbook.map((item) => {
                        return (
                            <BookCards handleShow={this.handleShow} item={item} deleteBook={this.deleteBook}></BookCards>
                        )
                    })}
                </Row>
                <UpdateBook
                    show={this.state.show}
                    handleClose={this.handleClose}
                    bookTitle={this.state.bookTitle}
                    updateBook={this.updateBook}

                ></UpdateBook>
            </>
        );
    }
}

export default withAuth0(FormHnadle);