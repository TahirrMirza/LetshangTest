import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
  container: ({ shouldRender, padding }) => ({
    flex: 1,
    backgroundColor: colors.transparent,
    padding: "8%",
    display: shouldRender ? "flex" : "none",
  }),
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
