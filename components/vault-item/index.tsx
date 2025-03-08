import { FC } from "react";
import { Text, View, Pressable } from "react-native";

import { Vault } from "@/utils/interfaces";

import Styles from "@/components/vault-item/styles";

export interface ComponentProps {
  data: Vault;
}

const Component: FC<ComponentProps> = ({ data }) => {
  return (
    <Pressable
      style={({ pressed }) => [Styles.container, pressed && Styles.pressedItem]}
    >
      <View style={Styles.leftContainer}>
        <View style={Styles.titleContainer}>
          <Text style={Styles.title}>{data.pubKey}</Text>
        </View>
      </View>

      <View style={Styles.rightContainer}>
        <Text style={Styles.currentPrice}>
          {`Bond: $${data.bond?.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
        </Text>
        <View style={Styles.priceChangeContainer}></View>
        <Text style={Styles.marketCap}>
          {`Locked: $${data.locked?.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
        </Text>
      </View>
    </Pressable>
  );
};

export default Component;
