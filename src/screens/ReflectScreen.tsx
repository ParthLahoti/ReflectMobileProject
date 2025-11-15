// src/screens/ReflectScreen.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define the types for our navigation parameters
type RootStackParamList = {
  Reflect: { selectedImage: string };
};

type ReflectScreenRouteProp = RouteProp<RootStackParamList, 'Reflect'>;

// Define the component's props
type ReflectScreenProps = {
  navigation: StackNavigationProp<any>; // <-- THIS IS THE PROP THAT WAS MISSING
  route: ReflectScreenRouteProp;
};

// Ensure both 'navigation' and 'route' are passed in
const ReflectScreen = ({ navigation, route }: ReflectScreenProps) => {
  
  // Get the real selected image from the route
  const { selectedImage } = route.params;

  // This function now has access to 'navigation'
  const handleSaveJournal = () => {
    console.log('Journal Saved!');
    navigation.navigate('Concepts'); // This will now work
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: selectedImage }}
          style={styles.image}
        />
        <Text style={styles.imagePrompt}>
          What sticks out to you most about your artwork?
        </Text>
      </View>

      <View style={styles.journalContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="The lion protecting his pride represents an..."
          placeholderTextColor="#999"
          multiline={true}
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveJournal}>
          <Text style={styles.saveButtonText}>→</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
  },
  imagePrompt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
  },
  journalContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    height: '100%',
    textAlignVertical: 'top',
  },
  saveButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ReflectScreen;