import {
  Text,
  View,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import PageContainer from "../components/PageContainer";
import Header from "../components/Header";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useNavigation } from "expo-router";

export default function Page() {
  const saveExpense = useMutation(api.expenses.saveExpense);
  const [description, setDescription] = useState<string>("");
  const [cost, setCost] = useState<number | string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>("");
  const navigator = useNavigation();

  const handlePress = async () => {
    setIsLoading(true);
    try {
      await saveExpense({ cost: Number(cost), description });
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      navigator.goBack();
    }
  };

  return (
    <PageContainer height="h-screen">
      <Header>Agregar un gasto</Header>
      <View className="bg-white/40 rounded-lg p-2 w-3/4 pb-4 flex flex-col items-center gap-3">
        <Text>Descripción</Text>
        <TextInput
          onChangeText={setDescription}
          value={description}
          className="px-2 w-[95%] border-2 bg-white"
        />
        <Text>Costo</Text>
        <TextInput
          onChangeText={setCost}
          value={cost as string}
          keyboardType="numeric"
          className="px-2 w-[95%] border-2 bg-white"
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
