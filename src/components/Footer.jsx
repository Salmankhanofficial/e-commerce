import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";

const Footer = () => {
  const footerdata = [
    {
      title: "About Us",
      path: "/aboutus",
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
  return (
    <div className="flex justify-center">
      <div className="w-11/12  h-screen mt-20">
        <div>
          <div className="flex items-center text-center gap-2 text-2xl font-semibold text-gray-400 ">
            <FaRegEnvelope />{" "}
            <p className="text-[#3b5d50] text-lg ">Subscribe to Newsletter</p>
          </div>
          <div className="flex w-full gap-5  flex-wrap   ">
            <input
              type="text"
              className="border border-gray-300 py-3 px-2 rounded-lg w-72 "
              placeholder="Enter your name"
            />
            <div className=" flex flex-wrap gap-4">
              <input
                type="text"
                className="border border-gray-300 py-3 px-2 rounded-lg  w-72 "
                placeholder="Enter your email"
              />
              <div>
                <button
                  type="button"
                  className="bg-[#3b5d50]  px-3.5 py-3 rounded-xl text-white"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-[#3B5D50] font-semibold  text-3xl">Furni.</div>

          <div className="flex w-1/2 gap-8">
            <div className="text-[#6a6a6a] leading-7">
              Transform your living space into a haven of comfort and style with
              Furni Website. Explore our curated collection of premium furniture
              and elevate your home with quality craftsmanship and timeless
              design. Shop now and discover the perfect pieces to make your
              house feel like a true sanctuary.
            </div>
            <div className="flex flex-col whitespace-nowrap gap-2">
              {footerdata?.map((item, index) => (
                <Link
                  key={index}
                  to={item?.path}
                  className="text-[#2f2f2f] hover:text-[#979797]"
                >
                  {item?.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        '
        <div className="flex gap-1.5">
          <div className="bg-[#DCE5E4] hover:bg-[#3B5D50] hover:text-white text-[#3B5D50] w-10 h-10 flex items-center justify-center rounded-full text-2xl">
            <TiSocialFacebook />
          </div>
          <div className="bg-[#DCE5E4] hover:bg-[#3B5D50] hover:text-white text-[#3B5D50] w-10 h-10 flex items-center justify-center rounded-full text-2xl">
            <TiSocialFacebook />
          </div>
          <div className="bg-[#DCE5E4] hover:bg-[#3B5D50] hover:text-white text-[#3B5D50]  w-10 h-10 flex items-center justify-center rounded-full text-2xl">
            <TiSocialFacebook />
            sdfsdf
          </div>
          <div className="bg-[#DCE5E4] hover:bg-[#3B5D50] hover:text-white text-[#3B5D50]    w-10 h-10 flex items-center justify-center rounded-full text-2xl">
            <TiSocialFacebook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
