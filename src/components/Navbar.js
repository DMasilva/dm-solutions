import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="">
      <header>
        <nav className="">
          <div className=" bg-black md:grid grid-cols-3 sm:block">
            <div className="border-2">
              <Logo />
            </div>
            <div className="border-2">
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vm] gap-8">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Testimonials</li>
                <li>Contacts</li>
              </ul>
            </div>
            <div className="flex justify-end sm:block border-2">
              <button className="bg-blue-300 px-5 py-2 rounded-full hover:bg-black">
                Sign up
              </button>
              <button className="bg-blue-300 px-5 py-2 rounded-full hover:bg-black">
                Log in
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
