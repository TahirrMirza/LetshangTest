import React from "react";
import { ImageBackground } from "react-native";
import Images from "../../../assets/images";
import styles from "./styles";

const BackgroundImage = ({ children, source = Images.PLACEHOLDER }) => {
  return (
    <ImageBackground source={source} style={styles.container}>
      {children}
    </ImageBackground>
  );
};

export default BackgroundImage;
