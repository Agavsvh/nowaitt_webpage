"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import AppScreens from "@/components/AppScreens";
import Industries from "@/components/Industries";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import BusinessOwner from "@/components/BusinessOwner";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <AppScreens />
      <Industries />
      <Stats />
      <Testimonials />
      <BusinessOwner />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
