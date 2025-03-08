import { StyleSheet } from "react-native";

import { blueSharp, gray01 } from "@/styles";

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: gray01,
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    color: blueSharp,
    fontSize: 14,
  },
});

export default Styles;
