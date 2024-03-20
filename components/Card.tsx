import { Text, View, Modal, Pressable } from "react-native";
import { Expense } from "../lib/types";
import { Pencil } from "lucide-react-native";
import { Link } from "expo-router";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

type CardProps = {
  expense: Expense;
};

export default function Card(props: CardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const deletExpense = useMutation(api.expenses.deleteExpense);

  return (
    <View className="flex flex-row h-28 items-center justify-between px-5 my-2 w-full">
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={() => {
          setIsOpen(!isOpen);
        }}
      >
        <View className="h-screen ">
          <View className="mx-auto border mt-16 bg-green-400 px-10 py-6 rounded-lg">
            <View className="mb-10">
              <CloseModalButton isOpen={isOpen} setIsOpen={setIsOpen} />
            </View>
            <Text className="font-bold text-2xl">
              {`¿Desea eliminar permanentemente el gasto:`}
            </Text>
            <Text className="font-bold text-2xl mt-2 mx-auto">
              {`${props.expense.description}?`}
            </Text>
            <View className="flex flex-row justify-between mt-5 px-4">
              <Pressable
                className="  font-bold bg-red-600 border px-4 rounded-lg"
                onPress={() => deletExpense({ id: props.expense._id })}
              >
                <Text className="text-white text-xl">Si</Text>
              </Pressable>
              <Pressable
                onPress={() => setIsOpen(!isOpen)}
                className=" text-3xl font-bold bg-white border px-4 rounded-lg"
              >
                <Text className="text-xl">No</Text>
              </Pressable>
            </View>
          </View>
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
      <View className="flex gap-6 justify-center">
        <View>
          <CloseModalButton isOpen={isOpen} setIsOpen={setIsOpen} />
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
      </View>
    </View>
  );
}

type CloseModalButtonProps = {
  setIsOpen: (p: boolean) => void;
  isOpen: boolean;
};

function CloseModalButton({ setIsOpen, isOpen }: CloseModalButtonProps) {
  return (
    <>
      <Pressable
        onPress={() => setIsOpen(!isOpen)}
        className="bg-red-700 flex items-center justify-center h-6 border  w-6 rounded-full"
      >
        <Text>X</Text>
      </Pressable>
    </>
  );
}
