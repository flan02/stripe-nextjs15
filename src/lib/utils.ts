import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function convertToSubcurrency(amount: number, factor: number = 100): number {
  if (factor === 0) {
    throw new Error("Factor must not be zero.");
  }
  return Math.round(amount * factor)
}
export function convertToCurrency(amount: number): number {
  return Math.round(amount / 100)
}

export function convertToCurrencyString(amount: number): string {
  return (amount / 100).toFixed(2)
}
export function convertToSubcurrencyString(amount: number): string {
  return (amount * 100).toFixed(0)
}