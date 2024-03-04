import { Text, View, ActivityIndicator, Pressable } from "react-native";
import { api } from "../convex/_generated/api";
import { useQuery } from "convex/react";
import Separator from "./Separator";
import { getTotalExpenses } from "../lib/helpers";
import ExpensesList from "./ExpensesList";
import { Link } from "expo-router";
import PageContainer from "./PageContainer";
import Header from "./Header";

export default function Main() {
  const expenses = useQuery(api.expenses.getExpenses);
  return (
    <PageContainer>
      <Header>Gastos</Header>
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
      <View className="bg-white/80 w-10 h-10  flex items-center mt-6 rounded-full justify-center">
        <Link href={"/post"}>
          <Text>+</Text>
        </Link>
      </View>
    </PageContainer>
  );
}
