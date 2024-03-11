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

export const editExpense = mutation({
  args: { description: v.string(), cost: v.number(), id: v.id("expenses") },

  handler: async (ctx, args) => {
    const { id } = args;
    const newExpense = await ctx.db.patch(id, {
      description: args.description,
      cost: args.cost,
    });
    return newExpense;
  },
});

export const deleteExpense = mutation({
  args: { id: v.id("expenses") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
