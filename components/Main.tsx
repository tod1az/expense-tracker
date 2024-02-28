import { Text, View } from "react-native";
import { api } from "../convex/_generated/api";
import { useQuery } from "convex/react";

export default function Main() {
  const expenses = useQuery(api.expenses.getExpenses);

  return (
    <View>
      <Text className="font-bold text-2xl mb-10 text-white pt-6">Expenses</Text>
      <Text>{}</Text>
      {expenses?.map((expense) => (
        <View key={expense._id}>
          <Text className="capitalize font-bold">{expense.description}</Text>
          <Text>{expense.cost}</Text>
          <Text>{new Date(expense._creationTime).toLocaleDateString()}</Text>
        </View>
      ))}
    </View>
  );
}
