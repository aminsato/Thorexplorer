import React, { FC } from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import { RootStackParamList, RouteKeys } from "@/navigation/configuration";
import Styles from "@/screens/details/styles";

interface ComponentProps {
  navigation: StackNavigationProp<RootStackParamList, RouteKeys.DETAILS>;
  route: RouteProp<RootStackParamList, RouteKeys.DETAILS>;
}

const Component: FC<ComponentProps> = ({ navigation, route }) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Details Screen</Text>
      <Text style={Styles.text}>ID: {route?.params?.id}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate(RouteKeys.LAYOUT)}
      />
    </View>
  );
};

export default Component;
