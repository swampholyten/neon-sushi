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
      redirect("/dashboard");
    },
  };
};
