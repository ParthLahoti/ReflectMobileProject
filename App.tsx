// App.tsx

import 'react-native-gesture-handler'; // This MUST be the first line
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // <-- 1. Import this
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    // 2. Wrap your AppNavigator in this component
    <GestureHandlerRootView style={styles.container}>
      <AppNavigator />
    </GestureHandlerRootView>
  );
}

// 3. Add this stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});