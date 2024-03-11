import { Text, View, Modal, Pressable } from "react-native";
import { Expense } from "../lib/types";
import { Pencil } from "lucide-react-native";
import { Link } from "expo-router";
import { useState } from "react";

type CardProps = {
  expense: Expense;
};

export default function Card(props: CardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Pressable
      onLongPress={() => setIsOpen(true)}
      className="flex flex-row h-28 items-center justify-between px-5 my-2 w-full"
    >
      <Modal
        animationType="slide"
        transparent={false}
        visible={isOpen}
        onRequestClose={() => {
          setIsOpen(!isOpen);
        }}
      >
        <View>
          <Text>{`Desea eliminar permanentemente el gasto:${props.expense.description}?`}</Text>
          <Pressable>
            <Text>Si</Text>
          </Pressable>
          <Pressable>
            <Text>No</Text>
          </Pressable>
        </View>
      </Modal>
      <View>
        <Text className="capitalize font-bold">
          {props.expense.description}
        </Text>
        <Text>{`$${props.expense.cost}`}</Text>
        <Text>
          {new Date(props.expense._creationTime).toLocaleDateString()}
        </Text>
      </View>
      <Link
        href={{
          pathname: "/edit",
          params: {
            id: props.expense._id,
            cost: props.expense.cost,
            description: props.expense.description,
          },
        }}
      >
        <Pencil color={"black"} />
      </Link>
    </Pressable>
  );
}
