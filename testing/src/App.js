import React from 'react'
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import PracticMore from './form';
import StructurForm from './formhoock';
import Testing from './Morek/testing';
import HomeAdding from './pages/Home';

const TestHere = () => {
  return (<>
   <h1>good aftermoon testing here!!!</h1>
   <Link to={'/testing'} > To Testing now </Link>
  </>)
}


function App() {
  return (
    
    <>
   
    <h1>Practice more about routers</h1>
  
     <Routes> 
       <Route path='/' element={<TestHere/>} />
       <Route path='/testing' element={<Testing/>} />
       <Route path='/Home' element={<HomeAdding/>} /> 


      </Routes>
      <PracticMore/>

      <StructurForm/>
    
  </> 
  );
}

export default App;
