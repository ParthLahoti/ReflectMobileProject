Reflect Mobile App - Technical Documentation

1. Project Overview

This project is a cross-platform mobile app prototype (iOS and Android) built for the Challenge X hackathon. The "Reflect" app is an arts for wellness tool that allows users to explore emotions by generating AI art from text-based prompts.

Sponsor: Persistent Technology, Inc.

Team: Parth Lahoti, Pranay Mishra, Vishantan Singh Parihar, Lakshya Agrawal

2. Setup and Installation

To run this project, you will need Node.js, Git, and a complete Android Studio setup.

Clone the Repository:

git clone [https://github.com/ParthLahoti/ReflectMobileProject.git](https://github.com/ParthLahoti/ReflectMobileProject.git)
cd ReflectMobileProject


Install Dependencies:

npm install


Prepare the Android Environment:

Ensure you have Android Studio installed.

Using the SDK Manager > SDK Tools, you must install:

NDK (Side by side)

CMake

Ensure your ANDROID_HOME environment variable is set correctly.

CRITICAL NATIVE FIX:
This project requires a native code modification to run. Before building, you must edit android/app/src/main/java/com/reflectmobileproject/MainActivity.kt to include the onCreate(null) override required by react-native-gesture-handler.

The final MainActivity.kt must be:

package com.reflectmobileproject

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  override fun getMainComponentName(): String = "ReflectMobileProject"

  override fun createReactActivityDelegate(): ReactActivityDelegate {
    return DefaultReactActivityDelegate(
        this,
        mainComponentName,
        fabricEnabled
    )
  }

  // Required for react-native-gesture-handler
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }
}


Run the App:

Start an Android Emulator or connect a physical device with USB Debugging enabled.

Manually uninstall any old version of the app from the device.

Run the following command:

npx react-native run-android


3. Project Architecture

The app is built using React Native (TypeScript).

Navigation: Handled by React Navigation (Stack Navigator). The navigation stack is defined in src/navigation/AppNavigator.tsx.

State Management: Global app state (such as the user's selected emotion and style) is managed by React Context API. The logic is contained in src/context/PromptContext.tsx.

Folder Structure:

/src: Contains all application source code.

/src/components: Reusable UI components (e.g., PrimaryButton.tsx, Card.tsx).

/src/context: Global state management.

/src/navigation: The main app navigator.

/src/screens: Individual screen components (e.g., PromptScreen.tsx, ResponseScreen.tsx).

/src/services: The API layer for communicating with external services.

4. API Integration

Intended API: Stability AI

The app is designed to integrate with the Stability AI text-to-image API. The file src/services/apiService.ts is built to call the stable-image-core model.

The request sends the user's prompt, along with parameters for 4 image samples (samples: 4), and receives an array of base64-encoded images, which are then rendered in the app.

Current Implementation: "Demo Mode" Fallback

As of the final presentation (Nov 14, 2025), we were not provided with a production API key from the sponsor. To ensure a fully functional demo, we have implemented a "demo mode" fallback.

In src/screens/PromptEditScreen.tsx, the handleSubmit function is currently using a setTimeout to simulate a 2-second API call.

After the delay, it returns a hard-coded array of 4 placeholder image URLs (https://picsum.photos/...).

This allows us to demonstrate the complete, end-to-end application flow, including the loading state and the response grid, exactly as it would function with the live API.