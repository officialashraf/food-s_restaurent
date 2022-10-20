import { useNavigate } from "react-router-dom";
function Returnmsg() {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate('/');
  };
    return (
      <>
  
      <h1> <div> ERROR <p>PAGE NOT FOUND</p>GO TO FOOD RESTAURENT  </div></h1>
      <button onClick={handleclick}> GO TO MENU</button>
  
  
      </>
    );
  }
  
  export default Returnmsg;