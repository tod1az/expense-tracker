import { ConvexProvider, ConvexReactClient } from "convex/react";
import Main from "./components/Main";
import { CONVEX_URL } from "@env";
import "react-native-get-random-values";
import { View } from "react-native";

const convex = new ConvexReactClient(CONVEX_URL, {
  unsavedChangesWarning: false,
});

export default function App() {
  return (
    <ConvexProvider client={convex}>
      <View className="flex flex-col bg-gray-600 h-screen justify-start items-center text-4xl mt-14">
        <Main />
      </View>
    </ConvexProvider>
  );
}
