"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare, Building2, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type FormState = "idle" | "sending" | "sent";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1400);
  };

  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-5">
              Contact Us
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              We&apos;d Love to{" "}
              <span className="gradient-text">Hear From You</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Have a question, want to partner with Nowaitt, or need support? Reach out — we&apos;re a friendly team and respond quickly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Contact Information</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Reach us directly or use the form and we&apos;ll get back to you within one business day.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail,   label: "Email",    value: "nowaitt7778@gmail.com",  href: "mailto:nowaitt7778@gmail.com" },
                  { icon: MapPin, label: "Location", value: "Pune, Maharashtra, India", href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-slate-900 font-medium text-sm hover:text-blue-600 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-slate-900 font-medium text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Inquiry types */}
              <div className="pt-4">
                <p className="text-sm font-semibold text-slate-700 mb-3">What can we help with?</p>
                <div className="space-y-2">
                  {[
                    { icon: MessageSquare, label: "General Support — app questions, how queues work" },
                    { icon: Building2,     label: "Business Partnership — join as a service partner" },
                    { icon: Mail,          label: "Media & Press — coverage and partnerships" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-start gap-2 text-slate-600 text-sm">
                      <Icon size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-3"
            >
              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 mb-6">
                    Thanks for reaching out. We&apos;ll get back to you within one business day.
                  </p>
                  <button
                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="px-6 py-3 rounded-full border border-slate-200 text-slate-700 text-sm font-semibold hover:border-blue-300 hover:text-blue-600 transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Subject</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all bg-white"
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="support">App Support</option>
                      <option value="business">Business Partnership</option>
                      <option value="press">Media & Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us how we can help..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-base shadow-lg hover:opacity-90 disabled:opacity-70 transition-all"
                  >
                    {status === "sending" ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-slate-400 text-center">
                    We typically respond within 1 business day. For urgent matters, email us directly.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Partnership Callout */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center flex-shrink-0">
              <Building2 size={26} className="text-white" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Interested in partnering your business?</h3>
              <p className="text-slate-600 text-sm">
                Learn how Nowaitt helps service businesses manage queues and improve customer satisfaction.
              </p>
            </div>
            <Link
              href="/businesses"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
