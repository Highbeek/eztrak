import React from "react";
import ServiceCard from "./ServiceCard";

export default function ServiceCategories() {
  const services = [
    {
      id: "maintenance",
      title: "Maintenance",
      description:
        "Schedule routine checks and inspections to help keep your systems running smoothly.",
      icon: "/images/maintenance.png",
    },
    {
      id: "repair",
      title: "Repair",
      description:
        "Report issues and request fixes for damaged machinery or infrastructure effectively.",
      icon: "/images/repair.png",
    },
    {
      id: "replace",
      title: "Replace",
      description:
        "Request replacements for outdated or damaged components and ensure optimal performance.",
      icon: "/images/replace.png",
    },
    {
      id: "remove",
      title: "Remove",
      description:
        "Submit requests for the safe disposal or removal of obsolete equipment or materials.",
      icon: "/images/remove.png",
    },
  ];

  return (
    <section className="bg-white py-12   items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
