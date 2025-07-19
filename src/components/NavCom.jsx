

    const NavCom = ({setisopen}) => {
        function handel(){
            setisopen((prev) => !prev)
        }
    return (
        <nav className="p-7 m-auto bg-black text-white">
            <ul className="flex justify-between">
                <li className='text-2xl'>Home</li>
                <li className='text-2xl '><button className="cursor-pointer" onClick={handel}><i className="fa-solid fa-cart-shopping"></i></button> </li>
            </ul>
        </nav>
    )
    }

    export default NavCom