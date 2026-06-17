"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Freelance Designer",
    location: "Mumbai",
    avatar: "PS",
    color: "#3b82f6",
    rating: 5,
    text: "I used to spend 45 minutes waiting at my salon every Saturday. With Nowaitt I book Thursday evening, walk in exactly on time, and I'm out in 30 minutes. It's genuinely changed my weekends.",
    service: "Salon",
  },
  {
    name: "Arjun Mehta",
    role: "Software Engineer",
    location: "Bangalore",
    avatar: "AM",
    color: "#7c3aed",
    rating: 5,
    text: "Booked a specialist appointment for my mother that would normally take 3 days of calling. Did it in 2 minutes on Nowaitt. The real-time queue tracking is incredible — we arrived at the perfect time.",
    service: "Hospital",
  },
  {
    name: "Sneha Reddy",
    role: "Entrepreneur",
    location: "Hyderabad",
    avatar: "SR",
    color: "#ec4899",
    rating: 5,
    text: "My car service used to be a half-day ordeal. Now I book my slot, drop the car at the exact time, and pick it up when it's done. Nowaitt treated my time like it actually matters.",
    service: "Garage",
  },
  {
    name: "Rohan Kapoor",
    role: "Doctor",
    location: "Delhi",
    avatar: "RK",
    color: "#22c55e",
    rating: 5,
    text: "As someone who values time professionally, Nowaitt is refreshing. The app is fast, the booking flow is clean, and reminders are perfectly timed. It's the kind of product you wish existed sooner.",
    service: "Clinic",
  },
  {
    name: "Kavitha Nair",
    role: "Teacher",
    location: "Chennai",
    avatar: "KN",
    color: "#f59e0b",
    rating: 5,
    text: "What I love most is the peace of mind. I know exactly when to leave home, I'm never early or late, and the business is always ready for me. Nowaitt just works, every single time.",
    service: "Spa",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? "#f59e0b" : "none"}
          className={i < rating ? "text-amber-400" : "text-slate-300"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (idx: number) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
  };

  const prev = () => go((active - 1 + testimonials.length) % testimonials.length);
  const next = () => go((active + 1) % testimonials.length);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: (d: number) => ({ x: d > 0 ? -100 : 100, opacity: 0, transition: { duration: 0.3 } }),
  };

  const t = testimonials[active];

  return (
    <section className="relative py-24 lg:py-32 bg-white dark:bg-[#050b1a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 animated-gradient-bg opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-400/10 to-violet-400/10 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-5">
            Real People,{" "}
            <span className="gradient-text">Real Stories</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Don't take our word for it.
          </p>
        </motion.div>

        {/* Main testimonial card */}
        <div className="relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative p-8 sm:p-12 rounded-3xl glass border border-slate-200/60 dark:border-slate-700/60 shadow-2xl"
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote size={64} className="text-blue-600" />
              </div>

              {/* Service badge */}
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-6"
                style={{ background: t.color }}
              >
                {t.service}
              </span>

              {/* Review text */}
              <blockquote className="text-xl sm:text-2xl text-slate-800 dark:text-slate-100 font-medium leading-relaxed mb-8">
                "{t.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">{t.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {t.role} · {t.location}
                  </p>
                  <div className="mt-1">
                    <Stars rating={t.rating} />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full glass border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:border-blue-300 transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => go(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === idx ? "w-8 bg-blue-600" : "w-2 bg-slate-300 dark:bg-slate-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full glass border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:border-blue-300 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Mini avatars of all reviewers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center items-center gap-3 mt-12"
        >
          {testimonials.map(({ name, avatar, color }, idx) => (
            <button
              key={name}
              onClick={() => go(idx)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold transition-all duration-300 ${
                active === idx ? "scale-125 shadow-lg ring-2 ring-white ring-offset-2" : "opacity-60 hover:opacity-100"
              }`}
              style={{ background: color }}
            >
              {avatar}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
