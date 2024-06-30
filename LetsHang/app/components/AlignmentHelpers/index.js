import React from "react";
import { View } from "react-native";
import styles from "./styles";

const RowAligner = ({ children, style, ...props }) => {
  return (
    <View {...props} style={[styles.rowAligner, style]}>
      {children}
    </View>
  );
};

const AlignmentHelpers = { RowAligner };

export default AlignmentHelpers;
