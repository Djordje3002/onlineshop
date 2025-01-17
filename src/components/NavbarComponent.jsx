import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { FaUser } from "react-icons/fa";

import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavbarComponent() {

  const {totalProduct} = useSelector((state) => state.cartStore);

  return (
    <div className="bg-primaryColor">
      <div className="container mx-auto h-auto gap-2 flex justify-between items-center py-1 lg:py-4 flex-col lg:flex-row">
        <Link to={'/'} className="text-2xl font-bold text-white">CoolShop</Link>

        {/*SEARCH BAR*/}
        <div className="bg-white rounded-[20px]">
            <input className="px-4 py-2 bg-transparent outline-none rounded-[20px] placeholder:text-secondaryColor bg-white" type="text" placeholder="Search"/>
            <button className="bg-secondaryColor px-4 py-2 rounded-[20px] weight-bold text-white">Search</button>
        </div>

        {/*Login and Favourites*/}
        <div className="flex items-center gap-4 text-white">
            <div className="flex items-center gap-2">
                <FaUser size={20} />
                
                 <SignedOut>
                <SignInButton />
                </SignedOut>
                <SignedIn>
                <UserButton showName className="text-white" style={{color: "white"}}  />
                </SignedIn> 

            </div>

            <div className="flex items-center gap-2">
                <FaCartShopping size={20} />
                <span className="font-bold bg-secondaryColor rounded-full w-5 h-5 flex justify-center items-center">{totalProduct}</span>
                <Link to='/cart' className="cursor-pointer">Cart</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarComponent
