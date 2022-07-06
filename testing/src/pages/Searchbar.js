import { useSearchParams, Link } from "react-router-dom"
import { useFecthing } from "../hoock/useFetching"

const Searchbar  = () => {
 const [searchParams] = useSearchParams() 
 // this case the url is where api 3000!!
 const url ="http://localhost:3000/products?" + searchParams

 const {data:items, loading, error} = useFecthing(url)


    return (<>
    <div> 
    <h1>Search new survey</h1>
    {loading && <p>Loading search Product....</p>}
           <ul className='products'>
              { items && items.map((product) => (<li key={product.id}>
                <h1> {product.name} </h1> 
                <p>  {product.price} </p>  
                <Link to={`/products/${product.id}`} >Details!</Link>
                </li>))}
           </ul>
    </div>
    </>)
}

export default Searchbar