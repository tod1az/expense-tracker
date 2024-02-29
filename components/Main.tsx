import { Text, View, ActivityIndicator } from "react-native";
import { api } from "../convex/_generated/api";
import { useQuery } from "convex/react";
import Separator from "./Separator";
import { getTotalExpenses } from "../lib/helpers";
import ExpensesList from "./ExpensesList";

export default function Main() {
  const expenses = useQuery(api.expenses.getExpenses);
  return (
    <View>
      <Text className="font-bold text-2xl mb-10 text-white text-center pt-6">
        Gastos
      </Text>
      <Separator />
      {expenses ? <ExpensesList expenses={expenses} /> : <ActivityIndicator />}
      {expenses && (
        <View className="bg-white/20">
          <Separator />
          <Text className="mx-auto text-2xl my-3">
            {`Total: $${getTotalExpenses(expenses)}`}
          </Text>
          <Separator />
        </View>
      )}
    </View>
  );
}
