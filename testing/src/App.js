import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import PracticMore from './pages/form';
import StructurForm from './pages/formhoock';
import NavNav from './component/Navbar';
import Search from './component/Search';
import Home from './pages/Home';





function App() {
  
 
  return (
    
    <>
   
    <BrowserRouter>
      <NavNav/>   
        <Routes> 
         <Route path='/' element={ <Home/>} />
         <Route path='/formularioone' element={<PracticMore/>} /> 
         <Route path='/formulariotwo' element={<StructurForm/>} /> 
       
         <Route path='/search'  element={<Search/>} /> 

        </Routes>
  
    </BrowserRouter>
    
  </> 
  );
}

export default App;
