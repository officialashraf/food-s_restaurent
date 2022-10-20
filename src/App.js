
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Loginup from './Component/Loginup';
import Signup from './Component/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Returnmsg from './Component/Returnmsg';
import Welcom from './Component/Welcom';
import Menu from './Component/Menu';
import Thank from './Component/thank';
import Order from './Component/Order';
import Tupple from './Component/tupple'

function App() {
  return (
    <>
    <div><Tupple/></div>
    <BrowserRouter>
    <Routes>
      
       <Route  path ='' element={<Loginup/>} />
       <Route  path ='/Signup' element={<Signup/>} />
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
