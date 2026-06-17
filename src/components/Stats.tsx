"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 10000,
    suffix: "+",
    label: "Queues Joined",
    description: "and growing every day",
    color: "from-blue-600 to-cyan-500",
    bg: "from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/40",
  },
  {
    value: 500,
    suffix: "+",
    label: "Partner Businesses",
    description: "across 8 service categories",
    color: "from-violet-600 to-purple-500",
    bg: "from-violet-50 to-purple-50 dark:from-violet-950/40 dark:to-purple-950/40",
  },
  {
    value: 50,
    suffix: "+",
    label: "Cities",
    description: "expanding nationwide",
    color: "from-amber-600 to-orange-500",
    bg: "from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40",
  },
  {
    value: 98,
    suffix: "%",
    label: "Customer Satisfaction",
    description: "from verified reviews",
    color: "from-green-600 to-emerald-500",
    bg: "from-green-50 to-emerald-50 dark:from-green-950/40 dark:to-emerald-950/40",
  },
];

function Counter({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 2000;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [active, value]);

  return (
    <span>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 bg-slate-50 dark:bg-[#070d1f] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-blue-400/10 via-violet-400/10 to-green-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
            By the Numbers
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-5">
            Trusted by Thousands,{" "}
            <span className="gradient-text">Zero Time Wasted</span>
          </h2>
        </motion.div>

        {/* Stat cards */}
        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map(({ value, suffix, label, description, color, bg }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`relative p-8 rounded-3xl bg-gradient-to-br ${bg} border border-white/80 dark:border-slate-700/60 hover:shadow-2xl transition-all duration-300 text-center overflow-hidden`}
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-gradient-to-r ${color}`} />

              <div
                className={`text-5xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2 tabular-nums`}
              >
                <Counter value={value} suffix={suffix} active={inView} />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                {label}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{description}</p>

              {/* Decorative corner */}
              <div
                className={`absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br ${color} opacity-[0.08]`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
