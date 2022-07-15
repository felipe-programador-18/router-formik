import {useContext} from 'react'

import { CreateContext } from '../Context/context'

export const UsehoockContextPerso = () => {
    
    const context = useContext(CreateContext)

    if(!context){
        console.log("context not exist")
    }
    return context
}

