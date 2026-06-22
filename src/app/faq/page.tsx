"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const faqs = [
  {
    category: "Joining a Queue",
    questions: [
      {
        q: "How do I join a queue on Nowaitt?",
        a: "Open the Nowaitt app, search for the business you want to visit, view their live queue, and tap the 'Join Queue' button. Your position is instantly confirmed. You don't need to be at the business to join.",
      },
      {
        q: "Can I join a queue remotely — from home or the office?",
        a: "Yes, that's the whole point of Nowaitt. You join the queue from wherever you are. The app tracks your position live and tells you when to head over. You only need to arrive when it's almost your turn.",
      },
      {
        q: "Can I cancel my queue spot if I change my mind?",
        a: "Yes. You can leave the queue at any time from within the app. Just open the active queue and tap 'Leave Queue.' Your spot will be freed for the next customer.",
      },
      {
        q: "What happens if I can't make it in time when I get notified?",
        a: "If you miss your turn, the business will mark you as absent. Depending on the business's policy, you may need to rejoin the queue. We recommend leaving promptly once you receive your notification.",
      },
    ],
  },
  {
    category: "Queue Tracking & Updates",
    questions: [
      {
        q: "How does the live queue tracking work?",
        a: "Nowaitt connects to the business's dashboard in real time. As the business serves each customer, your queue position updates automatically. You don't need to manually refresh the app.",
      },
      {
        q: "How accurate is the estimated wait time?",
        a: "The estimated wait time is calculated based on your current position and the business's average service time per customer. It updates continuously as the queue moves. The estimate is a useful guide — actual times may vary slightly based on individual service needs.",
      },
      {
        q: "What if the queue moves faster or slower than expected?",
        a: "The estimated time recalculates constantly. If the queue speeds up, your notification will arrive sooner. If it slows down, you'll have more time. The app always shows the most current estimate.",
      },
    ],
  },
  {
    category: "Notifications & Reminder Calls",
    questions: [
      {
        q: "When will I receive a notification?",
        a: "Nowaitt sends you a push notification when you're approximately 2–3 customers away from being served. This gives you enough time to travel to the business and arrive just in time.",
      },
      {
        q: "What is the automated reminder call?",
        a: "In addition to push notifications, Nowaitt places an automated voice call to your phone when your turn is approaching. This ensures you don't miss your spot even if your phone is on silent or you're not actively checking the app.",
      },
      {
        q: "Can I turn off the reminder call?",
        a: "Yes. You can manage your notification preferences in the Nowaitt app settings. You can enable or disable push notifications and reminder calls independently.",
      },
    ],
  },
  {
    category: "Supported Businesses",
    questions: [
      {
        q: "What types of businesses can I find on Nowaitt?",
        a: "Nowaitt supports salons, barbershops, beauty parlours, clinics, hospitals, auto garages, service centers, spas, and consultant offices. We're continuously adding new business categories based on user demand.",
      },
      {
        q: "How do I know if my favourite local business is on Nowaitt?",
        a: "Search for the business by name in the Nowaitt app. If they're registered, they'll appear in the results. If not, you can suggest them through the app — we'll reach out to them about joining.",
      },
      {
        q: "Are the businesses on Nowaitt verified?",
        a: "Yes. Every business goes through a review process before appearing on Nowaitt. We verify basic business details and ensure they're actively managing their queue through the platform.",
      },
    ],
  },
  {
    category: "Using Nowaitt",
    questions: [
      {
        q: "Is Nowaitt free to use?",
        a: "Yes, Nowaitt is completely free to download and use. There are no subscription fees or charges for joining queues.",
      },
      {
        q: "What devices does Nowaitt work on?",
        a: "Nowaitt is currently available on Android. An iOS version is in development and coming soon. Check the Download page for the latest availability.",
      },
      {
        q: "Do I need an account to use Nowaitt?",
        a: "Yes, you'll need to create a free Nowaitt account. This allows the app to track your queue position, send you notifications, and manage your active queues.",
      },
      {
        q: "Does Nowaitt work offline?",
        a: "Nowaitt requires an internet connection to show live queue data and send notifications. A basic data connection (3G or above) is sufficient for the app to work reliably.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (key: string) => setOpenItem(openItem === key ? null : key);

  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-violet-50 via-white to-white overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-violet-100/30 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-600 text-sm font-semibold mb-5">
              FAQ
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about using Nowaitt — from joining queues to receiving notifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqs.map(({ category, questions }) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                  {category}
                </h2>
                <div className="space-y-2">
                  {questions.map(({ q, a }, idx) => {
                    const key = `${category}-${idx}`;
                    const isOpen = openItem === key;
                    return (
                      <div
                        key={key}
                        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                          isOpen
                            ? "border-blue-200 shadow-lg shadow-blue-500/5"
                            : "border-slate-100 hover:border-slate-200"
                        }`}
                      >
                        <button
                          onClick={() => toggleItem(key)}
                          className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                        >
                          <span className={`text-base font-semibold transition-colors ${isOpen ? "text-blue-600" : "text-slate-900"}`}>
                            {q}
                          </span>
                          <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                            isOpen ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"
                          }`}>
                            {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                          </div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-5 bg-blue-50/40">
                                <p className="text-slate-600 leading-relaxed pt-3 text-sm">{a}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-16 text-center p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-100"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-2">Still have questions?</h3>
            <p className="text-slate-600 text-sm mb-6">
              Our team is happy to help. Reach out and we&apos;ll respond within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm shadow-lg hover:opacity-90 transition-all"
              >
                Contact Us
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/download"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-200 text-slate-700 font-semibold text-sm hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                Download the App
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
