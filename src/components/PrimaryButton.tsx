// src/components/PrimaryButton.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Define the types for our component's props
interface PrimaryButtonProps {
  title: string;
  onPress: () => void; // This means "a function that takes no arguments and returns nothing"
}

const PrimaryButton = ({ title, onPress }: PrimaryButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PrimaryButton;