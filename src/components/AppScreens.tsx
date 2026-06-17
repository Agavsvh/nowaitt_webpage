"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

type Screen = "home" | "search" | "business" | "booking" | "payment" | "tracking" | "profile";

const screens: { id: Screen; label: string; description: string }[] = [
  { id: "home",     label: "Home",             description: "Discover nearby businesses with live queue status. See wait times at a glance and join instantly." },
  { id: "search",   label: "Search Results",   description: "Browse businesses by queue length, wait time, distance, or rating — and join the shortest queue." },
  { id: "business", label: "Business Details", description: "Full service menus, ratings, reviews, and the live queue count — all before you commit to joining." },
  { id: "booking",  label: "Queue Joining",    description: "View live queue depth and estimated wait, then join with a single tap from anywhere you are." },
  { id: "payment",  label: "Payment",          description: "Secure in-app payments with UPI, cards, or Nowaitt Wallet. Receipts saved automatically." },
  { id: "tracking", label: "Queue Tracking",   description: "Watch your position update in real time. Get an auto-call when it's almost your turn — just show up." },
  { id: "profile",  label: "User Profile",     description: "Your queue history, time saved, saved businesses, and loyalty rewards all in one profile." },
];

export default function AppScreens() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % screens.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const go = (idx: number) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
    setAutoPlay(false);
  };

  const prev = () => go((active - 1 + screens.length) % screens.length);
  const next = () => go((active + 1) % screens.length);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0, scale: 0.9 }),
    center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.45 } },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0, scale: 0.9, transition: { duration: 0.3 } }),
  };

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-[#070d1f] dark:to-[#050b1a] overflow-hidden">
      {/* BG elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl" />

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
            App Preview
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-5">
            See the App{" "}
            <span className="gradient-text">in Action</span>
          </h2>
          <p className="text-xl text-slate-700 dark:text-slate-300 max-w-xl mx-auto">
            Every screen crafted for simplicity. Every interaction designed to save you time in the queue.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Tab nav */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-80 flex flex-col gap-2 order-2 lg:order-1"
          >
            {screens.map(({ label, description }, idx) => (
              <button
                key={label}
                onClick={() => go(idx)}
                className={`text-left p-4 rounded-2xl transition-all duration-300 ${
                  active === idx
                    ? "bg-white dark:bg-slate-800 shadow-lg border border-blue-100 dark:border-blue-900/50"
                    : "hover:bg-white/60 dark:hover:bg-slate-800/40"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-colors ${
                      active === idx ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-600"
                    }`}
                  />
                  <div>
                    <p
                      className={`text-sm font-semibold mb-1 transition-colors ${
                        active === idx
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {label}
                    </p>
                    {active === idx && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed"
                      >
                        {description}
                      </motion.p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Center: Phone display */}
          <div className="relative flex-1 flex flex-col items-center order-1 lg:order-2">
            {/* Glow ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full bg-gradient-to-r from-blue-400/20 to-violet-400/20 blur-3xl" />
            </div>

            <div className="relative phone-container">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={active}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 shimmer-effect"
                >
                  <PhoneMockup screen={screens[active].id} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Arrows + dots */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full glass border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {screens.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => go(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      active === idx ? "w-6 bg-blue-600" : "w-1.5 bg-slate-300 dark:bg-slate-600"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full glass border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
