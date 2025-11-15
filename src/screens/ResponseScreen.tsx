// src/screens/ResponseScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native'; // <-- 1. Import RouteProp

// 2. Define the types for our navigation parameters
type RootStackParamList = {
  Response: { generatedImages: string[] };
};

type ResponseScreenRouteProp = RouteProp<RootStackParamList, 'Response'>;

type ResponseScreenProps = {
  navigation: StackNavigationProp<any>;
  route: ResponseScreenRouteProp; // <-- 3. Add the route prop
};

const ResponseScreen = ({ navigation, route }: ResponseScreenProps) => {
  // 4. Get the real images from the route parameters
  const { generatedImages } = route.params;

  const handleImagePress = (imageUrl: string) => {
    // 5. Pass the specific image a user taps to the Reflect screen
    navigation.navigate('Reflect', { selectedImage: imageUrl });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>A safe space for emotions</Text>

      <View style={styles.gridContainer}>
        {/* 6. Map over the REAL generatedImages array */}
        {generatedImages.map((imageUrl, index) => (
          <TouchableOpacity
            key={index}
            style={styles.imageWrapper}
            onPress={() => handleImagePress(imageUrl)} // <-- Pass the URL
          >
            {/* 7. The `uri` is now our base64 data string */}
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.selectText}>Select an image</Text>
    </View>
  );
};

// ... styles are the same as Week 5 ...
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  imageWrapper: {
    width: '48%',
    height: 180,
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