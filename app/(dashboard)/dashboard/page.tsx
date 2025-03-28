import Game2048 from "@/components/dashboard/2048";
import Navbar from "@/components/store/navbar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/login");
  }

  return <Game2048 />;
};

export default Dashboard;
