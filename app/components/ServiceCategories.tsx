"use client";

import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import Modal from "./Modal";
import ServiceRequestForm from "./ServiceRequestForm";
import { services } from "../constants";

export default function ServiceCategories() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Create Service Request");

  const openModal = (title: string) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <section className="bg-white py-12 items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              onClick={() => openModal(service.modalTitle)}
            />
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ServiceRequestForm formTitle={modalTitle} onClose={closeModal} />
      </Modal>
    </section>
  );
}
