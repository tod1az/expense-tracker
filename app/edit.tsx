import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import PageContainer from "../components/PageContainer";
import Header from "../components/Header";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { ExpenseId } from "../lib/types";
import { useNavigation } from "expo-router";

export default function Page() {
  const { id, description, cost } = useLocalSearchParams();
  const [newDescription, setDescription] = useState<string>(
    description as string
  );
  const [newCost, setCost] = useState<number | string>(cost as string);
  const [error, setError] = useState<unknown>("");
  const [isLoading, setIsLoading] = useState(false);
  const editExpense = useMutation(api.expenses.editExpense);
  const deleteExpense = useMutation(api.expenses.deleteExpense);
  const { goBack } = useNavigation();

  const handlePress = async () => {
    try {
      setIsLoading(true);
      await editExpense({
        cost: Number(newCost),
        description: newDescription,
        id: id as ExpenseId,
      });
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      goBack();
    }
  };

  return (
    <PageContainer height="h-screen">
      <Header>Editar Gasto</Header>
      <View className="bg-white/40 rounded-lg pt-2 px-3 w-3/4 flex flex-col items-center text-left gap-3">
        <Text className="w-full px-2">Descripción</Text>
        <TextInput
          onChangeText={setDescription}
          value={newDescription}
          className="px-2 w-[92%] border-2 bg-white"
        />
        <Text className="w-full px-2">Costo</Text>
        <TextInput
          onChangeText={setCost}
          value={newCost as string}
          keyboardType="numeric"
          className="px-2 w-[92%] border-2 bg-white"
        />
        <Pressable
          onPress={handlePress}
          className="bg-blue-200 rounded-lg py-1 w-16 flex items-center justify-center"
        >
          <Text>{isLoading ? <ActivityIndicator /> : "Guardar"}</Text>
        </Pressable>
        <Text className="text-red-900">{String(error)}</Text>
      </View>
    </PageContainer>
  );
}
