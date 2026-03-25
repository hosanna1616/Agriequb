import React from "react";
import { motion } from "framer-motion";
import { Coffee, ArrowRight, Play } from "lucide-react";
import { cn, GLOBAL_TRANSITION } from "@/lib/utils";

export const Hero = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...GLOBAL_TRANSITION, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-0 py-0   "
        >
          <Coffee size={66} className="text-[#C47B4B]" />
          <span className="text-xs md:text-sm font-medium tracking-wide uppercase text-[#C47B4B]"></span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...GLOBAL_TRANSITION, delay: 0.4 }}
          className={cn(
            "text-5xl md:text-8xl font-serif font-medium tracking-tight leading-[1.1] mb-8",
            isDarkMode ? "text-white" : "text-[#1A0F0F]",
          )}
        >
          From Highlands to{" "}
          <span className="italic text-[#C47B4B]">Harmony.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...GLOBAL_TRANSITION, delay: 0.6 }}
          className={cn(
            "text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed",
            isDarkMode ? "text-white/60" : "text-black/60",
          )}
        >
          AgriEqub Trace uses advanced AI to verify every single bean's origin,
          ensuring fair trade and unmatched quality for Ethiopian coffee lovers
          worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...GLOBAL_TRANSITION, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-full bg-[#C47B4B] text-white font-medium flex items-center gap-2 transition-shadow group"
          >
            Trace Your Batch
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={cn(
              "px-8 py-4 rounded-full border font-medium flex items-center gap-2",
              isDarkMode
                ? "border-white/10 hover:bg-white/5"
                : "border-black/10 hover:bg-black/5",
            )}
          >
            <Play size={18} fill="currentColor" />
            Watch the Process
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Steam Wisps (Very subtle) */}
      <motion.div
        animate={{
          y: [-10, -50],
          opacity: [0, 0.2, 0],
          x: [0, 10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-1/4 w-[1px] h-32 bg-gradient-to-t from-white/20 to-transparent blur-xl"
      />
      <motion.div
        animate={{
          y: [-10, -60],
          opacity: [0, 0.15, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        className="absolute bottom-0 right-1/4 w-[1px] h-40 bg-gradient-to-t from-white/20 to-transparent blur-xl"
      />
    </section>
  );
};