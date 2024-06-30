import colors from "@/app/config/colors";
import React from "react";
import { StyleProp, TextInput, TextInputProps, TextStyle } from "react-native";
import styles from "./styles";

interface InputFieldProps extends TextInputProps {
  placeholder?: string;
  height?: number | string;
  style: StyleProp<TextStyle>;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  height = "auto",
  style,
  ...props
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={colors.primary + "30"}
      style={[styles.input({ height }), style]}
      {...props}
    />
  );
};

export default InputField;
