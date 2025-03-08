"use client";

import React, { cloneElement, isValidElement } from "react";
import { motion } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const childWithOnClose = isValidElement(children)
    ? cloneElement(children, { onClose } as any)
    : children;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-3xl shadow-lg relative max-h-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {childWithOnClose}
      </motion.div>
    </div>
  );
};

export default Modal;
