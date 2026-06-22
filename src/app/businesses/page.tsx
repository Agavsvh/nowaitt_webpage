"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users, TrendingUp, Clock, BarChart3, Eye, Smartphone,
  CheckCircle2, ArrowRight, Scissors, Stethoscope, Car, Heart, Sparkles, Briefcase
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const benefits = [
  {
    icon: Users,
    title: "Reduce Waiting Room Congestion",
    description:
      "Customers join remotely and only arrive when it's almost their turn. Your waiting area stays clear, comfortable, and manageable — even during peak hours.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Improve Customer Satisfaction",
    description:
      "Customers who don't have to sit and wait are happier customers. Nowaitt eliminates the frustration of physical waiting, leading to better reviews and more repeat visits.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Clock,
    title: "Better Queue Management",
    description:
      "Manage your queue from a simple dashboard. See who's next, how many are in line, and stay in control of your service flow without any manual tracking.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: BarChart3,
    title: "Increase Operational Efficiency",
    description:
      "With customers arriving just-in-time, there are fewer no-shows and fewer early-arrivals crowding your space. Your staff can focus on service instead of managing waiting customers.",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: Eye,
    title: "Real-Time Queue Visibility",
    description:
      "Your dashboard shows the live queue at all times — who's joined, their estimated arrival, and how the queue is moving. Full transparency, zero guesswork.",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: Smartphone,
    title: "Zero Infrastructure Required",
    description:
      "No hardware to install, no software to configure. Nowaitt works through an app — your customers use their phones, and you use a simple web or mobile dashboard.",
    color: "bg-rose-100 text-rose-600",
  },
];

const industries = [
  { icon: Scissors,    label: "Salons & Barbershops" },
  { icon: Sparkles,    label: "Beauty Parlours & Spas" },
  { icon: Stethoscope, label: "Clinics & Doctors" },
  { icon: Heart,       label: "Hospitals & Healthcare" },
  { icon: Car,         label: "Auto Garages & Service Centers" },
  { icon: Briefcase,   label: "Consultants & Offices" },
];

const steps = [
  { number: "1", title: "Register Your Business", desc: "Fill out a quick form with your business details. Our team reviews and onboards you within 48 hours." },
  { number: "2", title: "Set Up Your Queue", desc: "Configure your service hours, average service time per customer, and any categories you offer." },
  { number: "3", title: "Go Live", desc: "Your business appears in the Nowaitt app. Customers can immediately find you and join your queue remotely." },
  { number: "4", title: "Manage From Dashboard", desc: "Use the business dashboard to view your live queue, mark customers as served, and track your daily flow." },
];

export default function BusinessesPage() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-green-50 via-white to-white overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-5">
              For Business Owners
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Give Your Customers a{" "}
              <span className="gradient-text">Better Wait</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Nowaitt helps service businesses manage queues more efficiently — keeping your space clear, your customers happy, and your operations smooth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-base shadow-lg hover:opacity-90 transition-all"
              >
                Partner With Us
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-200 text-slate-700 font-semibold text-base hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                See How It Works
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Benefits */}
      <section id="benefits" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
              Business Benefits
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
              Why Businesses Choose{" "}
              <span className="gradient-text">Nowaitt</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A better queue experience isn&apos;t just good for customers — it&apos;s good for your business too.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, description, color }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.07 }}
                className="p-7 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Which Businesses Benefit Most
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              Nowaitt is built for any service business where customers wait in line.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {industries.map(({ icon: Icon, label }, idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-blue-100 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} />
                </div>
                <span className="text-sm font-semibold text-slate-700">{label}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/industries" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline">
              See all industries <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Getting Started is Simple
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              Your business can be live on Nowaitt in as little as 48 hours.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ number, title, desc }, idx) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {number}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl p-10 shadow-2xl shadow-blue-500/20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Partner With Nowaitt?
            </h2>
            <p className="text-white/85 text-lg mb-8 max-w-lg mx-auto">
              Join our network of businesses giving customers a better queue experience. Contact us today to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-blue-600 font-bold text-base hover:bg-blue-50 transition-colors"
              >
                Contact Us to Partner
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-6 flex items-center justify-center gap-6 flex-wrap">
              {["Free to join", "Live in 48 hours", "No hardware needed"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle2 size={15} className="text-white" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
