"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Search, UserPlus, Eye, TrendingDown, Bell, Navigation as NavIcon, ArrowRight, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Find a Business",
    description:
      "Open Nowaitt and search for the type of service you need — salon, clinic, hospital, garage, spa, and more. Browse businesses near you or search by name. See ratings, services offered, and operating hours.",
    details: [
      "Search by service type or business name",
      "Browse nearby businesses on a map",
      "View service details and hours",
    ],
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
    iconBg: "bg-blue-600",
  },
  {
    number: "02",
    icon: Eye,
    title: "View the Live Queue",
    description:
      "Before joining, see exactly how long the current queue is. Nowaitt shows you the live queue count and a real-time estimated wait in minutes — so you can decide whether to join now or come back later.",
    details: [
      "See live queue count in real time",
      "Get an estimated wait time in minutes",
      "Decide whether to join or check back later",
    ],
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-50",
    border: "border-violet-100",
    iconBg: "bg-violet-600",
  },
  {
    number: "03",
    icon: UserPlus,
    title: "Join Remotely",
    description:
      "Tap to join the queue from wherever you are. Your position is instantly confirmed and reserved. You don't need to be physically present — join from your home, your office, or anywhere else.",
    details: [
      "One tap to join from any location",
      "Your position is instantly confirmed",
      "No physical presence needed",
    ],
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
    iconBg: "bg-amber-600",
  },
  {
    number: "04",
    icon: TrendingDown,
    title: "Track Your Position",
    description:
      "Watch your position in the queue update in real time. As each customer ahead of you is served, your number drops and your estimated time gets shorter. The app keeps you updated automatically.",
    details: [
      "Live queue position displayed on screen",
      "Estimated time recalculates as queue moves",
      "No need to manually refresh",
    ],
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-50",
    border: "border-green-100",
    iconBg: "bg-green-600",
  },
  {
    number: "05",
    icon: Bell,
    title: "Receive a Notification",
    description:
      "When you're 2–3 people away from being served, Nowaitt sends you a smart push notification. Additionally, an automated reminder call is placed so you never miss your slot — even if your phone is silent.",
    details: [
      "Push notification when you're almost up",
      "Automated reminder call for extra assurance",
      "Enough time to travel to the business",
    ],
    color: "from-rose-500 to-pink-500",
    bg: "bg-rose-50",
    border: "border-rose-100",
    iconBg: "bg-rose-600",
  },
  {
    number: "06",
    icon: NavIcon,
    title: "Arrive When Needed",
    description:
      "Head to the business when you get the notification. Walk in right when it's your turn — no waiting room time, no sitting around, no wasted minutes. You leave only when you need to and arrive right on time.",
    details: [
      "Leave only when the notification arrives",
      "Walk in just as it's your turn",
      "Zero waiting room time",
    ],
    color: "from-cyan-500 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    iconBg: "bg-cyan-600",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-violet-50 via-white to-white overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-100/40 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-600 text-sm font-semibold mb-5">
              How It Works
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Six Simple Steps to{" "}
              <span className="gradient-text">Skip the Wait</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              From finding a business to walking in right on time — here&apos;s exactly how Nowaitt works, step by step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-200 via-violet-200 to-cyan-200 hidden lg:block" />

            <div className="space-y-16">
              {steps.map(({ number, icon: Icon, title, description, details, color, bg, border, iconBg }, idx) => (
                <motion.div
                  key={number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="relative grid lg:grid-cols-[80px_1fr] gap-8 items-start"
                >
                  {/* Step number circle */}
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 tracking-wider">STEP {number}</span>
                  </div>

                  {/* Content */}
                  <div className={`p-8 rounded-3xl ${bg} border ${border}`}>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">{title}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">{description}</p>
                    <ul className="space-y-2">
                      {details.map((detail) => (
                        <li key={detail} className="flex items-center gap-3 text-slate-700 text-sm">
                          <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary Banner */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl p-10 text-center shadow-2xl shadow-blue-500/20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              That&apos;s it. No waiting room. No wasted time.
            </h2>
            <p className="text-white/85 text-lg max-w-xl mx-auto mb-8">
              Nowaitt puts the entire queue experience in your hands — so you only go when you need to.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/download"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-blue-600 font-bold text-base hover:bg-blue-50 transition-colors"
              >
                Download Nowaitt
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-base hover:border-white/60 transition-colors"
              >
                Explore Features
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
