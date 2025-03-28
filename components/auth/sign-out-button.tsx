"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { SignOut } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const SignOutButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  return (
    <Button
      variant="destructive"
      size={"icon"}
      disabled={isLoading}
      onClick={async () => {
        await authClient.signOut({
          fetchOptions: {
            onRequest: () => {
              setIsLoading(true);
            },
            onError: (context) => {
              toast.error(`${context.error.message}`);
            },
            onSuccess: () => {
              toast.success("Logged out successfully.");
              router.push("/");
            },
          },
        });
      }}
    >
      <SignOut weight="duotone" size={24} />
    </Button>
  );
};

export default SignOutButton;
