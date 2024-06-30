import React from 'react';
import {StyleSheet, View} from 'react-native';

const ShouldRender = ({shouldRender = true, children}) => {
  return <View style={styles.container({shouldRender})}>{children}</View>;
};

const styles = StyleSheet.create({
  container: ({shouldRender}) => ({
    display: shouldRender ? 'flex' : 'none',
  }),
});

export default ShouldRender;
