import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";
import { GithubIcon } from "lucide-react";

const GithubOauthButton = () => {
  return (
    <Button
      variant="outline"
      className="w-full mt-4 flex items-center gap-2"
      onClick={async () => {
        const { data, error } = await authClient.signIn.social({
          provider: "github",
          callbackURL: "/dashboard",
          errorCallbackURL: "/login",
        });
      }}
    >
      <GithubIcon className="h-4 w-4" />
      GitHub
    </Button>
  );
};

export default GithubOauthButton;
