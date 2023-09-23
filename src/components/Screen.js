import React from 'react';
import movies from './movies';
import { Row, Col } from "react-bootstrap";
import MovieCards from './MovieCards';
import ReactStars from 'react-rating-stars-component';


function Screen() {

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };    

  return (
    <div>
      <h1 className='text-center'>Popular Movies</h1>
          <Row>
               {movies.map((mov)=>(
               <Col key={mov.id} sm={12} md={6} lg={4} xl={3}>
           <MovieCards mov={mov}/>
           <ReactStars
          count={5}
        onChange={ratingChanged}
          size={24}
        activeColor="#ffd700"/>
        </Col>
     ))}
   </Row>
</div>
 );
}

export default Screen