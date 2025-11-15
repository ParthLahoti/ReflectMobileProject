// src/screens/PromptEditScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator, // <-- 1. Import ActivityIndicator
} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';
import { StackNavigationProp } from '@react-navigation/stack';
import { usePrompt } from '../context/PromptContext';
// import { generateImages } from '../services/apiService'; // <-- 2. Commented out unused import

type PromptEditScreenProps = {
  navigation: StackNavigationProp<any>;
};

const PromptEditScreen = ({ navigation }: PromptEditScreenProps) => {
  const { selectedEmotion, selectedStyle } = usePrompt();

  const dynamicPrompt = `Design a safe container where ${
    selectedEmotion || 'your emotion'
  } can rest without judgment. Style: ${selectedStyle || 'default'}.`;

  const [editedPrompt, setEditedPrompt] = useState(dynamicPrompt);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true); // 1. Set loading to true

    // --- DEMO FALLBACK PLAN ---
    console.log('Simulating AI call for prompt:', editedPrompt);

    // 3. Fix for the Promise type
    await new Promise(resolve => setTimeout(() => resolve(undefined), 2000));

    const fakeImages = [
      'https://picsum.photos/seed/1/400',
      'https://picsum.photos/seed/2/400',
      'https://picsum.photos/seed/3/400',
      'https://picsum.photos/seed/4/400',
    ];

    navigation.navigate('Response', { generatedImages: fakeImages });
    setIsLoading(false);
  };

  // 4. THIS IS THE LOGIC FIX:
  // The isLoading check MUST be the component's main return.
  if (isLoading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Generating your images...</Text>
      </View>
    );
  }

  // This is the component's default return when not loading.
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Adjust prompt as needed.</Text>

      <Card>
        <TextInput
          style={styles.textInput}
          multiline={true}
          defaultValue={editedPrompt}
          onChangeText={setEditedPrompt}
        />
      </Card>

      <View style={styles.buttonContainer}>
        <PrimaryButton title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

// 9. Add/Update styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
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
    minHeight: 150,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});

export default PromptEditScreen;