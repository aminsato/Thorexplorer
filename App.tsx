import { FC } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AppNavigator from "@/navigation";

const Component: FC = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default Component;
