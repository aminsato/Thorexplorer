import { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList, RouteKeys } from "@/navigation/configuration";
import Styles from "@/screens/not-found/styles";

interface ComponentProps {
  navigation: StackNavigationProp<RootStackParamList, RouteKeys.NOT_FOUND>;
}

const Component: FC<ComponentProps> = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity
        onPress={() => navigation.replace(RouteKeys.LAYOUT)}
        style={Styles.link}
      >
        <Text style={Styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Component;
