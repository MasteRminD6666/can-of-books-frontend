import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Update extends React.Component {
    render() {
        return (
            <>
                <Modal  show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Change The Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updateBook}>
                            <Form.Group className="mb-3" controlId="as it was">
                                <Form.Label><strong>Book Name</strong></Form.Label>
                                <Form.Control name ='bookName' type="text" defaultValue={this.props.bookTitle} placeholder="Enter Book Name" />
                                <Form.Text className="text-muted">
                                    Let me bring a book from my mind ^_^.
                                </Form.Text>
                            </Form.Group>
                            <Button type="submit" onClick={this.props.handleClose}  style={{marginLeft:'342px'}}variant="primary">
                            Save Changes
                        </Button>
                        </Form>


                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default Update;