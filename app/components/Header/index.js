import Typography from "@/app/config/Typography";
import colors from "@/app/config/colors";
import React from "react";
import AlignmentHelpers from "../AlignmentHelpers/index";
import VectorIcons from "../VectorIcons/index";
import styles from "./styles";

const Header = ({
  title = "",
  onPress,
  textColor = colors.primaryTextColor,
  iconColor = colors.primaryTextColor,
  dotColor = colors.primaryTextColor,
  onPressDots,
}) => {
  return (
    <AlignmentHelpers.RowAligner style={styles.container}>
      <VectorIcons.AntIcons
        color={iconColor}
        onPress={onPress}
        size={25}
        name="left"
      />
      <Typography.CommonText color={textColor} fontWeight="600" fontSize={16}>
        {title}
      </Typography.CommonText>
      <VectorIcons.EntypoIcons
        color={dotColor}
        onPress={onPressDots}
        size={25}
        name="dots-three-horizontal"
      />
    </AlignmentHelpers.RowAligner>
  );
};

export default Header;
