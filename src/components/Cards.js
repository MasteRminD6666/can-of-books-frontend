import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class BookCards extends React.Component {
    render() {
        return (

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.item.image} />
                <Card.Body>
                    <Card.Title>{this.props.item.title}</Card.Title>
                    <Card.Text>
                    {this.props.item.desc}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{this.props.item.auth[0]}</ListGroupItem>
                    <ListGroupItem>{this.props.item.status}</ListGroupItem>
                    <ListGroupItem>{this.props.item.pages}</ListGroupItem>
                </ListGroup>
             
            </Card>

        )
    }
}

export default BookCards;