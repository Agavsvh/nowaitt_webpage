"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, MapPin, Bell, Phone, Clock, Layers, Zap, RefreshCw, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const features = [
  {
    icon: Eye,
    title: "Live Queue Tracking",
    tagline: "See the queue before you leave.",
    description:
      "Open Nowaitt and instantly see the current queue length at any supported business. Know exactly how many people are ahead — and how long the wait will be — before you even leave your home.",
    scenario:
      "Priya checks the queue at her local salon. There are 4 people ahead. She decides to leave in 25 minutes instead of rushing over now.",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    icon: MapPin,
    title: "Remote Queue Joining",
    tagline: "Claim your spot from anywhere.",
    description:
      "Tap once to join the queue from home, work, or wherever you are. Your position is reserved instantly — no physical presence required. The business sees you in their queue just like any walk-in customer.",
    scenario:
      "Rahul joins the queue at his mechanic from his office. He knows he won't need to rush — Nowaitt will tell him when to leave.",
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-50",
    border: "border-violet-100",
    iconBg: "bg-violet-100 text-violet-600",
  },
  {
    icon: Clock,
    title: "Estimated Turn Time",
    tagline: "An accurate countdown to your turn.",
    description:
      "Nowaitt calculates your estimated wait time based on your current position and the average service time per customer. The estimate updates automatically as people in front are served or leave.",
    scenario:
      "Meena sees she's 6th in line and her estimated time is 40 minutes. She uses that time to finish lunch before heading to the clinic.",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    tagline: "Notified at exactly the right moment.",
    description:
      "Nowaitt sends you a push notification when you're 2–3 people away from being served. This gives you enough time to travel to the business and arrive right when it's your turn.",
    scenario:
      "Arun gets a notification: 'You're 2 away at DrSmith Clinic. Head over now!' He arrives within minutes — just in time.",
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-50",
    border: "border-green-100",
    iconBg: "bg-green-100 text-green-600",
  },
  {
    icon: Phone,
    title: "Automated Reminder Calls",
    tagline: "A call so you never miss your turn.",
    description:
      "In addition to push notifications, Nowaitt places an automated voice call to remind you when your turn is approaching. This ensures you never miss your spot — even if your phone is on silent.",
    scenario:
      "Sunita is cooking and her phone is on mute. She gets a call: 'Your turn at Style Hub is in 10 minutes. Please start heading over.' She doesn't miss a beat.",
    color: "from-rose-500 to-pink-500",
    bg: "bg-rose-50",
    border: "border-rose-100",
    iconBg: "bg-rose-100 text-rose-600",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Queue Updates",
    tagline: "Live position updates, always.",
    description:
      "Your queue position isn't a static number — it updates in real time as the business serves customers. The queue screen refreshes automatically so you always have the most current information.",
    scenario:
      "Kiran opens the app and sees he's moved from 8th to 5th in just 12 minutes. The queue is moving faster than expected.",
    color: "from-cyan-500 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    iconBg: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: Layers,
    title: "Multi-Industry Support",
    tagline: "Works wherever there's a queue.",
    description:
      "Nowaitt works across salons, beauty parlours, clinics, hospitals, auto garages, service centers, spas, and consultant offices. One app handles all your queuing needs across all service types.",
    scenario:
      "In a single week, Sanjay uses Nowaitt for his barber appointment, a clinic visit, and his car's oil change — all from the same app.",
    color: "from-indigo-500 to-violet-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    iconBg: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Zap,
    title: "Instant Queue Join",
    tagline: "Zero friction, maximum speed.",
    description:
      "Joining a queue takes a single tap. No forms, no registration per business, no confirmation delays. Once you're in the app, adding yourself to any queue is near-instant.",
    scenario:
      "Divya passes by a spa she likes. She joins the queue in 3 seconds, shops nearby, and comes back right on time.",
    color: "from-yellow-500 to-amber-500",
    bg: "bg-yellow-50",
    border: "border-yellow-100",
    iconBg: "bg-yellow-100 text-yellow-600",
  },
];

export default function FeaturesPage() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-5">
              Product Features
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Every Feature Built to{" "}
              <span className="gradient-text">Save Your Time</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Nowaitt gives you complete control over your queue experience — from joining remotely to walking in right on time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {features.map(({ icon: Icon, title, tagline, description, scenario, color, bg, border, iconBg }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Content side */}
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center mb-5`}>
                    <Icon size={26} />
                  </div>
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">{tagline}</p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">{description}</p>

                  <div className={`p-5 rounded-2xl ${bg} border ${border}`}>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Real scenario</p>
                    <p className="text-sm text-slate-700 leading-relaxed italic">&ldquo;{scenario}&rdquo;</p>
                  </div>
                </div>

                {/* Visual side */}
                <div className={`${idx % 2 === 1 ? "lg:order-1" : ""} flex justify-center`}>
                  <div className={`w-full max-w-sm aspect-square rounded-3xl ${bg} border ${border} flex items-center justify-center shadow-lg`}>
                    <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${color} flex items-center justify-center shadow-xl`}>
                      <Icon size={44} className="text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Ready to skip the wait?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Download Nowaitt and never stand in a queue again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/download"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-base shadow-lg hover:shadow-xl hover:opacity-90 transition-all"
              >
                Download App
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-200 text-slate-700 font-semibold text-base hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                How It Works
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
