import { FC, useEffect, useState } from "react";
import { SafeAreaView, FlatList, RefreshControl } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList, RouteKeys } from "@/navigation/configuration";
import { cyanBase } from "@/styles";
import { Pool } from "@/utils/interfaces";
import api from "@/utils/api";

import ListItem from "@/components/pool-item";
import Styles from "@/screens/pools/styles";

interface ComponentProps {
  navigation: StackNavigationProp<RootStackParamList, RouteKeys.POOLS>;
}

interface InitialState {
  data: Pool[];
  loading: boolean;
}

const Component: FC<ComponentProps> = ({}) => {
  const initialState: InitialState = { data: [], loading: false };
  const [state, setState] = useState(initialState);
  const { data, loading } = state;

  const fetchData = () => {
    if (!loading) {
      setState((prevState) => ({ ...prevState, loading: true }));

      api.getPools().then((data) => {
        setState((prevState) => ({ ...prevState, data, loading: false }));
      });
    }
  };

  const componentDidMount = () => {
    fetchData();
  };

  useEffect(componentDidMount, []);

  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem data={item} />}
        contentContainerStyle={Styles.listContainer}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={fetchData}
            tintColor={cyanBase}
            colors={[cyanBase]}
          />
        }
      />
    </SafeAreaView>
  );
};

export default Component;
