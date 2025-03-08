import React from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  RootStackParamList,
  RouteKeys,
  configuration,
} from "@/navigation/configuration";
import { blueBase, cyanBase } from "@/styles";

import LayoutScreen from "@/screens/layout";
import NotFoundScreen from "@/screens/not-found";

const Stack = createStackNavigator<RootStackParamList>();

const CustomTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: cyanBase,
    background: blueBase,
  },
};

const StackNavigator = () => {
  return (
    <NavigationContainer linking={configuration} theme={CustomTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} id={undefined}>
        <Stack.Screen name={RouteKeys.LAYOUT} component={LayoutScreen} />
        <Stack.Screen name={RouteKeys.NOT_FOUND} component={NotFoundScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
