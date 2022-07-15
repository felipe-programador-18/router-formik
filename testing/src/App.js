import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import PracticMore from './pages/form';
import StructurForm from './pages/formhoock';
import NavNav from './component/Navbar';
import {Search} from './component/Search';
import Home from './pages/Home';
import InfoProducts from './pages/Infoproducts';
import Notfound from './pages/Notfound';
import Product from './pages/Product';
import Searchbar from './pages/Searchbar';
import { Contextprovider } from './Context/context';





function App() {
  
 
  return (
    
    <>
   <Contextprovider>
    <BrowserRouter>
      <NavNav/>
      <Search/>   
        <Routes> 
         <Route path='/' element={ <Home/>} />
         <Route path='/formularioone' element={<PracticMore/>} /> 
         <Route path='/formulariotwo' element={<StructurForm/>} /> 
         {/* create router about search to simulation aobut api */ }
         <Route path='/search'  element={<Searchbar/> } /> 
         
         {/*create infoproducts router dynamic */}
         <Route path='/products/:id' element={<Product/> }   />
         <Route path='/products/:id/info'  element={<InfoProducts/>}  />  

         <Route path='*' element={<Notfound/>}  />            



        </Routes>
  
    </BrowserRouter>
    </Contextprovider>
  </> 
  );
}

export default App;
