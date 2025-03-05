import React from "react";
import Link from "next/link";
import Button from "./ui/Button";

export default function NewsletterForm() {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <label className="block text-sm  border-b-1">Email Address</label>
      <input
        type="email"
        className="w-full p-2 text-white mb-2 focus:outline-none border-0 border-b border-gray-300 bg-transparent rounded-none"
      />

      <Button
        onClick={() => {}}
        title="Subscribe Now"
        variant="outline"
        className="bg-[#FFF1EB] text-[#F54E00] w-full my-3"
      />

      <p className="text-sm mt-2">
        By subscribing, you agree to our{" "}
        <Link
          href="#"
          className="underline hover:text-orange-300 transition-colors"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
