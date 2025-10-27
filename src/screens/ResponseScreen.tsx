// src/screens/ResponseScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the component's props
type ResponseScreenProps = {
  navigation: StackNavigationProp<any>;
};

// A list of fake image URLs, just like our mock API
const FAKE_IMAGES = [
  'https://picsum.photos/seed/1/400',
  'https://picsum.photos/seed/2/400',
  'https://picsum.photos/seed/3/400',
  'https://picsum.photos/seed/4/400',
];

const ResponseScreen = ({ navigation }: ResponseScreenProps) => {

  const handleImagePress = () => {
    // In the future, we'll pass the selected image to the Reflect screen.
    navigation.navigate('Reflect');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>A safe space for emotions</Text>

      <View style={styles.gridContainer}>
        {FAKE_IMAGES.map((imageUrl, index) => (
          <TouchableOpacity
            key={index}
            style={styles.imageWrapper}
            onPress={handleImagePress}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.selectText}>Select an image</Text>
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
  gridContainer: {
    flexDirection: 'row', // Arrange children side-by-side
    flexWrap: 'wrap',     // Allow items to wrap to the next line
    justifyContent: 'space-between', // Add space between items
    marginTop: 20,
  },
  imageWrapper: {
    width: '48%', // Each image takes slightly less than half the width
    height: 180,  // Fixed height for the images
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  selectText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ResponseScreen;