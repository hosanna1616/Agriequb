import React from "react";
import { motion } from "framer-motion";
import { Brain, Sparkles, Cpu } from "lucide-react";
import { cn, GLOBAL_TRANSITION } from "@/lib/utils";

const FloatingBean = ({ delay = 0, x = "0%", y = "0%", size = 20 }: { delay?: number; x?: string; y?: string; size?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 0.15, scale: 1 }}
    animate={{ 
      y: ["-10%", "10%", "-10%"],
      rotate: [0, 10, -10, 0]
    }}
    transition={{ 
      duration: 8, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay 
    }}
    className="absolute pointer-events-none"
    style={{ left: x, top: y }}
  >
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-[#3B2A1E]">
      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-11c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2h-2c-.55 0-1-.45-1-1s.45-1 1-1h2v-2z" />
    </svg>
  </motion.div>
);

export const AIShowcase = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <section id="ai" className="py-32 px-6 relative overflow-hidden">
      <FloatingBean x="10%" y="20%" size={40} delay={0} />
      <FloatingBean x="85%" y="70%" size={30} delay={2} />
      <FloatingBean x="70%" y="15%" size={25} delay={4} />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={GLOBAL_TRANSITION}
              className={cn(
                "relative z-10 p-1 rounded-3xl overflow-hidden",
                isDarkMode ? "bg-gradient-to-br from-[#C47B4B]/30 to-transparent" : "bg-gradient-to-br from-[#C47B4B]/10 to-transparent"
              )}
            >
              <div className={cn(
                "rounded-[calc(1.5rem-4px)] p-2 relative overflow-hidden",
                isDarkMode ? "bg-[#2A1B14]" : "bg-white"
              )}>
                <img 
                  src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&q=80&w=1200" 
                  alt="AI Grading Technology" 
                  className="w-full h-auto rounded-2xl"
                />
                
                {/* Floating AI Indicators */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 right-8 p-4 glass-dark rounded-2xl border border-white/20 backdrop-blur-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-mono text-white/80"> Detection</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-1/4 left-8 p-4 glass-dark rounded-2xl border border-white/20 backdrop-blur-md"
                >
                  <div className="flex items-center gap-3">
                    <Sparkles size={14} className="text-[#D4AF37]" />
                    <span className="text-xs font-mono text-white/80">98.2% Purity Verified</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#C47B4B]/10 blur-[100px] -z-10" />
          </div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={GLOBAL_TRANSITION}
            >
              <div className="flex items-center gap-2 mb-6">
                <Brain className="text-[#C47B4B]" size={24} />
                <span className="text-[#C47B4B] font-mono text-sm tracking-widest uppercase">Intelligent Sourcing</span>
              </div>
              
              <h2 className={cn(
                "text-4xl md:text-6xl font-serif mb-8 leading-tight",
                isDarkMode ? "text-white" : "text-[#1A0F0F]"
              )}>
                AI that understands <span className="text-[#D4AF37]">the Roast.</span>
              </h2>
              
              <p className={cn(
                "text-xl mb-12 leading-relaxed",
                isDarkMode ? "text-white/60" : "text-black/60"
              )}>
                Our proprietary neural network has been trained on over 10 million coffee 
                data points, from soil moisture in Sidama to roast curves in New York. 
                We predict taste profiles before the beans even leave the washing station.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Cpu, label: "Edge Computing", desc: "Real-time analysis at the source." },
                  { icon: Sparkles, label: "Purity Index", desc: "Ensuring zero contamination in every batch." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <item.icon className="text-[#D4AF37]" size={20} />
                    </div>
                    <div>
                      <h4 className={cn("font-medium", isDarkMode ? "text-white" : "text-black")}>{item.label}</h4>
                      <p className={cn("text-sm", isDarkMode ? "text-white/40" : "text-black/40")}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};