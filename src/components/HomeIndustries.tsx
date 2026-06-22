"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Scissors, Stethoscope, Car, Heart, Sparkles, Briefcase, ArrowRight } from "lucide-react";

const industries = [
  { icon: Scissors,    label: "Salons",          color: "bg-pink-100 text-pink-600" },
  { icon: Sparkles,    label: "Beauty Parlours",  color: "bg-purple-100 text-purple-600" },
  { icon: Stethoscope, label: "Clinics",          color: "bg-blue-100 text-blue-600" },
  { icon: Heart,       label: "Hospitals",        color: "bg-red-100 text-red-600" },
  { icon: Car,         label: "Garages",          color: "bg-amber-100 text-amber-600" },
  { icon: Briefcase,   label: "Consultants",      color: "bg-green-100 text-green-600" },
];

export default function HomeIndustries() {
  return (
    <section className="relative py-24 lg:py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-600 text-sm font-semibold mb-4">
            Industries Served
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
            Nowaitt Works For{" "}
            <span className="gradient-text">Every Service</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From your neighbourhood salon to a busy hospital — wherever there&apos;s a queue, Nowaitt helps you skip the wait.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {industries.map(({ icon: Icon, label, color }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-slate-100 hover:border-blue-100 hover:shadow-md transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={22} />
              </div>
              <span className="text-sm font-semibold text-slate-700 text-center">{label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 text-sm font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
          >
            View all industries
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
