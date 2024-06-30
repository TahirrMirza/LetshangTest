import colors from "@/app/config/colors";
import React from "react";
import { Pressable } from "react-native";
import Typography from "../../config/Typography/index";
import VectorIcons from "../VectorIcons";
import styles from "./styles";

const Buttons = {
  Primary: ({
    text = "Next question",
    width = "100%",
    backgroundColor = colors.primary,
    textColor = colors.white,
    onPress,
  }) => (
    <Pressable
      onPress={onPress}
      style={styles.primaryButton({
        width,
        backgroundColor,
      })}
    >
      <Typography.CommonText fontSize={16} fontWeight="600" color={textColor}>
        {text}
      </Typography.CommonText>
    </Pressable>
  ),
  Option: ({
    text = "Next question",
    width = "100%",
    backgroundColor = colors.white + "35",
    textColor = colors.primary,
    fontSize = 20,
    fontWeight = "600",
    onPress,
    isSelected = true,
  }) => (
    <Pressable
      onPress={onPress}
      style={styles.optionButton({
        width,
        backgroundColor,
      })}
    >
      <Typography.CommonText
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={textColor}
      >
        {text}
      </Typography.CommonText>
      {isSelected && (
        <VectorIcons.IoniconsIcons
          size={30}
          color={colors.primaryGradient}
          style={styles.checkIcon}
          name="checkmark-circle"
        />
      )}
    </Pressable>
  ),
};

export default Buttons;
