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
      redirect("/products");
    },
  };
};

export const formatWord = (str: string): string => {
  if (!str) {
    return "";
  }

  return str
    .replace(/ *\([^)]*\) */g, "")
    .trim()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

// Helper function to convert product name to slug
export const nameToSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/\([^)]*\)/g, "") // Remove anything in parentheses
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]/g, ""); // Remove special characters
};

// Helper function to convert slug back to display name
export const slugToDisplayName = (slug: string): string => {
  return slug
    .split("-")
    .map((word) => word.toUpperCase())
    .join(" ");
};
