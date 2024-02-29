import { Text, View } from "react-native";
import { Expense } from "../lib/types";

type CardProps = {
  expense: Expense;
};

export default function Card(props: CardProps) {
  return (
    <View className="space-y-1 px-2 my-2 w-[300px]">
      <Text className="capitalize font-bold">{props.expense.description}</Text>
      <Text>{`$${props.expense.cost}`}</Text>
      <Text>{new Date(props.expense._creationTime).toLocaleDateString()}</Text>
    </View>
  );
}
