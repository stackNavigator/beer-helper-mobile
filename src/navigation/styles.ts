import { StyleSheet } from 'react-native';

import { Colors, getSize } from '../constants';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.backgroundColor,
    shadowColor: 'transparent',
    elevation: 0,
  },
  headerTitle: {
    color: Colors.mainColor,
    fontWeight: 'bold',
    fontSize: getSize(24),
  },
  headerBack: {
    color: Colors.mainColor,
  },
});
