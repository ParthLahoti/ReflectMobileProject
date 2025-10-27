// src/context/AppContext.tsx
import React, { createContext, useState, useContext } from 'react';

// 1. Define what our shared data will look like
interface IAppContext {
  emotion: string;
  setEmotion: (emotion: string) => void;
  style: string;
  setStyle: (style: string) => void;
  prompt: string;
  setPrompt: (prompt: string) => void;
}

// 2. Create the context with default values
const AppContext = createContext<IAppContext>({
  emotion: '',
  setEmotion: () => {},
  style: '',
  setStyle: () => {},
  prompt: '',
  setPrompt: () => {},
});

// 3. Create the "Provider" component that will wrap our app
export const AppProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [emotion, setEmotion] = useState('');
  const [style, setStyle] = useState('');
  const [prompt, setPrompt] = useState('');

  return (
    <AppContext.Provider
      value={{
        emotion,
        setEmotion,
        style,
        setStyle,
        prompt,
        setPrompt,
      }}>
      {children}
    </AppContext.Provider>
  );
};

// 4. Create a "hook" to easily use this context in other files
export const useAppContext = () => {
  return useContext(AppContext);
};