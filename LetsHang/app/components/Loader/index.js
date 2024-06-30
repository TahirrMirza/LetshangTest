import React from "react";
import { ActivityIndicator, View } from "react-native";
import Typography from "../../config/Typography";
import colors from "../../config/colors";
import styles from "./styles";

const Loader = ({
  loading = false,
  color = colors.primary,
  size = "large",
  style,
  text,
  fontSize = 17,
  textColor = colors.black,
}) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator color={color} size={size} animating={loading} />
      {text && (
        <Typography.CommonText fontSize={fontSize} color={textColor}>
          {text}
        </Typography.CommonText>
      )}
    </View>
  );
};

export default Loader;
