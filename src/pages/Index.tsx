
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FreelancersSection from "@/components/sections/FreelancersSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import CallToActionSection from "@/components/sections/CallToActionSection";
import { categories, freelancers } from "@/data/freelancersData";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen font-rubik bg-[#F1F0FB] transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      <Header />
      <HeroSection />
      <CategoriesSection categories={categories} />
      <FreelancersSection freelancers={freelancers} />
      <HowItWorksSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;
