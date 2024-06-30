import React from "react";
import { View } from "react-native";
import styles from "./styles";

const Container = ({ children, style, shouldRender = true }) => {
  return (
    <View style={[styles.container({ shouldRender }), style]}>{children}</View>
  );
};

export default Container;
