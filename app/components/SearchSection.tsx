"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchSection() {
  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8 gap-4">
          <form className="flex max-w-md w-full gap-2" onSubmit={handleSearch}>
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search"
                className="w-full py-4 pl-10 pr-4 rounded-md bg-gray-100 focus:outline-none"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                <FaSearch />
              </div>
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-md transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
