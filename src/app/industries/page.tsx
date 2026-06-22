"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Scissors, Sparkles, Stethoscope, Heart, Car, Wrench,
  Flower2, Briefcase, ArrowRight, CheckCircle2
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const industries = [
  {
    icon: Scissors,
    title: "Salons & Barbershops",
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    border: "border-pink-100",
    iconBg: "bg-pink-100 text-pink-600",
    painPoints: [
      "Customers walk in without knowing how long the wait is",
      "Crowded waiting areas make clients uncomfortable",
      "Walk-ins leave when they see a full house",
    ],
    howNowaitt: [
      "Customers check the live queue before arriving",
      "They join remotely and come only when it's their turn",
      "Your seating stays clear; no lost walk-in revenue",
    ],
    useCase:
      "A customer wants a haircut at lunchtime. Instead of risking a long wait, they check Nowaitt, see 2 people ahead, join the queue, finish an errand nearby, and arrive just in time.",
  },
  {
    icon: Sparkles,
    title: "Beauty Parlours",
    color: "from-purple-500 to-violet-500",
    bg: "bg-violet-50",
    border: "border-violet-100",
    iconBg: "bg-violet-100 text-violet-600",
    painPoints: [
      "Services take long and unpredictably vary",
      "Back-to-back clients without proper gaps create stress",
      "Clients complain about long waits and poor communication",
    ],
    howNowaitt: [
      "Queue estimates account for per-service duration",
      "Clients receive a notification before arriving",
      "Both clients and staff feel less rushed",
    ],
    useCase:
      "A client books a threading + facial visit. She joins the queue remotely, gets a call 15 minutes before her turn, and arrives calm and on time.",
  },
  {
    icon: Stethoscope,
    title: "Clinics & Doctor Offices",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
    iconBg: "bg-blue-100 text-blue-600",
    painPoints: [
      "Waiting rooms fill up with sick patients",
      "Patients with minor issues wait alongside serious cases",
      "No-shows and last-minute arrivals disrupt the doctor's schedule",
    ],
    howNowaitt: [
      "Patients wait at home instead of the clinic",
      "Waiting rooms have fewer people — better for everyone's health",
      "Automated reminders reduce no-shows significantly",
    ],
    useCase:
      "A parent takes a child to a doctor's clinic. They join the queue from home, track the position, and arrive just as the previous patient is finishing — no crowded waiting room.",
  },
  {
    icon: Heart,
    title: "Hospitals & OPDs",
    color: "from-red-500 to-rose-500",
    bg: "bg-red-50",
    border: "border-red-100",
    iconBg: "bg-red-100 text-red-600",
    painPoints: [
      "OPD waiting areas are perpetually overcrowded",
      "Patients and attendants spend hours sitting in corridors",
      "Vulnerable patients (elderly, unwell) struggle in crowded spaces",
    ],
    howNowaitt: [
      "Patients register remotely and rest at home or nearby",
      "Hospital corridors and waiting areas become less congested",
      "Elderly or unwell patients are spared unnecessary waiting",
    ],
    useCase:
      "An elderly patient comes for an OPD visit. His family member uses Nowaitt to join the queue remotely. The patient waits comfortably at home and arrives 10 minutes before his turn.",
  },
  {
    icon: Car,
    title: "Auto Garages",
    color: "from-amber-500 to-yellow-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
    iconBg: "bg-amber-100 text-amber-600",
    painPoints: [
      "Customers leave their cars and sit around with nothing to do",
      "Unclear wait times cause frustration and repeated calls",
      "Mechanics are interrupted to give status updates",
    ],
    howNowaitt: [
      "Customers drop the car, join remotely, and do other things",
      "Automated notifications tell them when to return",
      "Mechanics can focus on work, not status updates",
    ],
    useCase:
      "A car owner drops his vehicle for a service. He joins the Nowaitt queue, heads to a nearby café, and gets a reminder call 20 minutes before the car is ready for pickup.",
  },
  {
    icon: Wrench,
    title: "Service Centers",
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
    iconBg: "bg-orange-100 text-orange-600",
    painPoints: [
      "Electronic or appliance repair centers see long, unpredictable waits",
      "Customers don't know when to come back for their device",
      "Technicians are constantly fielding follow-up calls",
    ],
    howNowaitt: [
      "Customers track service progress through the queue system",
      "They receive a notification when their device is ready",
      "Fewer follow-up calls means technicians can focus on repairs",
    ],
    useCase:
      "A customer leaves his phone for screen repair. He joins the queue and goes about his day. He gets a push notification when the repair is done and returns to collect.",
  },
  {
    icon: Flower2,
    title: "Spas & Wellness Centers",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    iconBg: "bg-emerald-100 text-emerald-600",
    painPoints: [
      "The spa atmosphere is disrupted by crowded reception areas",
      "Guests feel rushed and frustrated before they've even relaxed",
      "Walk-in rejections lead to disappointed customers and lost business",
    ],
    howNowaitt: [
      "Guests join remotely and arrive relaxed and ready",
      "Reception stays calm; the spa maintains its atmosphere",
      "No guest arrives to find the spa completely full",
    ],
    useCase:
      "A guest wants a massage. She checks Nowaitt, sees availability, joins the queue, and arrives at the spa already in a calm mindset — not stressed from waiting.",
  },
  {
    icon: Briefcase,
    title: "Consultants & Offices",
    color: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    iconBg: "bg-indigo-100 text-indigo-600",
    painPoints: [
      "Clients arrive at unpredictable times and crowd the office",
      "No clear way to manage walk-in client flow",
      "Professionals are interrupted when managing an already-busy schedule",
    ],
    howNowaitt: [
      "Walk-in clients can join a queue without disrupting the consultant",
      "The consultant sees exactly who's next and when to expect them",
      "Office space stays professional and uncrowded",
    ],
    useCase:
      "A client walks up to a CA's office. Instead of waiting in a cramped hall, she joins the Nowaitt queue, waits at a nearby coffee shop, and returns exactly when the CA is free.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-amber-50 via-white to-white overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-amber-100/30 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-5">
              Industries We Serve
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Nowaitt Works Across{" "}
              <span className="gradient-text">Every Industry</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Wherever there&apos;s a queue, Nowaitt eliminates the wait. Here&apos;s how we solve the problem for each industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Quick Links */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map(({ icon: Icon, title }) => (
              <a
                key={title}
                href={`#${title.toLowerCase().replace(/[^a-z]/g, "-")}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-600 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all"
              >
                <Icon size={14} />
                {title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {industries.map(({ icon: Icon, title, color, bg, border, iconBg, painPoints, howNowaitt, useCase }, idx) => (
              <motion.div
                key={title}
                id={title.toLowerCase().replace(/[^a-z]/g, "-")}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65 }}
                className={`grid lg:grid-cols-2 gap-10 items-start p-8 rounded-3xl ${bg} border ${border}`}
              >
                {/* Left: Industry info */}
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                      <Icon size={26} className="text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Pain Points</p>
                    <ul className="space-y-2">
                      {painPoints.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-slate-600 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">How Nowaitt Helps</p>
                    <ul className="space-y-2">
                      {howNowaitt.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-slate-700 text-sm">
                          <CheckCircle2 size={15} className="text-green-500 mt-0.5 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Use case */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-white/80">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Real Use Case</p>
                  <p className="text-slate-700 text-sm leading-relaxed italic">&ldquo;{useCase}&rdquo;</p>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href="/download"
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline"
                    >
                      Try Nowaitt free <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Don&apos;t see your industry listed?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Nowaitt can be configured for almost any queue-based service. Reach out and we&apos;ll tell you how.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-base shadow-lg hover:opacity-90 transition-all"
              >
                Contact Us
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/businesses"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-200 text-slate-700 font-semibold text-base hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                For Business Owners
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
