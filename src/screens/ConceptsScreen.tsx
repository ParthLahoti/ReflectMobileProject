// src/screens/ConceptsScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { StackNavigationProp } from '@react-navigation/stack'; // Import the type

// This tells TypeScript what our navigation prop looks like
type ConceptsScreenProps = {
  navigation: StackNavigationProp<any>; // 'any' is the simplest way to get started
};

const ConceptsScreen = ({ navigation }: ConceptsScreenProps) => {
  const handlePress = () => {
    navigation.navigate('Prompt');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get started by selecting from the below concepts.</Text>
      <PrimaryButton title="Go to Prompt Screen" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default ConceptsScreen;