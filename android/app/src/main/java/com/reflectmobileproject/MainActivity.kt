package com.reflectmobileproject

import android.os.Bundle // <-- 1. IMPORT BUNDLE
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "ReflectMobileProject"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use this to enable Fabric on
   * new architecture old architecture (see note below).
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate {
    return DefaultReactActivityDelegate(
        this,
        mainComponentName,
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        fabricEnabled
    )
  }

  // vvv 2. ADD THIS ENTIRE FUNCTION vvv
  // This is the required code for react-native-gesture-handler
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }
  // ^^^ 2. ADD THIS ENTIRE FUNCTION ^^^
}