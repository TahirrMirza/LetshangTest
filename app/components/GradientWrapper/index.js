import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import colors from "../../config/colors";
import styles from "./styles";

const GradientWrapper = ({ children, style }) => {
  return (
    <LinearGradient
      colors={[colors.primaryGradient + "60", colors.white]}
      start={{ x: 0.0, y: 0.5 }}
      end={{ x: 1.0, y: 0.5 }}
      style={[styles.container, style]}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientWrapper;
