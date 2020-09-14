import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const DEFAULT_WIDTH = 375;

export const Colors = {
  backgroundColor: '#000',
  mainColor: 'yellow',
};

export const getSize = size => size / DEFAULT_WIDTH * width;