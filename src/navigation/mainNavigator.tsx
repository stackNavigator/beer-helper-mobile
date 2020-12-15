import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { AdditionalWater } from '../screens/AdditionalWater';
import { BeerBitterness } from '../screens/BeerBitterness';
import { Colors } from '../constants';
import { styles } from './styles';

const { Navigator, Screen } = createStackNavigator();

export const MainNavigator = () => {
  return (
    <Navigator screenOptions={{
      headerBackTitleVisible: false,
      headerTitleAlign: 'center',
      headerTintColor: Colors.mainColor,
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitle,
      headerBackTitleStyle: styles.headerBack,
      ...TransitionPresets.SlideFromRightIOS,
    }}>
      <Screen name="Home" component={Home} />
      <Screen name="AdditionalWater" component={AdditionalWater} />
      <Screen name="BeerBitterness" component={BeerBitterness} />
    </Navigator>
  );
}
