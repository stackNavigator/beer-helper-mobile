import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { MainNavigator } from './src/navigation/mainNavigator';
import { Colors } from './src/constants';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  }
});

export default App;
