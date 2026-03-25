import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn, GLOBAL_TRANSITION } from "@/lib/utils";
import { toast } from "sonner";

export const ContactForm = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        toast.success("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setStatus("error");
      toast.error("Something went wrong. Please try again.");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={GLOBAL_TRANSITION}
            className={cn(
              "text-4xl md:text-5xl font-serif mb-4",
              isDarkMode ? "text-white" : "text-[#1A0F0F]",
            )}
          >
            Get in <span className="text-[#C47B4B]">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...GLOBAL_TRANSITION, delay: 0.1 }}
            className={cn(
              "text-lg",
              isDarkMode ? "text-white/60" : "text-black/60",
            )}
          >
            Ready to trace your beans or partner with us?
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...GLOBAL_TRANSITION, delay: 0.2 }}
          className={cn(
            "p-8 md:p-12 rounded-[2.5rem] border backdrop-blur-xl relative overflow-hidden",
            isDarkMode
              ? "bg-white/5 border-white/10"
              : "bg-black/5 border-black/5",
          )}
        >
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  className={cn(
                    "text-sm font-medium ml-1",
                    isDarkMode ? "text-white/70" : "text-black/70",
                  )}
                >
                  Full Name
                </label>
                <input
                  required
                  name="name"
                  placeholder="Hosanna walle"
                  className={cn(
                    "w-full px-6 py-4 rounded-2xl outline-none transition-all duration-300",
                    isDarkMode
                      ? "bg-white/5 border-white/10 text-white focus:bg-white/10 focus:border-[#C47B4B]/50"
                      : "bg-black/5 border-black/5 text-black focus:bg-black/10 focus:border-[#C47B4B]/50",
                  )}
                />
              </div>
              <div className="space-y-2">
                <label
                  className={cn(
                    "text-sm font-medium ml-1",
                    isDarkMode ? "text-white/70" : "text-black/70",
                  )}
                >
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="agri@agriequb.com"
                  className={cn(
                    "w-full px-6 py-4 rounded-2xl outline-none transition-all duration-300",
                    isDarkMode
                      ? "bg-white/5 border-white/10 text-white focus:bg-white/10 focus:border-[#C47B4B]/50"
                      : "bg-black/5 border-black/5 text-black focus:bg-black/10 focus:border-[#C47B4B]/50",
                  )}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                className={cn(
                  "text-sm font-medium ml-1",
                  isDarkMode ? "text-white/70" : "text-black/70",
                )}
              >
                Phone Number
              </label>
              <input
                name="phone"
                placeholder="+251 9xx xxx xxx"
                className={cn(
                  "w-full px-6 py-4 rounded-2xl outline-none transition-all duration-300",
                  isDarkMode
                    ? "bg-white/5 border-white/10 text-white focus:bg-white/10 focus:border-[#C47B4B]/50"
                    : "bg-black/5 border-black/5 text-black focus:bg-black/10 focus:border-[#C47B4B]/50",
                )}
              />
            </div>

            <div className="space-y-2">
              <label
                className={cn(
                  "text-sm font-medium ml-1",
                  isDarkMode ? "text-white/70" : "text-black/70",
                )}
              >
                Your Message
              </label>
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Tell us about your project..."
                className={cn(
                  "w-full px-6 py-4 rounded-2xl outline-none transition-all duration-300 resize-none",
                  isDarkMode
                    ? "bg-white/5 border-white/10 text-white focus:bg-white/10 focus:border-[#C47B4B]/50"
                    : "bg-black/5 border-black/5 text-black focus:bg-black/10 focus:border-[#C47B4B]/50",
                )}
              />
            </div>

            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              disabled={status === "loading"}
              className={cn(
                "w-full py-4 rounded-2xl text-[#C47B4B] text-white font-bold flex items-center justify-center gap-3 transition-all",
                status === "loading" && "opacity-80 cursor-not-allowed",
              )}
            >
              {status === "loading" ? (
                <Loader2 className="animate-spin" />
              ) : status === "success" ? (
                <CheckCircle2 />
              ) : status === "error" ? (
                <AlertCircle />
              ) : (
                <Send size={20} />
              )}
              {status === "loading"
                ? "Sending..."
                : status === "success"
                  ? "Message Sent!"
                  : status === "error"
                    ? "Error Occurred"
                    : "Send Message"}
            </motion.button>
          </form>

          {/* Coffee Ring Stain (Very subtle) */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 border-[10px] border-[#C47B4B]/5 rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};