import AntIcon from "@expo/vector-icons/AntDesign";
import EntypoIcon from "@expo/vector-icons/Entypo";
import EvilIcon from "@expo/vector-icons/EvilIcons";
import FeatherIcon from "@expo/vector-icons/Feather";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import FontAwesome5Icon from "@expo/vector-icons/FontAwesome5";
import FontAwesome6Icon from "@expo/vector-icons/FontAwesome6";
import FontistoIcon from "@expo/vector-icons/Fontisto";
import FoundationIcon from "@expo/vector-icons/Foundation";
import IoniconsIcon from "@expo/vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIconsIcon from "@expo/vector-icons/MaterialIcons";
import OcticonsIcon from "@expo/vector-icons/Octicons";
import SimpleLineIconsIcon from "@expo/vector-icons/SimpleLineIcons";
import ZocialIcon from "@expo/vector-icons/Zocial";
import React from "react";
import colors from "../../config/colors";

const AntIcons = ({
  style,
  size,
  name,
  color = colors.black,
  onPress,
  ...props
}) => {
  return (
    <AntIcon
      style={style}
      size={size}
      name={name}
      onPress={onPress}
      color={color}
      {...props}
    />
  );
};
const EntypoIcons = ({
  style,
  size,
  name,
  color = colors.black,
  onPress,
  ...props
}) => {
  return (
    <EntypoIcon
      style={style}
      size={size}
      name={name}
      onPress={onPress}
      color={color}
      {...props}
    />
  );
};
const EvilIcons = ({
  style,
  size,
  name,
  color = colors.black,
  onPress,
  ...props
}) => {
  return (
    <EvilIcon
      style={style}
      size={size}
      name={name}
      onPress={onPress}
      color={color}
      {...props}
    />
  );
};
const FeatherIcons = ({
  style,
  size,
  name,
  color = colors.black,
  onPress,
  ...props
}) => {
  return (
    <FeatherIcon
      style={style}
      size={size}
      name={name}
      onPress={onPress}
      color={color}
      {...props}
    />
  );
};
const FontAwesomeIcons = ({
  style,
  size,
  name,
  color = colors.black,
  onPress,
  ...props
}) => {
  return (
    <FontAwesomeIcon
      style={style}
      size={size}
      name={name}
      onPress={onPress}
      color={color}
      {...props}
    />
  );
};
const FontAwesome5Icons = ({
  style,
  size,
  name,
  color = colors.black,
  onPress,
  ...props
}) => {
  return (
    <FontAwesome5Icon
      style={style}
      size={size}
      name={name}
      onPress={onPress}
      color={color}
      {...props}
    />
  );
};
const FontAwesome6Icons = ({
  style,
  size,
  name,
  color = colors.black,
  onPress,
  ...props
}) => {
  return (
    <FontAwesome6Icon
      style={style}
      size={size}
      name={name}
      onPress={onPress}
      color={color}
      {...props}
    />
  );
};
const FontistoIcons = ({
  style,
  size,
  name,
  color = colors.black,
  onPress,
  ...props
}) => {
  return (
    <FontistoIcon
      style={style}
      size={size}
      name={name}
      onPress={onPress}
      color={color}
      {...props}
    />
  );
};
const FoundationIcons = ({
  style,
  size,
  name,
  color = colors.black,
  onPress,
  ...props
}) => {
  return (
    <FoundationIcon
      style={style}
      size={size}
      name={name}
      onPress={onPress}
      color={color}
      {...props}
    />
  );
};
const IoniconsIcons = ({
  style,
  size,
  name,
  color = colors.black,
  onPress,
  ...props
}) => {
  return (
    <IoniconsIcon
      style={style}
      size={size}
      name={name}
      onPress={onPress}
      color={color}
      {...props}
    />
  );
};
const MaterialCommunityIconsIcons = ({
  size,
  name,
  color = colors.black,
  onPress,
  style,
  ...props
}) => {
  return (
    <MaterialCommunityIconsIcon
      style={style}
      size={size}
      name={name}
      onPress={onPress}
      color={color}
      {...props}
    />
  );
};
const MaterialIconsIcons = ({
  style,
  size,
  name,
  color = colors.black,
  onPress,
  ...props
}) => {
  return (
    <MaterialIconsIcon
      style={style}
      size={size}
      name={name}
      onPress={onPress}
      color={color}
      {...props}
    />
  );
};
const OcticonsIcons = ({
  style,
  size,
  name,
  color = colors.black,
  onPress,
  ...props
}) => {
  return (
    <OcticonsIcon
      style={style}
      size={size}
      name={name}
      onPress={onPress}
      color={color}
      {...props}
    />
  );
};
const SimpleLineIconsIcons = ({
  style,
  size,
  name,
  color = colors.black,
  onPress,
  ...props
}) => {
  return (
    <SimpleLineIconsIcon
      style={style}
      size={size}
      name={name}
      onPress={onPress}
      color={color}
      {...props}
    />
  );
};
const ZocialIcons = ({
  style,
  size,
  name,
  color = colors.black,
  onPress,
  ...props
}) => {
  return (
    <ZocialIcon
      style={style}
      size={size}
      name={name}
      onPress={onPress}
      color={color}
      {...props}
    />
  );
};

const VectorIcons = {
  AntIcons,
  EntypoIcons,
  EvilIcons,
  FeatherIcons,
  FontAwesome5Icons,
  FontAwesome6Icons,
  FontistoIcons,
  FoundationIcons,
  IoniconsIcons,
  MaterialCommunityIconsIcons,
  MaterialIconsIcons,
  OcticonsIcons,
  SimpleLineIconsIcons,
  ZocialIcons,
  FontAwesomeIcons,
};

export default VectorIcons;
