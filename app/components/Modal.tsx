"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdOutlineCancel } from "react-icons/md";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 rounded-3xl">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded shadow-lg relative max-h-full overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <MdOutlineCancel size={24} />
        </button>
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
