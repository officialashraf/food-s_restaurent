import './Welcom.css'
//import '../../public/assets/logo1.svg'
import { useNavigate } from 'react-router-dom';
import './Menu'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function Welcom() {
  const navigate = useNavigate();

  const handleClick = () => {
    
    navigate('/Menu');
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
      <h1>WELCOME TO FOOD'S RESTAURENT</h1>
    <button onClick={handleClick} > GO TO MENU</button>
    </>
  );
}

export default Welcom;