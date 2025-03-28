import { ErrorContext } from "better-auth/client";
import { clsx, type ClassValue } from "clsx";
import { redirect } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchCallback = ({
  setIsLoading,
  onError,
  onSuccess,
}: {
  setIsLoading: (value: boolean) => void;
  onError: (context: ErrorContext) => Promise<void> | void;
  onSuccess: () => Promise<void> | void;
}) => {
  return {
    onRequest: () => {
      setIsLoading(true);
    },
    onError: (context: ErrorContext) => {
      onError(context);
      setIsLoading(false);
    },
    onSuccess: () => {
      onSuccess();
      redirect("/store");
    },
  };
};

export const formatWord = (str: string): string => {
  if (!str) {
    return "";
  }

  return str
    .split(/\s+/)
    .map((word) => {
      if (word.length === 0) {
        return "";
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
};
