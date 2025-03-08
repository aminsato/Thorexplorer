import { FC } from "react";
import { Text, View, Image, Pressable } from "react-native";

import { Pool } from "@/utils/interfaces";

import Styles from "@/components/pool-item/styles";

const getPoolName = (asset: string): string => {
  asset = asset.includes(".") ? asset.split(".")[1] : asset;
  asset = asset.includes("-") ? asset.split("-")[0] : asset;
  return asset;
};

const getPoolChain = (asset: string): string => {
  return asset.includes(".") ? asset.split(".")[0] : asset;
};

const getPoolLogo = (asset: string): string => {
  const swapKitBaseAddress =
    "https://storage.googleapis.com/token-list-swapkit-dev/images/";
  return swapKitBaseAddress + asset.toLowerCase() + ".png";
};

const getChainLogo = (asset: string): string => {
  const chain = getPoolChain(asset);
  const swapKitBaseAddress =
    "https://storage.googleapis.com/token-list-swapkit-dev/images/";
  return (
    swapKitBaseAddress +
    chain.toLowerCase() +
    "." +
    chain.toLowerCase() +
    ".png"
  );
};

const normalizeMarketCap = (marketCap: number) => {
  if (marketCap > 1e12) {
    return `${(marketCap / 1e12).toFixed(3)} T`;
  }
  if (marketCap > 1e9) {
    return `${(marketCap / 1e9).toFixed(3)} B`;
  }
  if (marketCap > 1e6) {
    return `${(marketCap / 1e6).toFixed(3)} M`;
  }
  if (marketCap > 1e3) {
    return `${(marketCap / 1e3).toFixed(3)} K`;
  }
  return marketCap;
};

interface ComponentProps {
  data: Pool;
}

const Component: FC<ComponentProps> = ({ data }) => {
  return (
    <Pressable
      style={({ pressed }) => [Styles.container, pressed && Styles.pressedItem]}
    >
      <View style={Styles.leftContainer}>
        <View style={Styles.imageContainer}>
          <Image
            source={{ uri: getPoolLogo(data.asset) }}
            style={Styles.image}
          />
          <Image
            source={{ uri: getChainLogo(data.asset) }}
            style={Styles.chainImage}
          />
        </View>

        <View style={Styles.titleContainer}>
          <Text style={Styles.title}>{getPoolName(data.asset)}</Text>
          <View style={Styles.symbolContainer}>
            <View style={Styles.rankContainer}>
              <Text style={Styles.rank}>
                Status: {getPoolChain(data.status)}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={Styles.rightContainer}>
        <Text style={Styles.currentPrice}>{`$${(
          data.assetTorPrice * 1e-8
        )?.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`}</Text>
        <View style={Styles.priceChangeContainer}></View>
        <Text style={Styles.marketCap}>
          {`Depth ${normalizeMarketCap(
            data.assetTorPrice * 1e-8 * (data.balanceAsset * 1e-8) * 2
          )}`}
        </Text>
      </View>
    </Pressable>
  );
};

export default Component;
