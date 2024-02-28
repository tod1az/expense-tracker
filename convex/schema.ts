import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  expenses: defineTable({
    description: v.string(),
    cost: v.number(),
  }),
});
