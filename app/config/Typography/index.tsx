import { useFonts } from "expo-font";
import React from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import fonts from "../../../assets/fonts/index";
import colors from "../colors";
import styles from "./styles";

interface CommonTextProps extends TextProps {
  children: React.ReactNode;
  color?: string;
  fontSize?: number;
  fontWeight?: string;
  fontFamily?: string;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
  lineHeight?: number;
  numberOfLines?: number;
  maxWidth?: string | number;
}

const Typography = {
  CommonText: ({
    children,
    color = colors.primaryTextColor,
    fontSize = 16,
    fontWeight = "400",
    fontFamily = fonts.REGULAR,
    style,
    onPress,
    lineHeight,
    numberOfLines,
    maxWidth = "auto",
    ...props
  }: CommonTextProps) => {
    const [] = useFonts({
      [fonts.REGULAR]: require("../../../assets/fonts/SF Pro Display Regular.ttf"),
      Space: require("../../../assets/fonts/SpaceMono-Regular.ttf"),
    });

    return (
      <Text
        onPress={onPress}
        numberOfLines={numberOfLines}
        {...props}
        style={[
          styles.commonText({
            color,
            fontSize,
            fontWeight,
            fontFamily,
            lineHeight,
            maxWidth,
          }),
          style,
        ]}
      >
        {children}
      </Text>
    );
  },
};

export default Typography;
