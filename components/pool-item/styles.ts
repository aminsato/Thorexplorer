import { StyleSheet } from "react-native";

import { blueDark, blueLight } from "@/styles";

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: blueDark,
    borderColor: blueLight,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  image: {
    height: 40,
    width: 40,
    marginRight: 12,
    borderRadius: 20,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  symbolContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rankContainer: {
    backgroundColor: "rgba(0, 196, 244, 0.1)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
  },
  rank: {
    color: "#00C4F4",
    fontSize: 12,
    fontWeight: "600",
  },
  symbol: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 14,
    fontWeight: "500",
  },
  rightContainer: {
    alignItems: "flex-end",
  },
  currentPrice: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },
  priceChangeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  caret: {
    marginRight: 4,
  },
  priceChange: {
    fontSize: 14,
    fontWeight: "600",
  },
  marketCap: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 13,
    fontWeight: "500",
  },
  chainImage: {
    width: 15, // Small chain logo
    height: 15,
    position: "absolute",
    bottom: -2, // Slightly below
    right: -2, // Slightly to the right
    borderRadius: 7.5,
    backgroundColor: "white", // Optional white background for better visibility
  },
  imageContainer: {
    position: "relative", // Allows absolute positioning inside
    width: 40,
    height: 40,
    marginRight: 12,
  },
});

export default Styles;
