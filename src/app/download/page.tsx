"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Smartphone, Eye, UserPlus, Bell, Phone, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const features = [
  { icon: Eye,      title: "Live Queue View",       desc: "See how many are ahead before you leave." },
  { icon: UserPlus, title: "Remote Join",            desc: "Join from home, work, or anywhere." },
  { icon: Clock,    title: "Real-Time Wait Time",    desc: "Your estimated wait updates live." },
  { icon: Bell,     title: "Smart Notifications",   desc: "Get alerted when you're almost up." },
  { icon: Phone,    title: "Reminder Calls",        desc: "Automated call so you never miss your turn." },
];

export default function DownloadPage() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Page Hero */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-100/30 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: CTA Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-5">
                Download Nowaitt
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Your Queue,{" "}
                <span className="gradient-text">In Your Pocket</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Download Nowaitt and start skipping queues today. View live queues, join remotely, track your position, and arrive only when it&apos;s your turn.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {/* Android */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02, boxShadow: "0 12px 40px rgba(37,99,235,0.25)" }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-lg"
                >
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Get it on</p>
                    <p className="text-base font-bold">Google Play</p>
                  </div>
                </motion.a>

                {/* iOS (Coming Soon) */}
                <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-100 border border-slate-200 opacity-60 cursor-not-allowed">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-slate-500" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Coming Soon</p>
                    <p className="text-base font-bold text-slate-500">App Store</p>
                  </div>
                </div>
              </div>

              {/* Reassurances */}
              <div className="flex flex-wrap gap-4">
                {["Free to download", "No subscription required", "Android 6.0+"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-600 text-sm">
                    <CheckCircle2 size={15} className="text-green-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Phone visual */}
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Phone mockup frame */}
                <div className="w-[260px] h-[520px] bg-slate-900 rounded-[44px] shadow-2xl shadow-blue-500/20 flex items-center justify-center border-4 border-slate-800 relative overflow-hidden">
                  {/* Screen content */}
                  <div className="absolute inset-[3px] bg-gradient-to-b from-blue-600 to-violet-600 rounded-[40px] flex flex-col items-center justify-center gap-3 p-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                      <Smartphone size={32} className="text-white" />
                    </div>
                    <p className="text-white font-bold text-lg text-center">Nowaitt</p>
                    <p className="text-white/80 text-xs text-center">Skip the Wait. Not the Experience.</p>
                    <div className="w-full mt-4 space-y-2">
                      {["Queue: 3 ahead", "Est. wait: 18 min", "Notification: On"].map((line) => (
                        <div key={line} className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                          <span className="text-white/90 text-xs font-medium">{line}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-full z-10" />
                </div>

                {/* Floating badges */}
                <div className="absolute -left-16 top-20 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 text-xs">
                  <p className="font-bold text-slate-900">Queue Joined!</p>
                  <p className="text-slate-500 mt-0.5">4 people ahead</p>
                </div>
                <div className="absolute -right-20 bottom-24 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 text-xs">
                  <p className="font-bold text-slate-900">Your turn soon!</p>
                  <p className="text-green-600 font-semibold mt-0.5">Head over now →</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Everything in One App
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              Nowaitt packs everything you need to manage your queue time — completely free.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:border-blue-100 hover:bg-white hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{title}</p>
                  <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="grid sm:grid-cols-2 gap-8"
          >
            <div className="p-6 rounded-2xl bg-white border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-600" fill="currentColor">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"/>
                </svg>
                Android
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {["Android 6.0 or higher", "Requires internet connection", "50 MB free storage", "Phone permissions for notifications"].map((r) => (
                  <li key={r} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
              >
                Download for Android
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 opacity-70">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-slate-400" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                iOS
                <span className="ml-auto text-xs font-normal text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">Coming Soon</span>
              </h3>
              <ul className="space-y-2 text-sm text-slate-500">
                {["iOS 14 or higher", "iPhone and iPad support", "Available on the App Store", "Notifications enabled"].map((r) => (
                  <li key={r} className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-300 flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
              <div className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 text-slate-400 text-sm font-semibold cursor-not-allowed">
                iOS Coming Soon
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Have Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-600 mb-4">Have questions before downloading?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/faq" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-200 text-slate-700 font-semibold text-sm hover:border-blue-300 hover:text-blue-600 transition-all">
                Read the FAQ
                <ArrowRight size={14} />
              </Link>
              <Link href="/how-it-works" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-200 text-slate-700 font-semibold text-sm hover:border-blue-300 hover:text-blue-600 transition-all">
                How It Works
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
