import React from 'react'
import styles from  "./searchmodule.css"


const Search = () => {
    
    return ( <div className={styles.container} >
         
          <h2>Search results date!!</h2>
         <form  >
            <label >
                <input type='search' name='search'/>
            </label>
         </form>

    </div>)
}

export default Search