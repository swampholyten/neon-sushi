"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";
import { Ghost, GithubLogo } from "@phosphor-icons/react";
import { fetchCallback } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";

const GithubOauthButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Button
        variant="outline"
        className="w-full mt-4 flex items-center gap-2"
        onClick={async () => {
          await authClient.signIn.social({
            provider: "github",
            callbackURL: "/dashboard",
            errorCallbackURL: "/login",
          });
        }}
      >
        <GithubLogo weight="duotone" className="h-4 w-4" />
        GitHub
      </Button>

      <Button
        variant="outline"
        className="w-full mt-4 flex items-center gap-2"
        onClick={async () => {
          await authClient.signIn.anonymous({
            fetchOptions: fetchCallback({
              setIsLoading,
              onError: (context) => {
                toast.error(`${context.error.message}`);
              },
              onSuccess: () => {
                toast.success("Login Successfully");
              },
            }),
          });
        }}
      >
        <Ghost weight="duotone" className="h-4 w-4" />
        Anonymous
      </Button>
    </>
  );
};

export default GithubOauthButton;
