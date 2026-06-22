"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Clock, Zap, Bell } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Find & Check Live Queue",
    description:
      "Search salons, clinics, hospitals, and garages nearby. See the live queue length and real-time wait estimate before you even leave.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    borderColor: "border-blue-200 dark:border-blue-800/40",
    delay: 0,
  },
  {
    step: "02",
    icon: Clock,
    title: "Join Queue Remotely",
    description:
      "Tap to join the queue from wherever you are — home, office, anywhere. No need to rush or stand in line.",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50 dark:bg-violet-950/30",
    borderColor: "border-violet-200 dark:border-violet-800/40",
    delay: 0.1,
  },
  {
    step: "03",
    icon: Zap,
    title: "Track in Real Time",
    description:
      "Watch your queue position update live. Get an accurate estimated arrival time so you always know exactly when to leave.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
    borderColor: "border-amber-200 dark:border-amber-800/40",
    delay: 0.2,
  },
  {
    step: "04",
    icon: Bell,
    title: "Get Notified & Walk In",
    description:
      "Receive a smart push alert and an automatic reminder call before your turn. Arrive right on time — not a minute sooner.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/30",
    borderColor: "border-green-200 dark:border-green-800/40",
    delay: 0.3,
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      className="relative py-24 lg:py-32 bg-slate-50 dark:bg-[#070d1f] overflow-hidden"
    >
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-5">
            Your Time,{" "}
            <span className="gradient-text">Your Freedom</span>
          </h2>
          <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            From finding a queue to walking in at the right moment — Nowaitt handles the wait so you don't have to.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-violet-200 via-amber-200 to-green-200 dark:from-blue-900 dark:via-violet-900 dark:via-amber-900 dark:to-green-900" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map(({ step, icon: Icon, title, description, color, bgColor, borderColor, delay }) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay, ease: "easeOut" }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step icon with number */}
                <div className="relative mb-6">
                  {/* Outer ring */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className={`w-28 h-28 rounded-3xl ${bgColor} border-2 ${borderColor} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md`}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                  </motion.div>

                  {/* Step number badge */}
                  <div
                    className={`absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br ${color} flex items-center justify-center shadow-md`}
                  >
                    <span className="text-white text-xs font-bold">{step.slice(1)}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {title}
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-[220px]">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 text-center shadow-2xl shadow-blue-500/20"
        >
          <p className="text-white/80 text-sm font-medium mb-2 uppercase tracking-wider">
            The result
          </p>
          <h3 className="text-3xl font-bold text-white mb-3">
            Skip the wait. Never miss your turn.
          </h3>
          <p className="text-white/85 text-base max-w-lg mx-auto">
            Join remotely, track your position live, and arrive exactly when it&apos;s almost your turn — no more wasted waiting room time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
