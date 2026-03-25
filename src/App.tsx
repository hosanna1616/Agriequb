import React, { useState, useEffect, Suspense } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Storytelling } from "@/components/Storytelling";
import { AIShowcase } from "@/components/AIShowcase";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simulation of initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={cn(
      "relative min-h-screen selection:bg-[#C47B4B] selection:text-white transition-colors duration-700",
      isDarkMode ? "bg-[#1A0F0F] text-white" : "bg-[#F5E8C7] text-[#1A0F0F]"
    )}>
      <Toaster 
        theme={isDarkMode ? "dark" : "light"} 
        richColors 
        position="top-right" 
        expand={false}
      />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A0F0F]"
          >
            <div className="flex flex-col items-center gap-6">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5] 
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 border-2 border-[#C47B4B] rounded-full flex items-center justify-center"
              >
                <div className="w-8 h-8 bg-[#C47B4B] rounded-full" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-[#C47B4B] font-mono text-sm tracking-[0.3em] uppercase"
              >
                Brewing AgriEqub Trace
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <Background isDarkMode={isDarkMode} />
            <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            
            <Suspense fallback={null}>
              <div className="relative">
                <Hero isDarkMode={isDarkMode} />
                <Storytelling isDarkMode={isDarkMode} />
                <Features isDarkMode={isDarkMode} />
                <AIShowcase isDarkMode={isDarkMode} />
                <ContactForm isDarkMode={isDarkMode} />
                <Footer isDarkMode={isDarkMode} />
              </div>
            </Suspense>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;