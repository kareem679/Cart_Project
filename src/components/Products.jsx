
import { useContext } from "react"
import Product from "./Product"
import { ShoppingCartContext } from "../Context/Context"
function Products({values}){
    const {setcartitems} = useContext(ShoppingCartContext)
    return(
        <div>
            <ul className=" grid grid-cols-1 gap-20 mx-30 md:grid-cols-3 sm:grid-cols-2">
                {values.map(function(product){
                    return(
                        <Product key={product.id} value = {product} setcartitems={setcartitems}/>
                    )
                })}
            </ul>
        </div>
    )
}
export default Products