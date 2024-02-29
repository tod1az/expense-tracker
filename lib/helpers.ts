import { Expense } from "./types";

export function getTotalExpenses(expenses: Expense[]) {
  let expencesAcumulator = 0;
  expenses.forEach((expense) => {
    expencesAcumulator += expense.cost;
  });
  return expencesAcumulator;
}
