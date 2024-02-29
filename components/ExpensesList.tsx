import { Text, View } from "react-native";
import { Expense } from "../lib/types";
import Card from "./Card";
import Separator from "./Separator";

type ExpensesListProps = {
  expenses: Expense[];
};
export default function ExpensesList(props: ExpensesListProps) {
  if (props.expenses.length === 0) {
    return (
      <View className="bg-white/40 text-3xl flex items-center justify-center h-[200px]">
        <Text>Aún no has añadidos gastos 😢</Text>
      </View>
    );
  }
  return (
    <>
      {props.expenses?.map((expense) => (
        <View className="bg-white/40" key={expense._id}>
          <Card expense={expense} />
          <Separator />
        </View>
      ))}
    </>
  );
}
