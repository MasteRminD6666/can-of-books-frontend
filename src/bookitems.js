import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.scss';

class Books extends React.Component {

    render() {
        return (
            <>
               
                    <Carousel variant="dark" style={{marginTop:'100px'}}>
                        {this.props.books.map((item) => {
                            return(
                           <Carousel.Item >
                           <img
                               className="d-block w-70 "
                               src={item.img}
                               alt="First slide"
                           />
                           <Carousel.Caption style={{color:'white'}}>
                               <h5>{item.title}</h5>
                               <p><strong>Description: <br></br></strong> {item.description}</p>
                               <p><strong>Status: </strong>{item.status}</p>
                               <p><strong>Author: </strong>{item.author}</p>
                               <p><strong>Pages: </strong>{item.pages}</p>
                               
                               
                           </Carousel.Caption>
                       </Carousel.Item>
                            )
                        })}
                   
                    </Carousel>
            </>
        )
    }
}

export default Books;