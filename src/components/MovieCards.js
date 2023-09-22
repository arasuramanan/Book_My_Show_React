import React from 'react';
import { Card } from "react-bootstrap"; 

function MovieCards({mov}) {
  return (

   <Card className='my-3 p-3 rounded'>
    <Card.Img src={mov.image} />

 <Card.Body>
    <Card.Title as="div">
        <strong>{mov.name}</strong>
        <p>{mov.description}</p>
    </Card.Title>

<Card.Text as="div">
    <div className='my-3'>
        {mov.rating} from {mov.numReviews} reviews
    </div>
</Card.Text>


    <Card.Text as="h3">Rs. {mov.price}</Card.Text>
</Card.Body>
</Card>
  );
}

export default MovieCards