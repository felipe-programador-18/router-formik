import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useFecthing } from '../hoock/useFetching'


const Product = () => {
    const { id } = useParams()

    const url = "http://localhost:3000/products/" + id;
    const {data:product, loading,error} = useFecthing(url)
    console.log('have some ',product)
    

    return(<>
      <h1>Id of products gfdgfdg!! {id} </h1>
      {error && <p>Here error here!!!</p> }
      {loading && <h1>Carregando ....</h1> }

       {product && ( <div>
        <h3> {product.name} </h3>
        <h5>{product.price}</h5>
        <Link to={`/products/${product.id}/info`} > More information</Link>
       </div>) }
       
            {/*  */}
         
    </>)

}

export default Product