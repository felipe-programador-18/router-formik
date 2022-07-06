import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import PracticMore from './pages/form';
import StructurForm from './pages/formhoock';
import NavNav from './component/Navbar';
import Search from './component/Search';
import Home from './pages/Home';
import InfoProducts from './pages/Infoproducts';
import Notfound from './pages/Notfound';
import Product from './pages/Product';





function App() {
  
 
  return (
    
    <>
   
    <BrowserRouter>
      <NavNav/>   
        <Routes> 
         <Route path='/' element={ <Home/>} />
         <Route path='/formularioone' element={<PracticMore/>} /> 
         <Route path='/formulariotwo' element={<StructurForm/>} /> 
         {/* create router about search to simulation aobut api */ }
         <Route path='/search'  element={<Search/>} /> 
         
         {/*create infoproducts router dynamic */}
         <Route path='/products/:id' element={<Product/> }   />
         <Route path='/products/:id/info'  element={<InfoProducts/>}  />  

         <Route path='*' element={<Notfound/>}  />            



        </Routes>
  
    </BrowserRouter>
    
  </> 
  );
}

export default App;
