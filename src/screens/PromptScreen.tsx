// src/screens/PromptScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the component's props
type PromptScreenProps = {
  navigation: StackNavigationProp<any>;
};

const PromptScreen = ({ navigation }: PromptScreenProps) => {

  const handlePress = () => {
    navigation.navigate('PromptEdit');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>A safe space for emotions</Text>

      <Card>
        <Text style={styles.promptText}>Design a safe container where</Text>

        {/* We will build the real dropdown in the next step */}
        <View style={styles.dropdownPlaceholder}>
          <Text style={styles.dropdownText}>Pick an Emotion</Text>
        </View>

        <Text style={styles.promptText}>can rest without judgment.</Text>
      </Card>

      {/* We will build the real dropdown in the next step */}
      <View style={styles.dropdownPlaceholder}>
        <Text style={styles.dropdownText}>Pick a Style</Text>
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton title="Next" onPress={handlePress} />
      </View>
    </View>
  );
};

// This is the styling for the screen and components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#333',
  },
  promptText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 15,
    color: '#555',
  },
  dropdownPlaceholder: {
    height: 50,
    borderColor: '#007AFF',
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  dropdownText: {
    color: '#777',
  },
  buttonContainer: {
    flex: 1, // This makes the container take remaining space
    justifyContent: 'flex-end', // This pushes the button to the bottom
    marginBottom: 20,
  },
});

export default PromptScreen;