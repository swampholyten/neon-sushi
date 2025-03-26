import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";
import { GithubLogo } from "@phosphor-icons/react";

const GithubOauthButton = () => {
  return (
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
  );
};

export default GithubOauthButton;
