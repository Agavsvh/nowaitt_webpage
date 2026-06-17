"use client";

import { motion } from "framer-motion";
import { X, Globe, AtSign, Share2, Mail, MapPin, Phone } from "lucide-react";

const links: Record<string, string[]> = {
  Product: ["Features", "How It Works", "App Download", "What's New"],
  Company: ["About Us", "Careers", "Blog", "Press Kit"],
  "For Business": ["Partner With Us", "Business Dashboard", "Pricing", "API"],
  Support: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
};

const socials = [
  { icon: X, label: "X / Twitter", href: "#" },
  { icon: AtSign, label: "Instagram", href: "#" },
  { icon: Globe, label: "LinkedIn", href: "#" },
  { icon: Share2, label: "Facebook", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60V20 Q360 60 720 20 Q1080 -20 1440 20 L1440 0 L0 0 Z" fill="#0f0f23" className="fill-slate-950" />
        </svg>
      </div>

      {/* Background texture */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="pt-20 pb-12 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="white" opacity="0.9"/>
                  <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Nowa<span className="gradient-text">itt</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Skip the wait, not the experience. Nowaitt connects you to the
              services you need, when you need them — instantly.
            </p>

            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Tagline
            </p>
            <p className="text-sm font-medium text-slate-300 italic mb-8">
              "Skip the Wait, Not the Experience"
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-8">
              {[
                { icon: Mail, text: "nowaitt7778@gmail.com" },
                { icon: Phone, text: "+91 98765 43210" },
                { icon: MapPin, text: "Pune, India" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-sm text-slate-400">
                  <Icon size={14} className="text-slate-500 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-violet-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* App store badges row */}
        <div className="py-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">Available on</p>
          <div className="flex gap-4">
            {["Google Play", "App Store"].map((store) => (
              <a
                key={store}
                href="#"
                className="px-4 py-2 rounded-xl border border-slate-700 text-sm text-slate-300 hover:border-blue-600 hover:text-blue-400 transition-all duration-200"
              >
                {store}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2025 Nowaitt Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
