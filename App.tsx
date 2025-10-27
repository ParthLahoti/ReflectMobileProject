// App.tsx
import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { AppProvider } from './src/context/AppContext'; // <-- 1. Import

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <AppProvider> {/* <-- 2. Wrap your Navigator */}
        <AppNavigator />
      </AppProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});