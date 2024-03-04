import { ConvexProvider, ConvexReactClient } from "convex/react";
import { CONVEX_URL } from "@env";
import "react-native-get-random-values";
import { Slot } from "expo-router";

const convex = new ConvexReactClient(CONVEX_URL, {
  unsavedChangesWarning: false,
});

export default function Layout() {
  return (
    <ConvexProvider client={convex}>
      <Slot />
    </ConvexProvider>
  );
}
