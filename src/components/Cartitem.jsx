const Cartitem = ({cartitem,setcartitems,index}) => {
  function remove(){
    setcartitems(function(prev){
      const updated = [...prev]
      updated.splice(index,1)
      return updated
    })
  }
  return (
    <li>
      <img src={cartitem.img} alt={cartitem.title} />
      <p className="w-full break-words whitespace-normal text-sm">{cartitem.title}</p>
      <p>Price: <strong>{Number(cartitem.price).toLocaleString()}</strong></p>
      <p>instedof: <span className="line-through">{cartitem.insteadof}</span></p>
      <button className="rounded-sm border p-1 bg-amber-50 hover:bg-white cursor-pointer" onClick={remove}>delete</button>
    </li>
  )
}

export default Cartitem