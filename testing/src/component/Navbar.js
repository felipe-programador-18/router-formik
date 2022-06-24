import React from 'react'
import { Link } from 'react-router-dom'

const NavNav = () => {
  return(<>
  <nav> 
    <h1>Home here</h1>

    <Link to={'/'} >Home</Link>
    <Link to={'/testing'} >Testing</Link>
  </nav>
  
  </>)
}

export default NavNav