import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

export enum RouteKeys {
  LAYOUT = "Layout",
  NODES = "Nodes",
  NOT_FOUND = "NotFound",
  POOLS = "Pools",
  VAULTS = "Vaults",
  // Example
  DETAILS = "Details",
}

export type RootStackParamList = {
  [RouteKeys.LAYOUT]: undefined;
  [RouteKeys.NODES]: undefined;
  [RouteKeys.NOT_FOUND]: undefined;
  [RouteKeys.POOLS]: undefined;
  [RouteKeys.VAULTS]: undefined;
  // Example
  [RouteKeys.DETAILS]: { id: string };
};

export const configuration: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      [RouteKeys.LAYOUT]: {
        screens: {
          [RouteKeys.NODES]: "nodes",
          [RouteKeys.POOLS]: "pools",
          [RouteKeys.VAULTS]: "vaults",
        },
      },
      [RouteKeys.DETAILS]: "details",
      [RouteKeys.NOT_FOUND]: "*",
    },
  },
};
