import { FC } from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { RootStackParamList, RouteKeys } from "@/navigation/configuration";

import NodesScreen from "@/screens/nodes";
import PoolsScreen from "@/screens/pools";
import VaultsScreen from "@/screens/vaults";
import Styles from "@/screens/layout/styles";

type TabParamList = {
  [RouteKeys.NODES]: NavigatorScreenParams<RootStackParamList>;
  [RouteKeys.POOLS]: NavigatorScreenParams<RootStackParamList>;
  [RouteKeys.VAULTS]: NavigatorScreenParams<RootStackParamList>;
};

const Tab = createBottomTabNavigator<TabParamList>();

const Component: FC = () => (
  <Tab.Navigator
    screenOptions={{
      header: () => (
        <View style={Styles.headerContainer}>
          <View>
            <Text style={Styles.headerChain}>Thorchain</Text>
            <Text style={Styles.headerDesc}>Live TC Data</Text>
          </View>
          <Text style={Styles.headerSignature}>Powered by Vultisig</Text>
        </View>
      ),
      tabBarStyle: Styles.tabBar,
    }}
    id={undefined}
  >
    <Tab.Screen
      name={RouteKeys.POOLS}
      component={PoolsScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="cash-outline" color={color} size={24} />
        ),
      }}
    />
    <Tab.Screen
      name={RouteKeys.NODES}
      component={NodesScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="git-network-outline" color={color} size={24} />
        ),
      }}
    />
    <Tab.Screen
      name={RouteKeys.VAULTS}
      component={VaultsScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="wallet" color={color} size={24} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default Component;
