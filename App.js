/**
 * External dependencies
 */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

/**
 * Internal dependencies
 */
import BottomTabs from './app/bottom-layout/index';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
