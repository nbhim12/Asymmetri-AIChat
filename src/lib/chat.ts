import { db } from "../db";
import { chats, messages } from "../db/schema";
import { eq, desc } from "drizzle-orm";

export async function getUserChats(userId: number) {
  return db.select().from(chats).where(eq(chats.userId, userId)).orderBy(desc(chats.createdAt));
}

export async function getChatMessages(chatId: number) {
  return db.select().from(messages).where(eq(messages.chatId, chatId)).orderBy(messages.createdAt);
}

export async function createChat(userId: number, title: string) {
  return db.insert(chats).values({ userId, title }).returning();
}

export async function addMessage(chatId: number, role: string, content: string) {
  return db.insert(messages).values({ chatId, role, content }).returning();
}
