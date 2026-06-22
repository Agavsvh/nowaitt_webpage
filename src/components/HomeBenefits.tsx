"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Bell, Phone, Eye, Navigation } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "See Live Queues",
    description: "View exactly how many people are ahead of you before you leave home. No guesswork, no surprises.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: MapPin,
    title: "Join From Anywhere",
    description: "Join a queue from your home, office, or wherever you are. Your spot is saved — come when it's time.",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: Clock,
    title: "Know Your Turn Time",
    description: "Get an accurate estimated wait time that updates in real time as the queue moves.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Receive a push notification when you're just a few people away from being served.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Phone,
    title: "Reminder Calls",
    description: "Get an automated call before your turn so you never miss your spot — even if you forget to check.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: Navigation,
    title: "Arrive Right On Time",
    description: "Walk in exactly when you're needed. No waiting room, no wasted time, no early rushing.",
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function HomeBenefits() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
            Why Nowaitt
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
            Everything You Need to{" "}
            <span className="gradient-text">Skip the Wait</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Nowaitt gives you complete visibility and control over your queue — from anywhere, in real time.
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
              className="group p-6 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
