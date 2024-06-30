import React from 'react';
import {StyleSheet, View} from 'react-native';

const Seperator = ({seperate = '1%', seperateHorizontal = '0%'}) => {
  return <View style={styles.container({seperate, seperateHorizontal})} />;
};

const styles = StyleSheet.create({
  container: ({seperate, seperateHorizontal}) => ({
    marginVertical: seperate,
    marginHorizontal: seperateHorizontal,
  }),
});

export default Seperator;
