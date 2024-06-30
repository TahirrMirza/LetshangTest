import colors from "@/app/config/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {},
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    elevation: 8,
    backgroundColor: colors.white,
  },
});
