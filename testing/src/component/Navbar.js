import React from 'react'
import { Link } from 'react-router-dom'

const NavNav = () => {
  return(<>
  <nav> 
    <Link to={'/'} >Home</Link>
    <Link to={'/testing'} >Testing</Link>
    <Link to={''} >Formulario de user</Link>
  </nav>
  
  </>)
}

export default NavNav