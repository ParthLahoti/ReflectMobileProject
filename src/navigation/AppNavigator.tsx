import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import all your screens
import ConceptsScreen from '../screens/ConceptsScreen';
import PromptScreen from '../screens/PromptScreen';
import PromptEditScreen from '../screens/PromptEditScreen';
import ResponseScreen from '../screens/ResponseScreen';
import ReflectScreen from '../screens/ReflectScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Concepts">
        <Stack.Screen name="Concepts" component={ConceptsScreen} />
        <Stack.Screen name="Prompt" component={PromptScreen} />
        <Stack.Screen name="PromptEdit" component={PromptEditScreen} />
        <Stack.Screen name="Response" component={ResponseScreen} />
        <Stack.Screen name="Reflect" component={ReflectScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;