import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PromptEditScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Prompt Edit Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PromptEditScreen;