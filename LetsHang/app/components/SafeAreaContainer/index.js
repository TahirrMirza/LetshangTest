import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';

const SafeAreaContainer = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

export default SafeAreaContainer;
