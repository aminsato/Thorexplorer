import { FC, useEffect, useState } from "react";
import { Text, View, Pressable } from "react-native";
import CountryFlag from "react-native-country-flag";

import { Node } from "@/utils/interfaces";
import api from "@/utils/api";

import Styles from "@/components/node-item/styles";

interface ComponentProps {
  data: Node;
  runePriceUsd: number;
}

interface InitialState {
  countryCode: string;
}

const Component: FC<ComponentProps> = ({ data, runePriceUsd }) => {
  const initialState: InitialState = { countryCode: "Unknown" };
  const [state, setState] = useState(initialState);
  const { countryCode } = state;

  const componentDidUpdate = () => {
    api.getCountryByIp(data.ipAddress).then((countryCode) => {
      setState((prevState) => ({ ...prevState, countryCode }));
    });
  };

  useEffect(componentDidUpdate, [data.ipAddress]);

  return (
    <Pressable
      style={({ pressed }) => [Styles.container, pressed && Styles.pressedItem]}
    >
      <View style={Styles.leftContainer}>
        <View style={Styles.imageContainer}>
          {countryCode ? (
            <CountryFlag isoCode={countryCode} size={25} />
          ) : (
            <CountryFlag isoCode={"us"} size={25} />
          )}
        </View>

        <View style={Styles.titleContainer}>
          <Text style={Styles.title}>{data.nodeAddress}</Text>
          <View style={Styles.symbolContainer}>
            <View style={Styles.rankContainer}>
              <Text style={Styles.rank}>Status: {data.status}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={Styles.rightContainer}>
        <Text style={Styles.currentPrice}>
          {`$${(data.totalBond * runePriceUsd * 1e-8)?.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
        </Text>
        <View style={Styles.priceChangeContainer}></View>
        <Text style={Styles.marketCap}>IP {data.ipAddress}</Text>
      </View>
    </Pressable>
  );
};

export default Component;
