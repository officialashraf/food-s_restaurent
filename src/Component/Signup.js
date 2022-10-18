
import './Signup.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import React from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate} from "react-router-dom";
import './Loginup.js'



function Signup() {
  const navigate = useNavigate();

  const handleClick = () => {
    
    navigate('/Loginup');
  };
  const handClick = () => {
    
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
    <Form.Label>  SIGNUP HERE!</Form.Label>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>
  
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
    
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
  <br/>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <button onClick={handClick}  type="submit">
        Submit
      </button>
      <p>You Have Already Signiup Click Here !</p>
      <button onClick={handleClick}  > LOGIN</button>
      
    
    </Form>
    </nav>
      </>
    );
  }
  
  export default Signup;