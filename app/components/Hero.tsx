"use client";

import React from "react";
import Button from "./ui/Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full h-auto md:h-[667px] bg-[url('/images/heroImg.png')] bg-cover bg-center">
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
        className="relative flex flex-col items-center justify-center space-y-8 h-full py-8"
      >
        <div className="text-center text-white px-5">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bricolage font-bold"
          >
            Simplify Your Service Requests. It's <br /> Fast, Easy, and
            Efficient!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-4 text-base sm:text-lg md:text-xl"
          >
            Create, track, and manage your service requests seamlessly. Our
            intuitive platform ensures every <br />
            task gets done on time, every time.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button onClick={() => {}} title="Create Service Request" />
          <Button
            onClick={() => {}}
            title="Track Existing Request"
            variant="outline"
            className="bg-[#FFF1EB] text-[#F54E00]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
