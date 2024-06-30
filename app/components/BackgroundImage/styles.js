import { Dimensions, StyleSheet } from "react-native";
const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    height: screenHeight / 2,
    width: screenWidth,
  },
});
