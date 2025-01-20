import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const gallery = () => {
  
   return (
       <section id="about" className="py-5">
         <Container>
           <Row>
             <Col md={4}>
               <h2>Gallery</h2>
               <p>
                
               </p>
             </Col>
             <Col md={4}>
               <img
                 src="/photos/image 0.png"
                 alt="About Us"
                 className="img-fluid"
               />
               <img
                 src="/photos/image 1.png"
                 alt="About Us"
                 className="img-fluid"
               />
                <img
                 src="/photos/image 2.png"
                 alt="About Us"
                 className="img-fluid"
               />
                <img
                 src="/photos/image 3.png"
                 alt="About Us"
                 className="img-fluid"
               />
               <img
                 src="/photos/image 4.png"
                 alt="About Us"
                 className="img-fluid"
               />
                <img
                 src="/photos/image 5.png"
                 alt="About Us"
                 className="img-fluid"
               />
             </Col>
           </Row>
         </Container>
       </section>
     );
   };
   

export default gallery
