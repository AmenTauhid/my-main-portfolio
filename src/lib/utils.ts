import { type ClassValue, clsx } from "clsx";

// Lightweight cn helper — no tailwind-merge needed for this project
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
