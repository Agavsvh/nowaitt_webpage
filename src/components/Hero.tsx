"use client";

import { motion } from "framer-motion";
import { Download, Play, CheckCircle2, Clock, Phone, Bell, ArrowRight } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.11, ease },
  }),
};

const floatCards = [
  { id: "joined", Icon: CheckCircle2, label: "Queue Joined!",          sub: "Style Hub · 3 ahead of you", anim: "badge-float",         delay: 0.85, from: { x: -20 } },
  { id: "next",   Icon: Bell,         label: "You're next! Head over now", sub: "Style Hub, Khamgaon",   anim: "badge-float-delayed", delay: 1.45, from: { x: 20 }  },
];

const floatIcons = [
  { id: "icon-clock",  Icon: Clock,  delay: 1.0  },
  { id: "icon-phone",  Icon: Phone,  delay: 1.2  },
  { id: "icon-bell",   Icon: Bell,   delay: 1.6  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="hero-blob hero-blob--blue" />
        <div className="hero-blob hero-blob--purple" />
        <div className="hero-blob hero-blob--center" />
        <div className="absolute inset-0 hero-grid" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── LEFT: Content ── */}
          <div className="flex flex-col items-start">

            {/* Badge */}
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="hero-badge mb-8"
            >
              <span className="hero-badge__dot" />
              <span className="hero-badge__text">Live queue tracking — join from anywhere</span>
              <ArrowRight size={13} className="hero-badge__arrow" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="hero-h1"
            >
              Life is Too{" "}
              <span className="hero-h1__highlight">Short</span>
              <br />
              to Wait in Line.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="hero-sub-text"
            >
              See the live queue at any salon, clinic, hospital, or garage — join
              remotely, get your exact turn time, and receive a reminder call before
              it&apos;s your turn. You only go when it&apos;s almost time.{" "}
              <span className="hero-sub-text__brand">Nowaitt</span>
            </motion.p>

            {/* CTA */}
            <motion.div
              custom={3} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 12px 40px rgba(79,112,240,0.35)" }}
                whileTap={{ scale: 0.98 }}
                className="cta-primary"
              >
                <Download size={16} strokeWidth={2.5} />
                Download App
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, borderColor: "#CBD5E1" }}
                whileTap={{ scale: 0.98 }}
                className="cta-secondary"
              >
                <span className="cta-secondary__play">
                  <Play size={9} fill="white" className="ml-px" />
                </span>
                Watch Demo
                <ArrowRight size={14} className="cta-secondary__arrow" />
              </motion.button>
            </motion.div>

            {/* Trust row */}
            <motion.div
              custom={4} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              {/* Checkmark items */}
              {["Free to download", "Works for salons, clinics & more", "Real-time queue updates"].map((item) => (
                <div key={item} className="trust-item">
                  <CheckCircle2 size={15} className="trust-item__icon" />
                  <span className="trust-item__label">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Phone + cards ── */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.25, ease }}
            className="flex justify-center lg:justify-end"
          >
            {/* Inner scene: sized to phone so all floats are positioned relative to it */}
            <div className="phone-scene">
              {/* Floating full cards */}
              {floatCards.map(({ id, Icon, label, sub, anim, delay, from }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, ...from }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay, duration: 0.5, ease }}
                  className={`absolute z-20 ${anim} float-card-wrapper--${id}`}
                >
                  <div className="float-card">
                    <span className={`float-card__icon float-card__icon--${id}`}>
                      <Icon size={15} />
                    </span>
                    <div>
                      <p className="float-card__label">{label}</p>
                      <p className={`float-card__sub float-card__sub--${id}`}>{sub}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Floating icon circles (right side) */}
              {floatIcons.map(({ id, Icon, delay }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay, duration: 0.5, ease }}
                  className={`absolute z-20 badge-float float-icon-wrapper--${id}`}
                >
                  <div className={`float-icon-circle float-icon-circle--${id}`}>
                    <Icon size={20} />
                  </div>
                </motion.div>
              ))}

              {/* Phone */}
              <div className="float-animation phone-glow phone-container">
                <PhoneMockup screen="home" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="hero-wave-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C240,90 480,0 720,45 C960,90 1200,10 1440,50 L1440,90 L0,90 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
