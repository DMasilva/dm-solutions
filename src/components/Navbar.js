import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="flex justify-between items-center w-[92%] mx-auto">
            <div>
                <Logo/>
            </div>
            <div className="md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[10%] md:w-auto w-full flex items-center px-5">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vm] gap-8" >
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Testimonials</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <div>
                <button onClick={()=>alert('test')} className="bg-blue-300 px-5 py-2 rounded-full hover:bg-black">Sign in</button>
            </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
