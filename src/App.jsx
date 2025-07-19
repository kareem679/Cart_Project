import { useEffect, useState } from 'react'
import './App.css'
import { ToastContainer} from 'react-toastify';
import Products from './components/products'
import Cartitems from './components/Cartitems'
import NavCom from './components/NavCom';
const products = [
  {
    id:1,
    title:"ldfgvdgjpkerk,dfopivjmwiop9rkasefsdlp[fwe",
    rate:3,
    price: 3000,
    insteadof:5000,
    img:"https://m.media-amazon.com/images/I/51g0nhNkzNL._SR480,440_.jpg"
  },
  {
    id:2,
    title:"ldfgvdgjpkerk,dfopivjmwiop9rkasefsdlp[fwe",
    rate:4,
    price: 3000,
    insteadof:5000,
    img:"https://m.media-amazon.com/images/I/51g0nhNkzNL._SR480,440_.jpg"
  },
  {
    id:3,
    title:"ldfgvdgjpkerk,dfopivjmwiop9rkasefsdlp[fwe",
    rate:1,
    price: 3000,
    insteadof:5000,
    img:"https://m.media-amazon.com/images/I/51g0nhNkzNL._SR480,440_.jpg"
  },
] 

function App() {

  const [loading,setloading] = useState(false)
  const [items,setitems] = useState([])
  const [isopen,setisopen] = useState(false)


useEffect(function(){
  async function getdata() {
    setloading(true)
    await new Promise((resolve) => setTimeout(resolve,Math.random() * 6000 + 500))  
    setitems(products)
    setloading(false)
  }
  getdata()
},[])

  return (
    <div>
      <NavCom  setisopen={setisopen}/>
      
      <div className="flex">
        <ToastContainer />
        {loading && <p>loading....</p>}
        {!loading && items && <Products values = {items}/>}
        {isopen && (
           <Cartitems isopen={isopen}/>
        )}
        


      </div>
    </div>    

  )
}

export default App
