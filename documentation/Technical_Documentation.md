# Reflect App: Technical Documentation

### 1. Project Overview
This project is a cross-platform (iOS and Android) mobile app for arts and wellness, built using React Native. It allows users to generate AI images from text prompts to facilitate emotional reflection and journaling.

### 2. Technology Stack
* **Framework:** React Native (TypeScript)
* **Navigation:** React Navigation (Stack)
* **State Management:** React Context API (to be implemented)
* **Generative AI:** Stability AI REST API (to be implemented)

### 3. Key APIs Used
* **Stability AI API:**
    * **Endpoint:** `https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image`
    * **Authentication:** `Authorization: Bearer YOUR_API_KEY`
    * **Purpose:** Sent text prompts to generate 1-4 images.

### 4. Setup Instructions
1.  Clone the repository: `git clone https://github.com/ParthLahoti/ReflectMobileProject.git`
2.  Install dependencies: `cd ReflectMobileProject && npm install`
3.  Set up the AI API key (see section 5).
4.  Run on Android: `npx react-native run-android`
5.  Run on iOS: `cd ios && pod install && cd .. && npx react-native run-ios`

### 5. API Key Setup
To use the AI image generation, you must get a free API key from Stability AI.
1.  Go to `https://platform.stability.ai/signup`.
2.  Once you have your key, open the file `src/services/apiService.ts`.
3.  Find the `YOUR_API_KEY_HERE` placeholder and replace it with your key.