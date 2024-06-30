import FastImage from "expo-image";
import React, { useCallback, useEffect, useState } from "react";
import Images from "../../../assets/images";
import styles from "./styles";

const isURL = (str) => {
  const pattern = new RegExp("^(https?:\\/\\/|file:\\/\\/\\/)", "i");
  return pattern.test(str);
};

const ImageCache = ({
  children,
  style,
  source,
  loaderSize = 40,
  resizeMode,
}) => {
  const errorImage = Images.PLACEHOLDER;
  const [loading, setLoading] = useState(false);
  const [uri, setUri] = useState("");

  useEffect(() => {
    if (source) {
      if (isURL(source)) {
        setUri({ uri: source });
      } else {
        setUri(source);
      }
    } else {
      setUri(errorImage);
    }
  }, [errorImage, source]);

  const _onLoadStart = () => {
    setLoading(true);
  };
  const _onLoadEnd = () => {
    setLoading(false);
  };

  const _onError = useCallback(() => {
    setUri(errorImage);
  }, [errorImage]);

  return (
    <FastImage
      style={[styles.image, style]}
      onLoadStart={_onLoadStart}
      onLoadEnd={_onLoadEnd}
      onError={_onError}
      source={uri}
      resizeMode={resizeMode}
    >
      {/* <Loader style={styles.loader} size={loaderSize} loading={loading} /> */}
      {children}
    </FastImage>
  );
};

export default ImageCache;
