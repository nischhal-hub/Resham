import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function objToFormData(obj){
  const formData = new FormData();
  Object.keys(obj).forEach(key=> formData.append(key, obj[key]))
  return formData;
}