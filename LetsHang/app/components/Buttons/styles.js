import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {},
  primaryButton: ({ backgroundColor, width }) => ({
    borderRadius: 30,
    backgroundColor,
    width,
    padding: 15,
    alignItems: "center",
  }),
  optionButton: ({ backgroundColor, width }) => ({
    borderRadius: 5,
    backgroundColor,
    width,
    padding: 30,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginVertical: 10,
  }),
  checkIcon: {
    position: "absolute",
    alignSelf: "center",
    right: "8%",
  },
});
