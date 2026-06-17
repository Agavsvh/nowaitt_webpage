"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, BarChart3, Sparkles, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Reduce Crowding",
    description: "Spread customer flow evenly throughout the day. No more peak-hour chaos, no dead hours.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Sparkles,
    title: "Better Customer Experience",
    description: "Customers arrive on time, prepared, and stress-free. That reflects in your reviews.",
    color: "from-violet-500 to-purple-400",
  },
  {
    icon: TrendingUp,
    title: "Increased Bookings",
    description: "Our partners see an average 40% increase in appointments within the first month.",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track peak hours, customer retention, popular services, and revenue — all in one place.",
    color: "from-amber-500 to-orange-400",
  },
];

export default function BusinessOwner() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-[#070d1f]"
    >
      {/* BG elements */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute -left-40 top-1/4 w-80 h-80 rounded-full bg-blue-400/15 blur-3xl" />
      <div className="absolute -right-40 bottom-1/4 w-80 h-80 rounded-full bg-violet-400/15 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
              For Business Owners
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-5 leading-tight">
              Grow Your Business With{" "}
              <span className="gradient-text">Smarter Scheduling</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Join 500+ businesses that use Nowaitt to eliminate no-shows, reduce
              idle time, and deliver a premium experience that keeps customers
              coming back.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-2xl shadow-xl shadow-blue-500/25 text-base"
              >
                Partner With Us
                <ArrowRight size={18} />
              </motion.button>
              <button className="px-7 py-4 text-slate-700 dark:text-slate-200 font-semibold rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors text-base">
                See Pricing
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex items-center gap-6 mt-10 pt-10 border-t border-slate-200 dark:border-slate-700">
              {[
                { val: "Free", label: "to onboard" },
                { val: "48h", label: "to go live" },
                { val: "0%", label: "commission on bookings" },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <p className="text-xl font-bold gradient-text">{val}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: benefit cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {benefits.map(({ icon: Icon, title, description, color }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-md`}
                >
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
