// src/screens/PromptScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';
import { StackNavigationProp } from '@react-navigation/stack';
import { Dropdown } from 'react-native-element-dropdown'; // <-- 1. IMPORT DROPDOWN
import { usePrompt } from '../context/PromptContext'; // <-- 2. IMPORT CONTEXT HOOK

// Define the component's props
type PromptScreenProps = {
  navigation: StackNavigationProp<any>;
};

// Data for our dropdowns
const emotionData = [
  { label: 'Sadness', value: 'sadness' },
  { label: 'Joy', value: 'joy' },
  { label: 'Anger', value: 'anger' },
  { label: 'Fear', value: 'fear' },
  { label: 'Calm', value: 'calm' },
];

const styleData = [
  { label: 'Watercolor', value: 'watercolor' },
  { label: 'Oil Painting', value: 'oil painting' },
  { label: 'Sketch', value: 'sketch' },
  { label: 'Dreamlike', value: 'dreamlike' },
  { label: 'Abstract', value: 'abstract' },
];

const PromptScreen = ({ navigation }: PromptScreenProps) => {
  // 3. Get state functions from our context
  const { selectedEmotion, setSelectedEmotion, selectedStyle, setSelectedStyle } =
    usePrompt();

  const handlePress = () => {
    navigation.navigate('PromptEdit');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>A safe space for emotions</Text>

      <Card>
        <Text style={styles.promptText}>Design a safe container where</Text>

        {/* 4. USE THE REAL DROPDOWN */}
        <Dropdown
          style={styles.dropdown}
          placeholder="Pick an Emotion"
          data={emotionData}
          labelField="label"
          valueField="value"
          value={selectedEmotion}
          onChange={(item) => {
            setSelectedEmotion(item.value); // 5. Update global state
          }}
        />

        <Text style={styles.promptText}>can rest without judgment.</Text>
      </Card>

      {/* 4. USE THE REAL DROPDOWN */}
      <Dropdown
        style={styles.dropdown}
        placeholder="Pick a Style"
        data={styleData}
        labelField="label"
        valueField="value"
        value={selectedStyle}
        onChange={(item) => {
          setSelectedStyle(item.value); // 5. Update global state
        }}
      />

      <View style={styles.buttonContainer}>
        <PrimaryButton title="Next" onPress={handlePress} />
      </View>
    </View>
  );
};

// 6. Add/Update styling
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
  // This style is for the new dropdown
  dropdown: {
    height: 50,
    borderColor: '#007AFF',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});

export default PromptScreen;