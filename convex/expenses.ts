import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
export const getExpenses = query({
  handler: async (ctx) => {
    const expenses = await ctx.db.query("expenses").collect();
    return expenses;
  },
});

export const saveExpense = mutation({
  args: { description: v.string(), cost: v.number() },
  handler: async (ctx, args) => {
    const newExpense = await ctx.db.insert("expenses", {
      description: args.description,
      cost: args.cost,
    });
    return newExpense;
  },
});
