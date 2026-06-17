"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is Nowaitt free to use?",
    a: "Yes! Downloading and using Nowaitt is completely free for users. You only pay for the services you book. There are no subscription fees or hidden charges.",
  },
  {
    q: "What types of businesses are on Nowaitt?",
    a: "Nowaitt covers salons, beauty parlours, clinics, hospitals, garages, service centers, spas, and consultant offices. We're adding new categories every month based on user demand.",
  },
  {
    q: "How does the real-time queue work?",
    a: "When you book a slot, you're assigned a queue position. As the business serves customers, your position updates in real-time. You'll get smart notifications when you're 2-3 customers away so you can time your arrival perfectly.",
  },
  {
    q: "Can I cancel or reschedule a booking?",
    a: "Yes. You can cancel or reschedule up to 30 minutes before your appointment for free. Cancellations within 30 minutes may be subject to the business's cancellation policy.",
  },
  {
    q: "Are the businesses on Nowaitt verified?",
    a: "Every business goes through our verification process before going live. We check business registration, hygiene ratings, and collect genuine reviews from real customers.",
  },
  {
    q: "Is my payment information secure?",
    a: "Absolutely. We use 256-bit SSL encryption and are PCI DSS compliant. We never store your full card details on our servers.",
  },
  {
    q: "How do I register my business on Nowaitt?",
    a: "Click 'Partner With Us' to fill out a quick form. Our team will onboard your business within 48 hours and help you set up your schedule, services, and slot availability.",
  },
  {
    q: "Which cities is Nowaitt available in?",
    a: "We're currently live in 50+ cities across India, including Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune, Kolkata, and more. Check the app for the latest list.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 lg:py-32 bg-white dark:bg-[#050b1a]">
      {/* Subtle decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-5">
            Got Questions?{" "}
            <span className="gradient-text">We've Got Answers.</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Everything you need to know about Nowaitt.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map(({ q, a }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === idx
                  ? "border-blue-200 dark:border-blue-800/60 shadow-lg shadow-blue-500/5"
                  : "border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700"
              }`}
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
              >
                <span
                  className={`text-base font-semibold transition-colors ${
                    open === idx
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  {q}
                </span>
                <div
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    open === idx
                      ? "bg-blue-600 text-white rotate-0"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                  }`}
                >
                  {open === idx ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>

              <AnimatePresence>
                {open === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 bg-blue-50/50 dark:bg-blue-950/20">
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed pt-3 text-sm">
                        {a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-950/30 dark:to-violet-950/30 border border-blue-100 dark:border-blue-900/40"
        >
          <p className="text-slate-700 dark:text-slate-200 font-semibold mb-2">
            Still have questions?
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Our support team typically responds in under 2 hours.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-shadow">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
}
