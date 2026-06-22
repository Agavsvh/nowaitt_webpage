"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Lightbulb, Target, Shield, Users, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Heart,
    title: "People First",
    description: "Every feature we build starts with a simple question: does this make life easier for the person waiting? If the answer is no, we don't build it.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: Shield,
    title: "Honest & Transparent",
    description: "We show real queue data. We don't pad estimates or show fake numbers. If there are 12 people ahead, you'll know there are 12 people ahead.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Lightbulb,
    title: "Relentlessly Simple",
    description: "Nowaitt should feel effortless. Joining a queue should take one tap. Understanding your wait should take one glance. We obsess over simplicity.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Users,
    title: "Built for India",
    description: "India's service culture is rich and unique. We're not adapting a Western product — we're building something designed specifically for Indian queues, habits, and infrastructure.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Target,
    title: "Respect for Time",
    description: "We believe everyone's time matters — whether you're a patient at a clinic or a customer at a salon. Nowaitt is built on the core belief that waiting shouldn't be the default.",
    color: "bg-violet-100 text-violet-600",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold mb-5">
              About Us
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              We Built Nowaitt Because{" "}
              <span className="gradient-text">Waiting is Broken</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Nowaitt started with one simple frustration — and became a mission to fix how India waits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-6">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              It Started With a Two-Hour Salon Visit
            </h2>
            <div className="prose prose-lg max-w-none text-slate-600 space-y-5">
              <p>
                The idea behind Nowaitt came from a frustratingly common experience. You go to a salon for what should be a 30-minute haircut. You end up sitting in a plastic chair for two hours — not because the salon is slow, but because there was no way to know the queue was full before you arrived.
              </p>
              <p>
                We looked around and realized this wasn&apos;t just a salon problem. It was a clinic problem. A garage problem. A hospital problem. Across India, millions of people lose hours every week to unnecessary waiting — not because services are inefficient, but because there&apos;s no system to distribute that waiting time intelligently.
              </p>
              <p>
                We set out to solve it. Not with a complex enterprise software system, but with something simple: a mobile app that lets anyone see a live queue and join it from wherever they are. The idea was elegant — your physical presence isn&apos;t required until it&apos;s nearly your turn.
              </p>
              <p>
                That&apos;s Nowaitt. Built in Pune, designed for India, and expanding to every corner of the country where people wait in line.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why We Built It */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-6">
                Why We Built Nowaitt
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">
                India Has a Queue Problem. We&apos;re Solving It.
              </h2>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  India is a country of queues. Whether you&apos;re at a government office, a busy clinic, or a popular barber — waiting in line is a daily reality for hundreds of millions of people.
                </p>
                <p>
                  What&apos;s missing isn&apos;t more staff or faster service. What&apos;s missing is visibility. People wait because they don&apos;t know when to come. Businesses struggle because customers crowd their space unnecessarily.
                </p>
                <p>
                  Nowaitt introduces a layer of intelligence and communication between the customer and the business — so both sides benefit. Customers get their time back. Businesses get happier clients and clearer spaces.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Hours wasted", sub: "in queues every day across India" },
                { label: "Service types", sub: "that currently have no queue visibility" },
                { label: "Customer loss", sub: "when businesses can't manage walk-in flow" },
                { label: "Nowaitt's answer", sub: "Join remotely. Arrive right on time." },
              ].map(({ label, sub }) => (
                <div key={label} className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <p className="text-base font-bold text-slate-900 mb-1">{label}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 text-white"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-white/85 leading-relaxed">
                To eliminate unnecessary physical waiting from every service interaction in India — by connecting customers to live queue data and letting them join from anywhere.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-3xl bg-slate-900 text-white"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <Lightbulb size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                A future where no one in India has to sit in a waiting room unnecessarily. Where every queue is visible, every wait is predictable, and every customer arrives exactly when they&apos;re needed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
              Company Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              These aren&apos;t corporate buzzwords — they&apos;re the principles behind every decision we make.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, description, color }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Join the Nowaitt Mission
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Download the app and experience a world where your time is respected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/download"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-base shadow-lg hover:opacity-90 transition-all"
              >
                Download Nowaitt
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-200 text-slate-700 font-semibold text-base hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
