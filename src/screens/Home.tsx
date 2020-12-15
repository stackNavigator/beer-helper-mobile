import React, { useCallback } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Colors, getSize } from '../constants'

export const Home = () => {
  const { navigate } = useNavigation();
  const handleWaterClick = useCallback(() => navigate('AdditionalWater'));
  const handleBitternessClick = useCallback(() => navigate('BeerBitterness'));

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleWaterClick} style={styles.textContainer}>
        <Text style={styles.textCaption}>Additional Water</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity onPress={handleBitternessClick} style={styles.textContainer}>
        <Text style={styles.textCaption}>Beer Bitterness</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  divider: {
    borderBottomColor: Colors.mainColor,
    borderBottomWidth: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCaption: {
    color: Colors.mainColor,
    fontSize: getSize(24),
  }
});
