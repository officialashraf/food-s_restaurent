
import './Signup.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import React from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';




function Loginup() {
  const navigate = useNavigate();

  const handleClick = () => {
    
    navigate('/Welcom');
  };
    
    return (
      <>
  <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <i class="fa-solid fa-utensils mx-3"></i>
           FOOD RESTAURENT
          </Navbar.Brand>
        </Container>
      </Navbar>
      <nav>
    <Form>
    
    <Form.Label > LOGIN UP HERE </Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
    
      </Form.Group>
  <br/>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    
      <button onClick={handleClick} type="submit">
        Submit
      </button>
      
      
    </Form>
    </nav>
      </>
    );
  }
  
  export default Loginup;