import React from 'react';
import movies from './movies';
import { Row, Col } from "react-bootstrap";
import MovieCards from './MovieCards';

function Screen() {
  return (
    <div>
      <h1 className='text-center'>Popular Movies</h1>
          <Row>
               {movies.map((mov)=>(
               <Col key={mov.id} sm={12} md={6} lg={4} xl={3}>
           <MovieCards mov={mov}/>
        </Col>
     ))}
   </Row>
</div>
 );
}

export default Screen