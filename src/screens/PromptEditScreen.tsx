// src/screens/PromptEditScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the component's props
type PromptEditScreenProps = {
  navigation: StackNavigationProp<any>;
};

const PromptEditScreen = ({ navigation }: PromptEditScreenProps) => {

  const handleSubmit = () => {
    // In the future, we'll send the prompt to the AI here.
    // For now, just navigate to the 'Response' screen.
    navigation.navigate('Response');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Adjust prompt as needed.</Text>

      <Card>
        <TextInput
          style={styles.textInput}
          multiline={true} // Allows multiple lines of text
          defaultValue="Design a safe container where sadness can rest without judgment."
        />
      </Card>

      <View style={styles.buttonContainer}>
        <PrimaryButton title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

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
  textInput: {
    fontSize: 18,
    color: '#333',
    minHeight: 150, // Give the text box some height
    textAlignVertical: 'top', // Start text from the top on Android
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});

export default PromptEditScreen;