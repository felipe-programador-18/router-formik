import React from 'react'
import { useFecthing } from '../hoock/useFetching'

import { useSearchParams } from 'react-router-dom'

const Newsearch = () => {
 //create more one code to remind how create search about useparams
  const [newParameters] = useSearchParams()

  const url = "http://localhost:3000/products?" + newParameters 
  const {data:items, loading, error} = useFecthing(url)
  console.log("testing more code inside newsearch ", items)

return(<>
           {loading && <p> Loading search .... </p> }
         
         {items &&  items.map((item) => (<div key={item.id} >
            <p> {item.name} </p>
            <p> {item.price}</p>

         </div>))}
  <h1>adding more testing to practice and evolv always</h1>
   

</>)

}


export default Newsearch



