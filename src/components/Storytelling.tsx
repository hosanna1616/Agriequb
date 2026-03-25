import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn, GLOBAL_TRANSITION } from "@/lib/utils";

export const Storytelling = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity1 = useTransform(scrollYProgress, [0.1, 0.2, 0.3, 0.4], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1.0], [0, 1, 1, 0]);

  const y1 = useTransform(scrollYProgress, [0.1, 0.2], [40, 0]);
  const y2 = useTransform(scrollYProgress, [0.4, 0.5], [40, 0]);
  const y3 = useTransform(scrollYProgress, [0.7, 0.8], [40, 0]);

  const stories = [
    {
      title: "The Birthplace",
      content: "Deep in the misty forests of Kaffa, coffee was discovered. AgriEqub honors this origin by protecting the biodiversity of wild coffee landscapes.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200",
      opacity: opacity1,
      y: y1
    },
    {
      title: "The Hands That Harvest",
      content: "Each cherry is hand-picked at peak ripeness. Our AI verifies the labor conditions and ensures that every hand is rewarded fairly.",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=1200",
      opacity: opacity2,
      y: y2
    },
    {
      title: "The Global Connection",
      content: "From Addis Ababa to Oslo, we close the gap. A digital bridge that brings the story of the farmer directly to the coffee enthusiast.",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=1200",
      opacity: opacity3,
      y: y3
    }
  ];

  return (
    <section ref={containerRef} id="story" className="relative h-[300vh] px-6">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {stories.map((story, i) => (
          <motion.div
            key={i}
            style={{ opacity: story.opacity }}
            className="absolute inset-0 flex items-center justify-center p-6 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <motion.div style={{ y: story.y }} className="order-2 lg:order-1">
                <h3 className={cn(
                  "text-4xl md:text-6xl font-serif mb-6",
                  isDarkMode ? "text-white" : "text-[#1A0F0F]"
                )}>
                  {story.title}
                </h3>
                <p className={cn(
                  "text-xl leading-relaxed max-w-xl",
                  isDarkMode ? "text-white/60" : "text-black/60"
                )}>
                  {story.content}
                </p>
              </motion.div>
              
              <motion.div 
                style={{ y: story.y }}
                className="order-1 lg:order-2 relative aspect-[4/3] rounded-3xl overflow-hidden group"
              >
                <motion.img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};