"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  title?: string;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  onClick,
  className = "",
  title,
  ...props
}: ButtonProps) {
  const baseStyles = "font-medium py-3 px-6 rounded-lg transition-colors";

  const variantStyles: Record<"primary" | "secondary" | "outline", string> = {
    primary: "bg-[#F54E00] hover:bg-orange-600 text-white",
    secondary: "bg-white hover:bg-gray-100 text-gray-800",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const content = children || title;

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonStyles} {...props}>
      {content}
    </button>
  );
}
