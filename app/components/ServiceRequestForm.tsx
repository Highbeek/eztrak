"use client";

import React, { useState, ChangeEvent, useRef } from "react";
import FormInput from "./ui/FormInput";
import Button from "./ui/Button";
import { MdOutlineCancel } from "react-icons/md";

interface FormData {
  selectedImage?: File | null;
  name: string;
  phone: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  requestType: string;
  description: string;
}

interface ServiceRequestFormProps {
  onClose?: () => void;
}

export default function ServiceRequestForm({
  onClose,
}: ServiceRequestFormProps): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    selectedImage: null,
    name: "",
    phone: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    requestType: "",
    description: "",
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>): void {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        selectedImage: e.target.files![0],
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, selectedImage: null }));
    }
  }

  function handleChooseImage(): void {
    fileInputRef.current?.click();
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="relative max-w-[900px] w-[592px] mx-auto  p-8 ">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          <MdOutlineCancel size={24} />
        </button>
      )}

      <h2 className="text-2xl font-bold mb-6 text-black">
        Create Service Request
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex border border-gray-300  overflow-hidden mb-6 h-[50px] rounded-xl">
          <button
            type="button"
            onClick={handleChooseImage}
            className="bg-orange-100 border-r border-orange-500 text-orange-500 py-1 px-3"
          >
            Choose Image
          </button>
          <span className="py-1 px-3 flex-1 text-gray-700">
            {formData.selectedImage
              ? formData.selectedImage.name
              : "No Image Chosen"}
          </span>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-4">
          <FormInput
            label="Name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleInputChange}
            className="flex-1"
          />
          <FormInput
            label="Phone"
            name="phone"
            type="tel"
            placeholder="888-555-1212"
            value={formData.phone}
            onChange={handleInputChange}
            className="flex-1"
          />
        </div>

        <FormInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="john.doe@gmail.com"
          value={formData.email}
          onChange={handleInputChange}
          className="mb-4"
        />

        <FormInput
          label="Street Address"
          name="street"
          type="text"
          placeholder="123 Main Street"
          value={formData.street}
          onChange={handleInputChange}
          className="mb-4"
        />

        <div className="flex flex-col md:flex-row gap-6 mb-4">
          <FormInput
            label="City"
            name="city"
            type="text"
            placeholder="Irvine"
            value={formData.city}
            onChange={handleInputChange}
            className="flex-1"
          />
          <FormInput
            label="State"
            name="state"
            type="text"
            placeholder="CA"
            value={formData.state}
            onChange={handleInputChange}
            className="flex-1"
          />
        </div>

        <FormInput
          label="Zip Code"
          name="zip"
          type="text"
          placeholder="12345"
          value={formData.zip}
          onChange={handleInputChange}
          className="mb-4"
        />

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Request Type
          </label>
          <select
            name="requestType"
            value={formData.requestType}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Request Type</option>
            <option value="maintenance">Maintenance</option>
            <option value="repair">Repair</option>
            <option value="replace">Replace</option>
            <option value="remove">Remove</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description Goes Here"
            rows={4}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="flex justify-between">
          <Button variant="outline" type="button" onClick={onClose}>
            Back
          </Button>
          <Button variant="primary" type="submit" className="w-[350px]">
            Update Changes
          </Button>
        </div>
      </form>
    </div>
  );
}
