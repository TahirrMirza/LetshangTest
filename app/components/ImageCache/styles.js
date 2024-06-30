import {Dimensions, StyleSheet} from 'react-native';

const height = Dimensions.get('window').height;

export default StyleSheet.create({
  image: {
    height: height / 3.7,
    width: '100%',
  },
  loader: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
