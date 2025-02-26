"use client";
import React from "react";
import logo from "../../public/images/logo.svg";
import Image from "next/image";
import Button from "./ui/Button";

const Navbar = () => {
  return (
    <div className="bg-white w-full h-[158px] flex items-center justify-between px-6">
      <div>
        <Image src={logo} alt="Logo" />
      </div>
      <div className="flex space-x-4">
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
