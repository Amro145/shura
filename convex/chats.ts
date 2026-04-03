import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const listChats = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("chats")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .order("desc")
      .take(50);
  },
});

export const createChat = mutation({
  args: {
    userId: v.id("users"),
    title: v.string(),
    modelIds: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const chatId = await ctx.db.insert("chats", {
      userId: args.userId,
      title: args.title,
      modelIds: args.modelIds,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    return chatId;
  },
});

export const getChat = query({
  args: { chatId: v.id("chats") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.chatId);
  },
});

export const updateChat = mutation({
  args: {
    chatId: v.id("chats"),
    title: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.chatId, {
      ...(args.title && { title: args.title }),
      updatedAt: Date.now(),
    });
  },
});

export const deleteChat = mutation({
  args: { chatId: v.id("chats") },
  handler: async (ctx, args) => {
    const messages = await ctx.db
      .query("messages")
      .withIndex("by_chat", (q) => q.eq("chatId", args.chatId))
      .collect();
    
    for (const msg of messages) {
      await ctx.db.delete(msg._id);
    }
    
    await ctx.db.delete(args.chatId);
  },
});