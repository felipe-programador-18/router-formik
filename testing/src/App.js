import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import PracticMore from './pages/form';
import StructurForm from './pages/formhoock';
import Testing from './Morek/testing';
import NavNav from './component/Navbar';





function App() {
  
 
  return (
    
    <>
   
    <h1>Practice more about routers</h1>    
     <Routes> 
     
       <Route path='/' element={''} />
       <Route path='/testing' element={<Testing/>} />
       <Route path='/' element={''} /> 
      
      </Routes>
      <PracticMore/>

      <StructurForm/>
    
  </> 
  );
}

export default App;
