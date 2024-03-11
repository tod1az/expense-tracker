import { Text, View } from "react-native";
import { Expense } from "../lib/types";
import { Pencil } from "lucide-react-native";
import { Link } from "expo-router";

type CardProps = {
  expense: Expense;
};

export default function Card(props: CardProps) {
  return (
    <View className="flex flex-row items-center justify-between px-5 my-2 w-full">
      <View>
        <Text className="capitalize font-bold">
          {props.expense.description}
        </Text>
        <Text>{`$${props.expense.cost}`}</Text>
        <Text>
          {new Date(props.expense._creationTime).toLocaleDateString()}
        </Text>
      </View>
      <Link href={"/edit"}>
        <Pencil color={"black"} />
      </Link>
    </View>
  );
}
