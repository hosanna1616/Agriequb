import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const COFFEE_COLORS = {
  espresso: "#1A0F0F",
  darkRoast: "#2A1B14",
  coffeeBrown: "#3B2A1E",
  caramel: "#C47B4B",
  gold: "#D4AF37",
  cream: "#F5E8C7",
};

export const GLOBAL_TRANSITION = {
  duration: 1.2,
  ease: [0.16, 1, 0.3, 1] as any,
};