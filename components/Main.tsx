import { Text, View } from "react-native";
import { api } from "../convex/_generated/api";
import { useQuery } from "convex/react";
import Card from "./Card";
import Separator from "./Separator";
import { getTotalExpenses } from "../lib/helpers";

export default function Main() {
  const expenses = useQuery(api.expenses.getExpenses);
  return (
    <View>
      <Text className="font-bold text-2xl mb-10 text-white text-center pt-6">
        Gastos
      </Text>
      <Separator />
      {expenses?.map((expense) => (
        <View key={expense._id}>
          <Card expense={expense} />
          <Separator />
        </View>
      ))}
      {expenses && <Text>{`Total:$${getTotalExpenses(expenses)}`}</Text>}
    </View>
  );
}
