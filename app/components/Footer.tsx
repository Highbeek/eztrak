"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiMail,
  FiPhone,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiGithub,
} from "react-icons/fi";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="relative text-white py-12 mt-auto">
      <div className="absolute inset-0 bg-[url('/images/heroImg.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[#993100D9]" />

      <div className="relative container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-1/3">
            <Image
              src="/images/logo-white.png"
              alt="EZTRAK Logo"
              width={150}
              height={50}
              className="object-contain mb-4"
            />
            <address className="not-italic mb-4 font-bold">
              <p>Head Office Address: 101 King Street,</p>
              <p>Melbourne West, Australia</p>
            </address>
            <p className="flex items-center gap-2 mb-2 font-bold">
              <FiPhone size={16} />
              <span>+1 (234) 567-8901</span>
            </p>
            <p className="flex items-center gap-2 font-bold">
              <FiMail size={16} />
              <span>info@cornerstore.com</span>
            </p>
          </div>

          <div className="w-full lg:w-2/3 max-w-lg border border-white rounded-3xl p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-4 text-center lg:text-left">
              Want to Subscribe to Our Newsletter?
            </h3>
            <p className="mb-4 font-light text-center lg:text-left">
              Subscribe to our email to get updates right to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-b border-[#D2D9DF] mt-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left">
            Copyright © EZTRAK Software Solution
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <p>Follow:</p>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-orange-300 transition-colors"
            >
              <FiInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-orange-300 transition-colors"
            >
              <FiFacebook size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-orange-300 transition-colors"
            >
              <FiTwitter size={20} />
            </a>
            <a
              href="#"
              aria-label="Github"
              className="hover:text-orange-300 transition-colors"
            >
              <FiGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
