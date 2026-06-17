"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Phone, AlertCircle, Calendar } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Endless Queues",
    description:
      "Hours wasted standing in lines, not knowing when you'll actually be served.",
    color: "from-red-500 to-orange-500",
    bg: "bg-red-50 dark:bg-red-950/30",
    border: "border-red-100 dark:border-red-900/40",
    stat: "2.5 hrs",
    statLabel: "Average wait time",
  },
  {
    icon: Phone,
    title: "No Queue Visibility",
    description:
      "You arrive, join a physical queue, and only then realize it's a 45-minute wait — with no way to know in advance.",
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50 dark:bg-orange-950/30",
    border: "border-orange-100 dark:border-orange-900/40",
    stat: "45 min",
    statLabel: "Surprise wait times",
  },
  {
    icon: AlertCircle,
    title: "Uncertain Wait Times",
    description:
      "\"10 more minutes\" that turns into an hour. No visibility, no updates, no respect for your time.",
    color: "from-amber-500 to-yellow-500",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-100 dark:border-amber-900/40",
    stat: "64%",
    statLabel: "People leave without service",
  },
  {
    icon: Calendar,
    title: "No Reminder, Missed Turn",
    description:
      "You step away to grab a coffee and come back to find you've lost your spot — with no notification at all.",
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    border: "border-violet-100 dark:border-violet-900/40",
    stat: "1 in 3",
    statLabel: "People miss their turn",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problems" className="relative py-24 lg:py-32 bg-white dark:bg-[#050b1a]">
      {/* Subtle top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-950/50 text-red-600 dark:text-red-400 text-sm font-semibold mb-4">
            The Problem
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-5 leading-tight">
            We've All Been{" "}
            <span className="gradient-text-warm">There.</span>
          </h2>
          <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Every day, millions of people lose precious hours standing in queues with no idea when they'll be served. It doesn't have to be this way.
          </p>
        </motion.div>

        {/* Pain point cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {problems.map(({ icon: Icon, title, description, color, bg, border, stat, statLabel }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`relative p-6 rounded-2xl border ${bg} ${border} group overflow-hidden`}
            >
              {/* Gradient orb bg */}
              <div
                className={`absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity blur-xl`}
              />

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg`}
              >
                <Icon size={22} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
                {description}
              </p>

              {/* Stat */}
              <div className="border-t border-slate-200/60 dark:border-slate-700/60 pt-4">
                <p className={`text-2xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                  {stat}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {statLabel}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Transition statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600/10 to-violet-600/10 border border-blue-200/60 dark:border-blue-800/40">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg">↓</span>
            </div>
            <p className="text-slate-700 dark:text-slate-200 font-medium">
              There's a smarter way.{" "}
              <span className="gradient-text font-bold">Nowaitt</span> fixes all
              of this.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
