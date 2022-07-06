import React from 'react'
import styles from "./homemodule.css"
import { useFecthing } from '../hoock/useFetching'
import { Link } from 'react-router-dom'

const Home = () => {
    
    //remind did destrucment about fetching!!
     const {data:item, loading,error } = useFecthing()
     console.log('somethings here', item)   
     
    return ( <div className={styles.container} >
      {loading && <p>Loading......</p>}
      <h2>here is home my frinds</h2>

      <ul>
        {item && item.map((items) => (
            <li key={items.id} > {items.name}- R$ {items.price} </li>
        
        ))}
        <Link to={''} >More information about link!!</Link>
      </ul>
    
   </div> ) 
}

export default Home