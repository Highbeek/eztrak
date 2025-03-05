"use client";

import React, { useState } from "react";
import Button from "./ui/Button";
import Modal from "./Modal";
import ServiceRequestForm from "./ServiceRequestForm";
import { motion } from "framer-motion";

const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="relative w-full h-auto min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:h-[667px] bg-[url('/images/heroImg.png')] bg-cover bg-center flex items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative flex flex-col items-center justify-center w-full px-4 sm:px-8 text-center text-white space-y-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bricolage font-bold leading-tight max-w-4xl"
          >
            Simplify Your Service Requests. <br className="hidden md:block" />
            It's Fast, Easy, and Efficient!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-2 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl px-4"
          >
            Create, track, and manage your service requests seamlessly. Our
            intuitive platform ensures every <br className="hidden sm:block" />
            task gets done on time, every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md"
          >
            <Button
              onClick={openModal}
              title="Create Service Request"
              className="sm:w-auto px-6 min-w-[200px] whitespace-nowrap"
            />
            <Button
              onClick={() => {}}
              title="Track Existing Request"
              variant="outline"
              className="w-full sm:w-auto bg-[#FFF1EB] text-[#F54E00] px-6 min-w-[200px] whitespace-nowrap"
            />
          </motion.div>
        </motion.div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ServiceRequestForm />
      </Modal>
    </>
  );
};

export default Hero;
