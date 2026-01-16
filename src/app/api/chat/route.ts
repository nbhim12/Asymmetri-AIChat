import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { getUserChats, createChat } from "../../../lib/chat";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  // TODO: Lookup userId by email
  // const userId = ...
  // const chats = await getUserChats(userId);
  // return NextResponse.json(chats);
  return NextResponse.json([]);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { title } = await req.json();
  // TODO: Lookup userId by email
  // const userId = ...
  // const chat = await createChat(userId, title);
  // return NextResponse.json(chat);
  return NextResponse.json({});
}
