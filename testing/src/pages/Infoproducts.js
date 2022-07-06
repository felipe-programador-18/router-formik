import React from 'react'
import { useParams } from 'react-router'

const InfoProducts = () => {
    
  const {id} = useParams()
  console.log('addd', id)

  return(<>
      
      <h3>Information about products !!</h3>
      <h1>More information about Products!! {id} </h1>
         <h2>This product is lot good, also have price much affordable for you acquiring!!</h2>
         <h3>This product is very interesting for you wanna traning or improve your health running!!</h3>


  </>)
}

export default InfoProducts