import Image from "next/image";
import Hero from "./components/Hero";
import SearchSection from "./components/SearchSection";
import ServiceCard from "./components/ServiceCard";
import ServiceCategories from "./components/ServiceCategories";
import ServiceRequestForm from "./components/ServiceRequestForm";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="">
        <Hero />
        <SearchSection />
        <ServiceCategories />
        {/* <ServiceRequestForm /> */}
      </div>
    </main>
  );
}
