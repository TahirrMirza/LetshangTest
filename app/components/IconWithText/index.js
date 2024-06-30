import colors from "@/app/config/colors";
import React from "react";
import { View } from "react-native";
import Typography from "../../config/Typography/index";
import AlignmentHelpers from "../AlignmentHelpers/index";
import styles from "./styles";

const IconWithText = ({
  leftIcon,
  title = "",
  description = "",
  titleColor = colors.primaryTextColor,
  descriptionColor = colors.primaryGrey,
  titleFontSize = 16,
  descriptionFontSize = 12,
  titleFontWeight = "500",
  descriptionFontWeight = "500",
}) => {
  return (
    <AlignmentHelpers.RowAligner style={styles.container}>
      {leftIcon && <View style={styles.leftIconStyles}>{leftIcon}</View>}
      <View style={styles.secContainer}>
        {title && (
          <Typography.CommonText
            color={titleColor}
            fontWeight={titleFontWeight}
            fontSize={titleFontSize}
          >
            {title}
          </Typography.CommonText>
        )}
        {description && (
          <Typography.CommonText
            color={descriptionColor}
            fontWeight={descriptionFontWeight}
            fontSize={descriptionFontSize}
          >
            {description}
          </Typography.CommonText>
        )}
      </View>
    </AlignmentHelpers.RowAligner>
  );
};

export default IconWithText;
