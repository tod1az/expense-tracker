import { ConvexProvider, ConvexReactClient } from "convex/react";
import { CircleUserRound } from "lucide-react-native";
import { CONVEX_URL } from "@env";
import "react-native-get-random-values";
import { Stack } from "expo-router/stack";

import { Text } from "react-native";
import { useNavigation } from "expo-router";

const convex = new ConvexReactClient(CONVEX_URL, {
  unsavedChangesWarning: false,
});

export default function Layout() {
  const navigator = useNavigation();
  return (
    <ConvexProvider client={convex}>
      <Stack
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: "Expense Tracker",
          headerRight: () => (
            <Text>
              <CircleUserRound color={"black"} />
            </Text>
          ),
        }}
      />
    </ConvexProvider>
  );
}
