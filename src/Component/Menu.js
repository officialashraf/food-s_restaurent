
//import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import './Signup.css'
import './Menu.css'
import assets from './assets/burger.jpeg'
import image from './assets/coke.jpeg'
import pic from './assets/fries.jpeg'
import photo  from './assets/pepsi.jpeg'
import { useNavigate } from 'react-router-dom';






function Menu() {
    
    const navigate = useNavigate();

  const handleClick = () => {
    
    navigate('/Order');
  };
    return (
      <>
  
  
      <h1> MENU </h1>
      <div className='tut' >
        <img src={assets} alt='hello' />
        <h4>Burger</h4>
        <h6>price:200</h6>
        <Button variant="primary">+</Button>
        <Button variant="primary">-</Button>
      </div>
      <div className='tut'>
        <img src={image} alt='hello' />
        <h4>Coke</h4>
        <h6>Price:100</h6>
        <Button variant="primary"  onClick={handleClick} >+</Button>
        <Button variant="primary">-</Button>
    </div>
      <div className='tut' >
        <img src={pic} alt='hooo' />
        <h4>Fries</h4>
        <h6>Price:50</h6>
        <Button variant="primary" onClick={handleClick} >+</Button>
        <Button variant="primary">-</Button>
        </div>
      <div className='tut'>
        <img src={photo} alt='hello' />
        <h4>Pepsi</h4>
        <h6>Price:50</h6>
        <Button variant="primary" onClick={handleClick} >+</Button>
        <Button variant="primary" >-</Button>
        </div>
    
      </>
    );
  }
  
  export default Menu;