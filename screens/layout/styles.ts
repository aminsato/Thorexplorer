import { StyleSheet } from "react-native";

import { blueDark, gray01, gray06 } from "@/styles";

const Styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: blueDark,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 8,
    paddingHorizontal: 12,
    paddingTop: 4,
  },
  headerChain: {
    color: gray01,
    fontSize: 28,
    fontWeight: 700,
  },
  headerDesc: {
    color: gray06,
    fontSize: 16,
    fontWeight: 500,
  },
  headerSignature: {
    color: gray01,
  },
  tabBar: {
    backgroundColor: blueDark,
    borderTopWidth: 0,
  },
});

export default Styles;
