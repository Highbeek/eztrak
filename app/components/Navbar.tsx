import React from "react";
import logo from "../../public/images/logo.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-white w-full h-[158px] flex items-center justify-start">
      <div className="pl-4">
        <Image src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Navbar;
