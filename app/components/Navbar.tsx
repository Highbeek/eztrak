"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "./ui/Button";
import logo from "../../public/images/logo.svg";
import Modal from "./Modal";
import { LoginModal } from "./Login";
import { PinLogin } from "./PinLogin";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"login" | "signup" | null>(null);

  const openModal = (type: "login" | "signup") => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalType(null);
    setModalOpen(false);
  };

  return (
    <div className="bg-white w-full py-4 flex items-center justify-between px-4 sm:px-6 md:px-8">
      <div className="flex-shrink-0">
        <Image src={logo} alt="Logo" width={120} height={40} priority />
      </div>

      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <Button title="Login" onClick={() => openModal("login")} />
        <Button
          title="Sign Up"
          onClick={() => openModal("signup")}
          variant="outline"
          className="bg-[#FFF1EB] text-[#F54E00]"
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalType === "login" && <LoginModal />}
        {modalType === "signup" && <PinLogin />}
      </Modal>
    </div>
  );
};

export default Navbar;
