import { Text } from "react-native";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <Text className="font-bold  text-2xl mb-10 text-white text-center pt-6">
      {children}
    </Text>
  );
}
