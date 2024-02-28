import { query } from "./_generated/server";

export const getExpenses = query({
  handler: async (ctx) => {
    const expenses = await ctx.db.query("expenses").collect();
    return expenses;
  },
});
