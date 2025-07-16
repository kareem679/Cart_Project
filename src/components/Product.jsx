
import star from "../assets/star-svgrepo-com.svg"
import { toast } from "react-toastify"
function Product({value,setcartitems}) {
   
    function handleclick(product){
        toast("Added To Cart 🛒 !!!")
        setcartitems(function(prev){
          return [...prev,product]
        })

    } 
    
  return (
    
    <li>
        <img src={value.img} alt={value.title} />
        <p className="w-full break-words whitespace-normal text-sm">{value.title} </p>
        <p>Rate: {Array(value.rate).fill(0).map(function(_,index){return <img key={index} src={star} alt={value.rate} className="w-5 h-10 inline" /> })}</p>
        <p>Price: <strong>{Number(value.price).toLocaleString()}</strong></p>
        <p>instedof: <span className=" line-through">{value.insteadof} </span></p>
        
        
        <button className=" rounded-sm border p-1 bg-amber-50 hover:bg-white cursor-pointer" onClick={function(){handleclick(value)}}>submit</button>
    </li>
  )
}
export default Product
