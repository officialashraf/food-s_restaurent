import { useNavigate } from 'react-router-dom';
import './order.css'

function Order() {
    const navigate = useNavigate();

  const handleClick = () => {
    
    navigate('/Thank');
  };
    
    return (
      <>
        <div className='ord'> <h1>your order </h1> </div>
        
      
        
      <button onClick={handleClick} >Save&check</button>
      <button >cancel</button>
      </>
    );
  }
  
  export default Order;