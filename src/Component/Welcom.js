import './Welcom.css'
//import '../../public/assets/logo1.svg'
import { useNavigate } from 'react-router-dom';
import './Menu'

function Welcom() {
  const navigate = useNavigate();

  const handleClick = () => {
    
    navigate('/Menu');
  };
  return (
    <>
      <h1>WELCOME TO<br/> FOOD'S RESTAURENT</h1>
    <button onClick={handleClick} > GO TO MENU</button>
    </>
  );
}

export default Welcom;