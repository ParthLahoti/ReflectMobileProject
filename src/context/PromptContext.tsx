// src/context/PromptContext.tsx

import React, {
  createContext,
  useContext,
  useState,
  ReactNode
} from 'react';

// Define what data will be in our context
interface PromptContextData {
  selectedEmotion: string | null;
  setSelectedEmotion: (emotion: string) => void;
  selectedStyle: string | null;
  setSelectedStyle: (style: string) => void;
}

// Create the context
const PromptContext = createContext<PromptContextData | undefined>(undefined);

// Create the "Provider" component
export const PromptProvider = ({ children }: { children: ReactNode }) => {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  return (
    <PromptContext.Provider
      value={{
        selectedEmotion,
        setSelectedEmotion,
        selectedStyle,
        setSelectedStyle,
      }}>
      {children}
    </PromptContext.Provider>
  );
};

// Create a "hook" to easily use the context
export const usePrompt = () => {
  const context = useContext(PromptContext);
  if (context === undefined) {
    throw new Error('usePrompt must be used within a PromptProvider');
  }
  return context;
};