import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../components/card.scss';
//TODO fix the button form the state array 
//TODO edit the style of the cards
//TODO ADD delte button 
//TODO 
class BookCards extends React.Component {
    render() {
        return (
          
            <Card style={{ width: '18rem' ,marginTop:'50px'}}>
                <Card.Img variant="top" src={this.props.item.img} />
                <Card.Body>
                    <Card.Title>Title: {this.props.item.title}</Card.Title>
                 
                </Card.Body>
                <ListGroup  className="list-group-flush">
                    <ListGroupItem style={{color:'white',background:'#292b2c'}}><strong>Author:</strong> {this.props.item.author}</ListGroupItem>
                    <ListGroupItem style={{color:'white',background:'#292b2c'}}><strong>Type:</strong> {this.props.item.status}</ListGroupItem>
                    <ListGroupItem style={{color:'white',background:'#292b2c'}}><strong>Pages:</strong>{this.props.item.pages}</ListGroupItem>
                    <ListGroupItem style={{color:'white',background:'#292b2c'}}>
                    <Row xs={2} md={4} lg={6}>
                    <Col><Button onClick={()=>this.props.deleteBook(this.props.item._id)} variant="danger">Delete</Button></Col>
                    <Col><Button onClick={()=>this.props.handleShow(this.props.item.title,this.props.item._id)}style={{marginLeft:'80px'}}variant="info">Update</Button></Col>
                        
                </Row>
                </ListGroupItem>
                </ListGroup>
            </Card>
        
        )
    }
}

export default BookCards;