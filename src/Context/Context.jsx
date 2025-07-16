import { createContext,useState,useEffect } from "react"

export const ShoppingCartContext = createContext({})
const initiolvalue = localStorage.getItem("cartitems") ?
JSON.parse(localStorage.getItem("cartitems")) :
[]

const ContextProvider = ({children}) => {
  const [cartitems,setcartitems] = useState(initiolvalue)

  useEffect(function(){
        localStorage.setItem("cartitems",JSON.stringify(cartitems))
    },[cartitems])
  return (
    <ShoppingCartContext.Provider value={{cartitems,setcartitems}}>
        {children}
    </ShoppingCartContext.Provider>
  )
}

export default ContextProvider