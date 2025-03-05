"use client";
import React from "react";
import Image from "next/image";
import Button from "./ui/Button";
import logo from "../../public/images/logo.svg";

const Navbar = () => {
  return (
    <div className="bg-white w-full py-4 flex items-center justify-between px-4 sm:px-6 md:px-8">
      
      <div className="flex-shrink-0">
        <Image src={logo} alt="Logo" width={120} height={40} priority />
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <Button title="Login" onClick={() => {}} />
        <Button
          onClick={() => {}}
          title="Sign Up"
          variant="outline"
          className="bg-[#FFF1EB] text-[#F54E00]"
        />
      </div>
    </div>
  );
};

export default Navbar;
