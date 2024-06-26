import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineCopyright } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = Date.now().toExponential();
  return (
    
    <div className="flex justify-center md:mx-2 h-96 border-t-4bg-gradient-to-t from-gray-500 to-white mt-1">
      <div className="flex justify-around  w-40 md:w-96 md:h-20 h-12 my-auto text-2xl md:text-6xl sm:text-white md:text-blue-500">
        <a href="#" target="_blank" className="">
          <BiLogoFacebookCircle />
        </a>
        <a href="#" target="_blank" className="">
          <BsWhatsapp />
        </a>
        <a href="#" target="_blank" className="">
          <BsLinkedin />
        </a>
        <a href="#" target="_blank" className="">
          <BsInstagram />
        </a>
        <a href="#" target="_blank" className="">
          <BsGithub />
        </a>
      </div>
      <div className="absolute bottom-0 border">
        <p className="p-2">
          <span className="inline-block">
            <AiOutlineCopyright />
          </span>{" "}
          DMSolutions:{date}
        </p>
      </div>
    </div>
  );
};

export default Footer;
