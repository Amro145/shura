import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getUserCredits = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    const user = await ctx.db.get(args.userId);
    return user?.credits ?? 0;
  },
});

export const getCreditHistory = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("credits")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .order("desc")
      .take(50);
  },
});

export const addCredits = mutation({
  args: {
    userId: v.id("users"),
    amount: v.number(),
    type: v.union(v.literal("purchase"), v.literal("refund")),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db.get(args.userId);
    if (!user) throw new Error("User not found");
    
    await ctx.db.patch(args.userId, {
      credits: user.credits + args.amount,
      updatedAt: Date.now(),
    });
    
    await ctx.db.insert("credits", {
      userId: args.userId,
      amount: args.amount,
      type: args.type,
      description: args.description,
      createdAt: Date.now(),
    });
  },
});

export const deductCredits = mutation({
  args: {
    userId: v.id("users"),
    amount: v.number(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db.get(args.userId);
    if (!user) throw new Error("User not found");
    if (user.credits < args.amount) throw new Error("Insufficient credits");
    
    await ctx.db.patch(args.userId, {
      credits: user.credits - args.amount,
      updatedAt: Date.now(),
    });
    
    await ctx.db.insert("credits", {
      userId: args.userId,
      amount: -args.amount,
      type: "usage",
      description: args.description,
      createdAt: Date.now(),
    });
  },
});