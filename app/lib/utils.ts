import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export interface ResponseInterface<T> {
  code: number,
  success: boolean,
  message: string,
  data: T
}