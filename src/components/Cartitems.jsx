import { useContext } from "react"
import Cartitem from "./Cartitem"
import { ShoppingCartContext } from "../Context/Context"


const Cartitems = () => {
  const {cartitems,setcartitems } = useContext(ShoppingCartContext)
  return (
    <div className="max-h-[800px] w-1/5 overflow-y-auto   ">
        <h1 className="text-3xl m-5 gap-5">Cart:{cartitems.length}</h1>
        {cartitems.length === 0 ? (
          <h1 className="text-3xl w-full">cart empty</h1>          
        ):(
          <ul className="grid grid-cols-1  ">
            {cartitems.map(function(cartitem,index){
            return <Cartitem  index={index} key={cartitem.id} cartitem = {cartitem} setcartitems= {setcartitems}/>
            })}
        </ul>
        )}

         
    </div>
   
  )
}

export default Cartitems