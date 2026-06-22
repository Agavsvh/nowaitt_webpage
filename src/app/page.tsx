"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import HomeBenefits from "@/components/HomeBenefits";
import HomeIndustries from "@/components/HomeIndustries";
import AppScreens from "@/components/AppScreens";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <HowItWorks />
      <HomeBenefits />
      <HomeIndustries />
      <AppScreens />
      <FinalCTA />
      <Footer />
    </main>
  );
}
