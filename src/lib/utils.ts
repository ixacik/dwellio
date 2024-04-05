import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// format price to EUR
export function formatPrice(price: number) {
  return new Intl.NumberFormat("sk-SK", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}
