import { View, ScrollView } from "react-native";
import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  height?: string;
};

export default function PageContainer({
  children,
  height,
}: PageContainerProps) {
  return (
    <ScrollView>
      <View
        className={`bg-gray-600 flex flex-col items-center pb-4 ${
          height ? height : ""
        }`}
      >
        {children}
      </View>
    </ScrollView>
  );
}
