"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import FormInput from "./ui/FormInput";

export function PinLogin({
  onSwitchToEmail,
}: {
  onSwitchToEmail?: () => void;
}) {
  const [pinCode, setPinCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Login attempt with pin:", pinCode);
  };

  return (
    <div>
      <div className="space-y-6 pt-8 pb-4 px-6">
        <div className="flex justify-center">
          <Image
            src="/images/logo-white.png"
            alt="EZTRAK Software Solutions"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </div>
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold tracking-tight">Sign Up</h1>
          <p className="text-gray-500">Sign up your pin code</p>
        </div>
      </div>

      <div className="px-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <FormInput
              label="Pin code"
              name="pin"
              type="password"
              placeholder="Enter your Pin code"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              className="flex-1"
            />
          </div>
          <Button
            type="submit"
            className="inline-flex h-12 w-full items-center justify-center rounded-md bg-[#E85C2C] px-4 py-2 text-sm font-medium text-white hover:bg-[#D04C1C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E85C2C] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Login
          </Button>
        </form>
      </div>

      <div className="flex flex-col space-y-4 pb-8 px-6 mt-6">
        <div className="flex items-center w-full gap-2 py-2">
          <div className="h-[1px] w-full bg-gray-200"></div>
          <span className="text-sm text-gray-500 px-2">Or</span>
          <div className="h-[1px] w-full bg-gray-200"></div>
        </div>
        <div className="text-sm text-center">
          Already have an account?{" "}
          <Link
            href="#"
            className="text-[#E85C2C] hover:underline font-medium"
            onClick={(e) => {
              e.preventDefault();
              onSwitchToEmail?.();
            }}
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
