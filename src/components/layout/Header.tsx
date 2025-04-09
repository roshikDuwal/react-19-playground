import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [cartCount, setCartCount] = useState(0);

    const getNavLinkStyle = ({ isActive }: { isActive: boolean }) => {
        return isActive ? "font-medium text-red-500" : "font-medium text-gray-500 hover:text-gray-600"
    }


    return (

        <div className="flex flex-col w-full">
            {/* Top announcement bar */}
            <div className="flex justify-between items-center bg-gray-900 text-white px-4 py-2">
                <p className="text-sm">Free shipping, 30-day return or refund guarantee.</p>
            </div>

            {/* Main navigation */}
            <div className="flex justify-between items-center bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center">
                    <div className="border-2 border-black px-2 py-1">
                        <span className="font-bold text-lg"> STORE</span>
                    </div>
                </div>

                {/* Nav links */}
                <div className="hidden md:flex space-x-8">
                    <NavLink to={"/"} className={getNavLinkStyle}>HOME</NavLink>
                    <NavLink to={"/movies"} className={getNavLinkStyle}>MOVIES</NavLink>
                    <NavLink to={"/contact"} className={getNavLinkStyle}>CONTACT</NavLink>
                </div>

                {/* Cart button */}
                <div className="flex items-center">
                    <button className="flex items-center space-x-1 bg-gray-900 text-white px-4 py-2 rounded">
                        {/* <Cart size={20} /> */}
                        <span>{cartCount}</span>
                    </button>
                </div>
            </div>
        </div>
    );

}

export default Header
