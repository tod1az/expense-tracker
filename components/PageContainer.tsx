import { View } from "react-native";
import { ReactNode } from "react";

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <View className="bg-gray-600 h-screen mt-12 flex flex-col items-center">
      {children}
    </View>
  );
}
