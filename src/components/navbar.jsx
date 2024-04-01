import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const navbardata = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About Us",
      path: "/aboutus",
    },

    {
      title: "Shop",
      path: "/shop",
    },
    {
      title: "About us",
      path: "/",
    },
    {
      title: "Services",
      path: "/aboutus",
    },
    {
      title: "Blog",
      path: "/aboutus",
    },
    {
      title: "Contact us",
      path: "/aboutus",
    },
  ];

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  const linkClass = (index) => {
    if (index === activeLink) {
      return "border-b-4 border-yellow-400 text-white";
    }
    return "custom hover:text-white";
  };
  return (
    <div className="flex justify-center items-center bg-[#3B5D50] h-20">
      <div className="w-[90%] flex justify-between items-center">
        <div className="text-white font-semibold  text-4xl">
          Furni<span className="text-gray-400">.</span>
        </div>
        <div className="flex gap-20 text-gray-400 font-semibold ">
          <div className="flex gap-7 ">
            {navbardata?.map((item, index) => (
              <Link
                key={index}
                to={item?.path}
                className={linkClass(index)}
                onClick={() => handleLinkClick(index)}
              >
                {item?.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center text-2xl gap-7">
            <Link to="/" className="hover:text-white">
              <BsFillPersonFill  />
            </Link>
            <Link to="/" className="hover:text-white">
              <FaCartShopping />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
