import React from "react";
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";

export const Footer = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const logoUrl = "https://storage.googleapis.com/dala-prod-public-storage/attachments/9a0e1a9a-5079-44aa-8fb1-a029084f47dd/1774434965399_AgriEqub_logo_in_cof.png";

  return (
    <footer className={cn(
      "py-20 px-16 relative overflow-hidden",
      isDarkMode ? "bg-[#1A0F0F]" : "bg-[#F5E8C7]"
    )}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-6">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src={logoUrl} 
                alt="AgriEqub Logo" 
                className={cn("h-40 w-auto", !isDarkMode && "invert brightness-0")}
              />
              <span className={cn(
                "text-2xl font-serif font-medium",
                isDarkMode ? "text-white" : "text-[#1A0F0F]"
              )}>
                
              </span>
            </div>
            <p className={cn(
              "max-w-sm mb-8 leading-relaxed",
              isDarkMode ? "text-white/60" : "text-black/60"
            )}>
              Pioneering digital transparency for Ethiopian coffee growers and 
              global consumers since 2024.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -4, color: "#C47B4B" }}
                  className={isDarkMode ? "text-white/40" : "text-black/40"}
                >
                  <Icon size={30} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className={cn("font-medium mb-6", isDarkMode ? "text-white" : "text-black")}>Platform</h4>
            <ul className={cn("space-y-4", isDarkMode ? "text-white/50" : "text-black/50")}>
              <li><a href="#" className="hover:text-[#C47B4B] transition-colors">Traceability</a></li>
              <li><a href="#" className="hover:text-[#C47B4B] transition-colors">AI Grading</a></li>
              <li><a href="#" className="hover:text-[#C47B4B] transition-colors">Farmer Network</a></li>
              <li><a href="#" className="hover:text-[#C47B4B] transition-colors">Marketplace</a></li>
            </ul>
          </div>

          <div>
            <h4 className={cn("font-medium mb-6", isDarkMode ? "text-white" : "text-black")}>Company</h4>
            <ul className={cn("space-y-4", isDarkMode ? "text-white/50" : "text-black/50")}>
              <li><a href="#" className="hover:text-[#C47B4B] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#C47B4B] transition-colors">Impact Report</a></li>
              <li><a href="#" className="hover:text-[#C47B4B] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#C47B4B] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

       
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-1/2 bg-[#C47B4B]/5 blur-[120px] rounded-full -z-10" />
    </footer>
  );
};