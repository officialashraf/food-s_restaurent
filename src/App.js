
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Component/Signup';
import Loginup from './Component/Loginup';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Returnmsg from './Component/Returnmsg';
import Welcom from './Component/Welcom';
import Menu from './Component/Menu';
import Thank from './Component/thank';
import Order from './Component/Order';

function App() {
  return (
    <>
   
    <BrowserRouter>
    <Routes>
      <Route  path ='' element={<Signup/>} />
       <Route  path ='/Loginup' element={<Loginup/>} />
       <Route  path ='/Welcom' element={<Welcom/>} />
       <Route  path ='/Menu' element={<Menu/>} />
       <Route  path ='/Order' element={<Order/>} />
       <Route  path ='/thank' element={<Thank/>} />

       <Route path='*' element={<Returnmsg/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
