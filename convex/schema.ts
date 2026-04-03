import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

export default defineSchema({
  ...authTables,
  users: defineTable({
    name: v.optional(v.string()),
    email: v.optional(v.string()),
    image: v.optional(v.string()),
    credits: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_email", ["email"]),

  chats: defineTable({
    userId: v.id("users"),
    title: v.string(),
    modelIds: v.array(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_updated", ["userId", "updatedAt"]),

  messages: defineTable({
    chatId: v.id("chats"),
    role: v.union(v.literal("user"), v.literal("assistant"), v.literal("summary")),
    content: v.string(),
    modelId: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_chat", ["chatId"])
    .index("by_created", ["chatId", "createdAt"]),

  credits: defineTable({
    userId: v.id("users"),
    amount: v.number(),
    type: v.union(v.literal("purchase"), v.literal("usage"), v.literal("refund")),
    description: v.string(),
    createdAt: v.number(),
  }).index("by_user", ["userId"]),
});