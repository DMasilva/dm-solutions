import React from "react";
import Logo from "./Logo";
import { FaHome } from 'react-icons/fa';
import {BsFillPatchQuestionFill} from 'react-icons/bs'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="md:text-center md:mx-2 mx-1 mt-2 md:text-xl bg-gradient-to-t from-blue-400 to-blue-100 p-2 sm:p-4">
      <nav className="sm:flex">
      <div className="mb-4 sm:mb-0">
        <Logo/>
      </div>

      <div className="w-full">
        <ul className="flex flex-col sm:flex-row sm:justify-center">
        <li className="links"><Link href='#'><span className="inline-block mx-1"> <FaHome /></span>Home</Link></li>
         <li className="links"><Link href='#'><span className="inline-block mx-1"><BsFillPatchQuestionFill/></span>About</Link></li>
         <li className="links"><Link href='#'><span className="inline-block mx-1"><MdOutlineMiscellaneousServices/></span>Services</Link></li>
         <li className="links"><Link href='#'><span className="inline-block mx-1"><CgProfile/></span>Masilva</Link></li>
        </ul>
      </div>
      <div className="text-center md:flex sm:flex justify-center">
        <a className="m-1 bg-white hover:bg-blue-500 rounded w-100 h-100 inline-block border-2" href='#'>Login</a>

        <a className="m-1 bg-white hover:bg-blue-500 rounded inline-block border-2 md:mr-4" href='#'>Signup</a>
      </div>
      </nav>
    </div>
  );
};

export default Navbar;
