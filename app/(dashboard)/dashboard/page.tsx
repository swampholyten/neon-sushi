import Game2048 from "@/components/dashboard/2048";
import { ModeToggle } from "@/components/mode-toggle";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ModeToggle />
      <Game2048 />
    </div>
  );
};

export default Dashboard;
