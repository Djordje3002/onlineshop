//icons
import { FaLocationDot } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function HeaderComponent({setActiveHeader}) {

    return (
    <div className="flex justify-between items-center container mx-auto h-auto flex-col lg:flex-row py-3 ">
      <p>Need help? Call us on <a className="font-bold" href="tel:3812469538">381-246-9538</a></p>
      <p>Apply coupon Djordje for 10% discount</p>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 mr-4 lg:gap-4">
            <FaLocationDot size={20} />
            <span>Our Store</span>
        </div>
        <div className="flex items-center gap-2 lg:gap-4">
            <FaTruck size={20}/>
            <span>Track Your Order</span>
            <IoClose onClick={() => setActiveHeader(false)} size={24}/>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent
