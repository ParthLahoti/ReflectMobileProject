import React from 'react';
// This is a small but important wrapper for gesture handling
import 'react-native-gesture-handler'; 
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return <AppNavigator />;
}