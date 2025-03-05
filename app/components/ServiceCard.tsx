
import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  onClick?: () => void;
}

export default function ServiceCard({
  title,
  description,
  icon,
  onClick,
}: ServiceCardProps) {
  return (
    <div
      className="bg-[#F5F3F7] p-6 rounded-3xl h-[278] cursor-pointer"
      onClick={onClick}
    >
      <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white mb-4">
        <Image
          src={icon}
          alt={title}
          width={72}
          height={72}
          className="rounded-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
