import React, { useState } from 'react'
import styles from  "./searchmodule.css"
import { useNavigate } from 'react-router-dom'


 export const Search = () => {
     // remind with useNavigate
     const navigate = useNavigate()

     const [query, setQuery] = useState()
     const handlSumit = (e) => {
        e.preventDefault();
        navigate("/search?q=" + query)
      }


    return ( <div className={styles.container} >
         
          <h2>Search results date!!</h2>
         <form onSubmit={handlSumit}  >
            <label >
                <input type='text' onClick={(e) => setQuery(e.target.value) } />
            </label>
            <label>
                <input type='submit'  value='Buscar' />
            </label>
         
         </form>

    </div>)
}

