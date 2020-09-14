import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/Screens/Home';
import AdditionalWater from './src/Screens/AdditionalWater';
import BeerBitterness from './src/Screens/BeerBitterness';
import { getSize, Colors } from './src/Constants';

const { Navigator, Screen } = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Navigator screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: Colors.mainColor,
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerBackTitleStyle: styles.headerBack,
        }}>
          <Screen name="Home" component={Home} />
        <Screen name="Additional Water" component={AdditionalWater} />
        <Screen name="Beer Bitterness" component={BeerBitterness} />
        </Navigator>
      </NavigationContainer>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
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

export default App;
