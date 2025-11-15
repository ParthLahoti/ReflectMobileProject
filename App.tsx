// App.tsx

import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { PromptProvider } from './src/context/PromptContext'; // <-- 1. IMPORT

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <PromptProvider> {/* <-- 2. WRAP YOUR APP */}
        <AppNavigator />
      </PromptProvider> {/* <-- 3. WRAP YOUR APP */}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});