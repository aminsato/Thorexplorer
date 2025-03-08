import { FC, useEffect, useState } from "react";
import { SafeAreaView, FlatList, RefreshControl } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList, RouteKeys } from "@/navigation/configuration";
import { cyanBase } from "@/styles";
import { Node } from "@/utils/interfaces";
import api from "@/utils/api";

import ListItem from "@/components/node-item";
import Styles from "@/screens/nodes/styles";

interface ComponentProps {
  navigation: StackNavigationProp<RootStackParamList, RouteKeys.POOLS>;
}

interface InitialState {
  data: Node[];
  loading: boolean;
  runePriceUsd: number;
}

const Component: FC<ComponentProps> = ({}) => {
  const initialState: InitialState = {
    data: [],
    loading: false,
    runePriceUsd: 0,
  };
  const [state, setState] = useState(initialState);
  const { data, loading, runePriceUsd } = state;

  const fetchData = () => {
    if (!loading) {
      setState((prevState) => ({ ...prevState, loading: true }));

      Promise.all([api.getNodes(), api.getRunePriceUsd()]).then(
        ([data, runePriceUsd]) => {
          setState((prevState) => ({
            ...prevState,
            data,
            loading: false,
            runePriceUsd,
          }));
        }
      );
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
        renderItem={({ item }) => (
          <ListItem data={item} runePriceUsd={runePriceUsd} />
        )}
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
