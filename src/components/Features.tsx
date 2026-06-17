"use client";

import { motion } from "framer-motion";
import {
  Zap, Clock, Bell, LayoutGrid, ShieldCheck, CreditCard, MapPin, Grid3X3,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Queue Join",
    description: "Join any live service queue in seconds — from home, work, or anywhere. No calls, no forms, no friction.",
    color: "from-blue-500 to-cyan-400",
    shadow: "shadow-blue-500/20",
  },
  {
    icon: Clock,
    title: "Live Queue View",
    description: "See exactly how many people are ahead and get an accurate wait estimate before you even step out.",
    color: "from-violet-500 to-purple-400",
    shadow: "shadow-violet-500/20",
  },
  {
    icon: Bell,
    title: "Smart Alerts & Auto-Call",
    description: "Push notifications as your turn approaches, plus an automatic reminder call so you never miss your slot.",
    color: "from-amber-500 to-orange-400",
    shadow: "shadow-amber-500/20",
  },
  {
    icon: LayoutGrid,
    title: "Real-Time Queue Tracking",
    description: "Watch your queue position update live. Know exactly when to leave — not a minute too early or too late.",
    color: "from-green-500 to-emerald-400",
    shadow: "shadow-green-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Verified Businesses",
    description: "Every partner is vetted and verified. Ratings, reviews, and service credentials — all visible upfront.",
    color: "from-rose-500 to-pink-400",
    shadow: "shadow-rose-500/20",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Pay in-app with UPI, cards, or wallets. 256-bit encryption. PCI DSS compliant.",
    color: "from-indigo-500 to-blue-400",
    shadow: "shadow-indigo-500/20",
  },
  {
    icon: MapPin,
    title: "Location-Based Discovery",
    description: "Hyper-local search. Find the shortest queues and best-rated businesses within your area.",
    color: "from-teal-500 to-cyan-400",
    shadow: "shadow-teal-500/20",
  },
  {
    icon: Grid3X3,
    title: "Multi-Service Categories",
    description: "Salons, clinics, hospitals, garages, spas, and more — one app, every queue, zero waiting.",
    color: "from-fuchsia-500 to-violet-400",
    shadow: "shadow-fuchsia-500/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32 bg-white dark:bg-[#050b1a] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-400/8 to-violet-400/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 text-sm font-semibold mb-4">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-5">
            Everything You Need,{" "}
            <span className="gradient-text">Nothing You Don't</span>
          </h2>
          <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Purpose-built features that make skipping the queue faster, smarter, and more reliable for everyone.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map(({ icon: Icon, title, description, color, shadow }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-xl transition-all duration-300 cursor-default"
            >
              {/* Hover gradient bg */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300`} />

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg ${shadow} group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon size={22} className="text-white" />
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {description}
              </p>

              {/* Hover indicator */}
              <div
                className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r ${color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
