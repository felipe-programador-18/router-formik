import React from 'react'
import styles from "./homemodule.css"
import { useFecthing } from '../hoock/useFetching'
import { Link} from 'react-router-dom'
import { UsehoockContextPerso } from '../hoock/useContext'

const Home = () => {
    const url = "http://localhost:3000/products"
    //remind did destrucment about fetching!!
    const {data:item, loading,error } = useFecthing(url)
    
    const {name, setName} = UsehoockContextPerso()
    
    
    
    console.log('somethings here', item)   
     
    return ( <div className={styles.container} >
      {loading && <p>Loading......</p>}
      {error && <p> here!! {error}</p>}
      <h2>here is home my frinds</h2>
      {name}
      <button onClick={() => setName(("felipe"))} >Trade Name</button>
      
      <ul>
        {item && item.map((product) => (
            <li key={product.id} > <p>{product.name} </p>
             <br/>
             <h1>R$ {product.price}
             </h1>

             {/* remind i need create route dynamic here!! */}
             <Link to={`/products/${product.id}`} >More information about link!!</Link>
             </li>
        
        ))}

      </ul>
    
   </div> ) 
}

export default Home