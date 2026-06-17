"use client";

import { motion } from "framer-motion";
import { Apple, Smartphone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="download"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Full gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-violet-700" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Orbs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-violet-500/30 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white/90 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Join 10,000+ users already saving time
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05]"
        >
          Stop Waiting.
          <br />
          <span className="text-blue-200">Start Living.</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Join thousands of users who save time every day with Nowaitt. Download
          the app now and book your first appointment in under 60 seconds.
        </motion.p>

        {/* Download buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Google Play */}
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-4 px-7 py-4 bg-white rounded-2xl shadow-2xl shadow-black/20 hover:shadow-black/30 transition-shadow w-56 group"
          >
            <div className="w-10 h-10 flex-shrink-0">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 43.5L26.18 22 4.5 4.5V43.5Z" fill="#4CAF50"/>
                <path d="M43.5 24L36.5 19.7L26.18 22L36.5 28.3L43.5 24Z" fill="#FFD740"/>
                <path d="M4.5 43.5L26.18 22L36.5 28.3L9.18 43.5H4.5Z" fill="#F44336"/>
                <path d="M4.5 4.5L26.18 22L36.5 19.7L9.18 4.5H4.5Z" fill="#536DFE"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-500">Get it on</p>
              <p className="text-base font-bold text-slate-900 leading-tight">Google Play</p>
            </div>
          </motion.button>

          {/* App Store */}
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-4 px-7 py-4 bg-white rounded-2xl shadow-2xl shadow-black/20 hover:shadow-black/30 transition-shadow w-56"
          >
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
              <Apple size={32} className="text-slate-900" />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-500">Download on the</p>
              <p className="text-base font-bold text-slate-900 leading-tight">App Store</p>
            </div>
          </motion.button>
        </motion.div>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-blue-200/70 text-sm"
        >
          Available on iOS and Android · Free to download · No credit card required
        </motion.p>

        {/* QR hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 inline-flex items-center gap-3 text-white/60 text-sm"
        >
          <Smartphone size={16} />
          <span>Or scan the QR code on our mobile site</span>
        </motion.div>
      </div>
    </section>
  );
}
