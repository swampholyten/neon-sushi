import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchCallback = ({
  setIsLoading,
}: {
  setIsLoading: (value: boolean) => void;
}) => {
  return {
    onRequest: () => {
      setIsLoading(true);
    },
    onResponse: () => {
      setIsLoading(false);
    },
  };
};
