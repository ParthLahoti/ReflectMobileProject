import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton'; // Import our button

const ConceptsScreen = ({ navigation }) => {

  const handlePress = () => {
    // This tells the navigator to go to the 'Prompt' screen
    navigation.navigate('Prompt');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get started by selecting from the below concepts.</Text>

      {/* Use the button component */}
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