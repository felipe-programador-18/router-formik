
import React, {createContext, useState} from 'react'


export const CreateContext = createContext()

export const Contextprovider = ({children}) => {
   
  const [name, setName] = useState('Martins')
  
   return ( 
  <CreateContext.Provider  value={{name,setName}} >
    {children}
  </CreateContext.Provider>
   )
}