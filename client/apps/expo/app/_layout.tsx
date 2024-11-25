import React, { useEffect } from 'react'
import { RootLayoutNav } from './components/RootLayout'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import '../global.css'

export const unstable_settings = {
  // Ensure that reloading on `/user` keeps a back button present.
  initialRouteName: 'Home',
}

// NOTE : this hangs, logical error
//SplashScreen.preventAutoHideAsync()

export default function App() {
  const [loaded, error] = useFonts({
    'bungee-inline': require('../fonts/BungeeInline-Regular.ttf'),
    'inter-italic': require('../fonts/Inter-Italic-VariableFont_opsz,wght.ttf'),
    'inter-variable': require('../fonts/Inter-VariableFont_opsz,wght.ttf'),
    'itim-regular': require('../fonts/Itim-Regular.ttf'),
  })

  if (!loaded && !error) {
    return null
  }
  return <RootLayoutNav />
}
