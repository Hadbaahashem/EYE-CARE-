import React from 'react'
import { Card, Col,Button } from 'react-bootstrap'
import './Gallery.css'
import NavBar from '../Nav/NavBar'



 const GalleryCard = (props) => {
      return (
        <div>
        <NavBar/>
        <div className="container mt-2">
                <h1 className='text-center mt-2'>Detection Gallery</h1>
        <div className='d-flex justify-content-between align-iteams-center mt-5'>        
        
        <Card className='mb-5' style={{ width: '22rem',height: "18rem" }}>
        <Card.Img variant="top" src={props.img}  style={{ width: '100px', textAlign: "center", margin: "auto" }} className="mt-2" />
        <Card.Body className='text-center mb-5'>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
          props.description
          </Card.Text>
          <Button variant="danger" className='col-lg-6 text-center'>Delete</Button>
        </Card.Body>
      </Card>
      
      </div>
      </div>
      </div>
      
      )
    }
    
    export default GalleryCard;

