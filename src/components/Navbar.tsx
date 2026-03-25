import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Navbar = ({ isDarkMode, toggleTheme }: NavbarProps) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const logoUrl = "https://storage.googleapis.com/dala-prod-public-storage/attachments/9a0e1a9a-5079-44aa-8fb1-a029084f47dd/1774434965399_AgriEqub_logo_in_cof.png";

  const navLinks = [
    { name: "The Origin", href: "story" },
    { name: "Traceability", href: "features" },
    { name: "Technology", href: "ai" },
    { name: "Connect", href: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500",
        isScrolled 
          ? "bg-[#1A0F0F]/70 backdrop-blur-xl border-b border-white/10" 
          : "bg-transparent border-b border-transparent",
        !isDarkMode && isScrolled && "bg-[#F5E8C7]/70 border-black/5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <img 
            src={logoUrl} 
            alt="AgriEqub Logo" 
            className={cn(
              "h-40 w-auto transition-transform duration-500 group-hover:scale-105",
              !isDarkMode && "invert brightness-0"
            )}
          />
          <span className={cn(
            "text-lg font-medium tracking-tight",
            isDarkMode ? "text-white" : "text-[#1A0F0F]"
          )}>
            <span className="text-[#C47B4B]"></span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-lg font-bold transition-all duration-300 relative group",
                isDarkMode ? "text-white/60 hover:text-white" : "text-black/60 hover:text-black"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#C47B4B] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
          
          <button
            onClick={toggleTheme}
            className={cn(
              "p-6 rounded-full transition-colors",
              isDarkMode ? "hover:bg-white/10" : "hover:bg-black/10"
            )}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={cn(
              "md:hidden overflow-hidden mt-4 rounded-2xl glass-dark",
              !isDarkMode && "glass-light"
            )}
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium py-7 px-4 rounded-xl",
                    isDarkMode ? "text-white/80 hover:bg-white/10" : "text-black/80 hover:bg-black/10"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};