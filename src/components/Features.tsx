"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  MapPin,
  BarChart3,
  CloudRain,
  Coffee,
  Smartphone,
} from "lucide-react";
import { cn, GLOBAL_TRANSITION } from "@/lib/utils";

const features = [
  {
    title: "Immutable Origin",
    description:
      "Every coffee bag is assigned a unique digital fingerprint, tracking its journey from the specific Ethiopian plot to your cup.",
    icon: MapPin,
    color: "#C47B4B",
  },
  {
    title: "AI Quality Grading",
    description:
      "Advanced computer vision models analyze bean quality in real-time at the washing stations.",
    icon: Coffee,
    color: "#D4AF37",
  },
  {
    title: "Direct Trade Ledger",
    description:
      "Blockchain-inspired ledger ensuring farmers receive the premiums they deserve directly and transparently.",
    icon: Shield,
    color: "#C47B4B",
  },
  {
    title: "Micro-Climate Data",
    description:
      "Integrating weather and soil data to predict and preserve the unique flavor profiles of Yirgacheffe and Sidamo.",
    icon: CloudRain,
    color: "#D4AF37",
  },
  {
    title: "Supply Chain Insights",
    description:
      "Deep analytics for exporters and roasters to optimize their logistics and carbon footprint.",
    icon: BarChart3,
    color: "#C47B4B",
  },
  {
    title: "One-Scan Trace",
    description:
      "Consumers simply scan a QR code to see the farmer's story, processing method, and roast date.",
    icon: Smartphone,
    color: "#D4AF37",
  },
];

export const Features = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden">
      {/* ☕ Coffee Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full"
            style={{
              backgroundColor:
                i % 2 === 0 ? "#C47B4B" : "rgba(255,255,255,0.6)",
              left: `${Math.random() * 100}%`,
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: "110vh",
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={GLOBAL_TRANSITION}
            className={cn(
              "text-4xl md:text-5xl font-serif mb-6",
              isDarkMode ? "text-white" : "text-[#1A0F0F]",
            )}
          >
            Brewing <span className="text-[#C47B4B]">Transparency</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ ...GLOBAL_TRANSITION, delay: 0.15 }}
            className={cn(
              "max-w-2xl mx-auto text-lg",
              isDarkMode ? "text-white/60" : "text-black/60",
            )}
          >
            We combine ancient Ethiopian heritage with modern AI to protect the
            soul of every bean.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{
                ...GLOBAL_TRANSITION,
                delay: idx * 0.08,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className={cn(
                "p-8 rounded-3xl border relative overflow-hidden group backdrop-blur-xl transition-all duration-500",
                isDarkMode
                  ? "bg-white/5 border-white/10 hover:bg-white/10"
                  : "bg-black/5 border-black/10 hover:bg-black/10",
              )}
            >
              {/* Glow Layer */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-2xl transition duration-500"
                style={{ background: f.color }}
              />

              {/* Icon */}
              <div className="mb-6 relative z-10">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                  style={{ backgroundColor: `${f.color}20` }}
                >
                  <f.icon size={24} style={{ color: f.color }} />
                </div>
              </div>

              {/* Title */}
              <h3
                className={cn(
                  "text-xl font-medium mb-4 relative z-10",
                  isDarkMode ? "text-white" : "text-[#1A0F0F]",
                )}
              >
                {f.title}
              </h3>

              {/* Description */}
              <p
                className={cn(
                  "leading-relaxed relative z-10",
                  isDarkMode ? "text-white/50" : "text-black/50",
                )}
              >
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
