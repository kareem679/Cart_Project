import { useContext } from "react"
import Cartitem from "./Cartitem"
import { ShoppingCartContext } from "../Context/Context"


const Cartitems = () => {
  const {cartitems,setcartitems } = useContext(ShoppingCartContext)
  return (
    <div>
        <h1>Cart {cartitems.length}</h1>
        <ul className="grid grid-cols-1 gap-20 mx-30 md:grid-cols-3 ">
            {cartitems.map(function(cartitem,index){
            return <Cartitem  index={index} key={cartitem.id} cartitem = {cartitem} setcartitems= {setcartitems}/>
            })}
        </ul>
         
    </div>
   
  )
}

export default Cartitems