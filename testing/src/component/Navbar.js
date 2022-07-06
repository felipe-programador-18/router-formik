import React from 'react'
import { Link } from 'react-router-dom'

const NavNav = () => {
  return(<>
  <nav> 
    <Link to={'/'} >Home</Link>
    <Link to={'/search'}>Pesquisa</Link>
    <Link to={'/formularioone'} >Formulario de user1</Link>
    <Link to={'/formulariotwo'} >Formulario de user 2</Link>

  </nav>
  
  </>)
}

export default NavNav