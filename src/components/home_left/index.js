import React from 'react';
import '../home_left/style.css';
import {
  Container,
  Row,
  Col,
  Button
 } from 'react-bootstrap';
import Typewriter from 'typewriter-effect'
import {
   Link
  } from "react-router-dom";

  function Home_Left() {
    const text = ['hello', 'hi']
  return (
   <Container className="home-left" >
    <Row className="home-left-main">
       <Col xl={12} className="home-left-main-col">
         <h1 className="first-line">
           Hello! 
         </h1>
         <h2 className="second_line">
           I am <strong>Oluwaseun Ismaila</strong>
         </h2>
         <h3 style={{color: '#c1c1c1'}}>Nice to make your acquaintance. I am a
         <Typewriter
  options={{
    strings: ['Frontend Developer.','Mobile App Developer.','Project Manager.','Product Manager.','Tech Enthusiast.','Videogame enthusiast.','Cinephile.','an aspiring fullstack developer'],
    autoStart: true,
    loop: true,
          }}
        />    
         </h3>
          
           <br />
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link to="/about" style={{ textDecoration: 'none', color: 'white' }} className="home-left-aboutme">About Me</Link></Button> &nbsp;
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link style={{ textDecoration: 'none', color: 'white' }} to="/contact" className="home-left-aboutme">Contact Me</Link></Button>
         </Col>
     </Row>
   </Container>
  );
}

export default Home_Left;
