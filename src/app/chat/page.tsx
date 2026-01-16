import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function ChatPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Welcome to the AI Chat!</h1>
      {/* Chat UI will go here */}
    </main>
  );
}
