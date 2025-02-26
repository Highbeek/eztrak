"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import FormInput from "./ui/FormInput";
import Button from "./ui/Button";

interface FormData {
  mediaType: string;
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

export default function ServiceRequestForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    mediaType: "none",
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

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    console.log(formData);
  }

  function handleRequestTypeChange(mediaType: string): void {
    setFormData((prevData) => ({ ...prevData, mediaType }));
  }

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Service Request Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="flex flex-col md:flex-row gap-2 mb-4">
                <button
                  type="button"
                  className={`flex-1 py-2 px-4 rounded border ${
                    formData.mediaType === "image"
                      ? "bg-orange-100 border-orange-500 text-orange-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleRequestTypeChange("image")}
                >
                  Choose Image
                </button>
                <button
                  type="button"
                  className={`flex-1 py-2 px-4 rounded border ${
                    formData.mediaType === "none"
                      ? "bg-orange-100 border-orange-500 text-orange-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleRequestTypeChange("none")}
                >
                  No Image/Photo
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-4">
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
                placeholder="555-555-1212"
                value={formData.phone}
                onChange={handleInputChange}
                className="flex-1"
              />
            </div>

            <FormInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="info@example.com"
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

            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <FormInput
                label="City"
                name="city"
                type="text"
                placeholder="Cityville"
                value={formData.city}
                onChange={handleInputChange}
                className="flex-1"
              />
              <FormInput
                label="State"
                name="state"
                type="text"
                placeholder="Select State"
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
                placeholder="Description goes here"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" type="button">
                Back
              </Button>
              <Button variant="primary" type="submit">
                Submit Request
              </Button>
            </div>
          </form>
        </div>

        <div className="w-full lg:w-1/2 bg-gray-200 rounded-lg hidden lg:block"></div>
      </div>
    </section>
  );
}
