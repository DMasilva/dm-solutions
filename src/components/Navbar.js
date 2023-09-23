import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="md:text-center">
      <nav className="sm:flex">
      <div className="mb-4 sm:mb-0">
        <Logo/>
      </div>

      <div className="w-full">
        <ul className="flex flex-col sm:flex-row sm:justify-center">
         <li className="links"><a href='#'>Home</a></li>
         <li className="links"><a href='#'>About</a></li>
         <li className="links"><a href='#'>Services</a></li>
         <li className="links"><a href='#'>Masilva</a></li>
        </ul>
      </div>
      <div className="text-center">
        <a className="m-1 bg-blue-500 rounded border-2" href='#'>Login</a>
        <a className="m-1 bg-blue-500 rounded border-2 md:mr-4" href='#'>Signup</a>
      </div>

      </nav>

    </div>
  );
};

export default Navbar;
