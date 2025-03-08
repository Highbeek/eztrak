"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import Button from "./ui/Button";
import FormInput from "./ui/FormInput";

export function LoginModal({ onSwitchToPin }: { onSwitchToPin?: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Login attempt with:", { email, password });
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
          <h1 className="text-2xl font-bold tracking-tight">Login</h1>
          <p className="text-gray-500">Login with your email and password</p>
        </div>
      </div>

      <div className="px-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
            />
          </div>
          <div className="space-y-2">
            <div className="relative">
              <FormInput
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                label={"Password"}
                name={"password"}
              />
              <div
                onClick={togglePasswordVisibility}
                className="absolute bottom-10 right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
              </div>
            </div>
            <div className="flex justify-end">
              <Link href="#" className="text-sm text-[#E85C2C] hover:underline">
                Forgot Password?
              </Link>
            </div>
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
          Don&apos;t have an account yet?{" "}
          <Link
            href="#"
            className="text-[#E85C2C] hover:underline font-medium"
            onClick={(e) => {
              e.preventDefault();
              onSwitchToPin?.();
            }}
          >
            Login with Passcode
          </Link>
        </div>
      </div>
    </div>
  );
}
