import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'


 export const  Trysearch =  () => {
  const navigate = useNavigate()

  const [query, setQuery] = useState()

  const HandlSubmite = (e) => {
    e.preventDefault()
    navigate('/newsearch?q=' + query)
  }

    return( <div> 
         <form onSubmit={HandlSubmite} >
             
             <label>
                <input type='text'
                 name='search'
                 onClick={(e) =>  setQuery(e.target.value) }  />
             </label>
             <label>
                <input type="submit" value='enviar' />
             </label>
               

         </form>


    </div> )

}

