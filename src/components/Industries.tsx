"use client";

import { motion } from "framer-motion";

const industries = [
  { emoji: "✂️", label: "Salons", desc: "Haircuts, styling & coloring", color: "from-blue-500 to-cyan-400", bg: "bg-blue-50 dark:bg-blue-950/40" },
  { emoji: "💄", label: "Beauty Parlours", desc: "Makeup, facials & grooming", color: "from-pink-500 to-rose-400", bg: "bg-pink-50 dark:bg-pink-950/40" },
  { emoji: "🏥", label: "Hospitals", desc: "OPD, specialists & tests", color: "from-red-500 to-rose-400", bg: "bg-red-50 dark:bg-red-950/40" },
  { emoji: "🩺", label: "Clinics", desc: "General & specialist doctors", color: "from-teal-500 to-green-400", bg: "bg-teal-50 dark:bg-teal-950/40" },
  { emoji: "🔧", label: "Garages", desc: "Servicing, repairs & checks", color: "from-orange-500 to-amber-400", bg: "bg-orange-50 dark:bg-orange-950/40" },
  { emoji: "⚙️", label: "Service Centers", desc: "Electronics & appliances", color: "from-slate-500 to-zinc-400", bg: "bg-slate-50 dark:bg-slate-800/40" },
  { emoji: "💆", label: "Spas", desc: "Massage, wellness & therapy", color: "from-violet-500 to-purple-400", bg: "bg-violet-50 dark:bg-violet-950/40" },
  { emoji: "💼", label: "Consultants", desc: "Legal, financial & business", color: "from-indigo-500 to-blue-400", bg: "bg-indigo-50 dark:bg-indigo-950/40" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Industries() {
  return (
    <section
      id="businesses"
      className="relative py-24 lg:py-32 bg-white dark:bg-[#050b1a] overflow-hidden"
    >
      {/* Decorative blob */}
      <div className="absolute -right-40 top-1/4 w-96 h-96 bg-gradient-to-l from-violet-300/15 to-blue-300/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-950/60 text-green-600 dark:text-green-400 text-sm font-semibold mb-4">
            Industries We Serve
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-5">
            One App for Every{" "}
            <span className="gradient-text">Service</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Whether it's a haircut, a health check-up, or a car service — Nowaitt
            connects you to every appointment you need.
          </p>
        </motion.div>

        {/* Industry cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {industries.map(({ emoji, label, desc, color, bg }) => (
            <motion.div
              key={label}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative p-6 rounded-2xl ${bg} border border-white/60 dark:border-slate-700/60 hover:shadow-xl transition-all duration-300 cursor-default text-center`}
            >
              {/* Emoji icon with gradient ring */}
              <div className="relative inline-block mb-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {emoji}
                </div>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                {label}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{desc}</p>

              {/* Corner accent */}
              <div
                className={`absolute top-3 right-3 w-2 h-2 rounded-full bg-gradient-to-br ${color} opacity-60`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Expansion note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-10 text-sm text-slate-500 dark:text-slate-400"
        >
          And many more categories being added every week.{" "}
          <span className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer hover:underline">
            Suggest a category →
          </span>
        </motion.p>
      </div>
    </section>
  );
}
