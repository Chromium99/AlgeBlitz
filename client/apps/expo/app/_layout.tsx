//import { Slot } from 'expo-router'
import { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { Provider } from 'app/provider'
import { NativeToast } from '@my/ui/src/NativeToast'
import '../global.css'

export const unstable_settings = {
  // Ensure that reloading on `/user` keeps a back button present.
  initialRouteName: 'Home',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
//SplashScreen.preventAutoHideAsync()

export default function App() {
  /* const [interLoaded, interError] = useFonts({
    // TODO : Fix this, fonts not loading correctly.
    //InterItalic: require('client/apps/expo/fonts/Inter-Italic-VariableFont_opsz,wght.ttf'),
    //rInterVariable: require('client/apps/expo/fonts/Inter-VariableFont_opsz,wght.ttf'),
    ItimRegular: require('/Users/ayandas/Desktop/VS_Code_Projects/Alge-Blitz/client/apps/expo/fonts/Itim-Regular.ttf'),
    // may require their paths to be hardcoded
    //Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    //InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      console.log(interError)
      console.log(interLoaded)
      console.log('Error occuring here!')
      //SplashScreen.hideAsync()
    } else {
      console.log('Font loaded successfully!')
    }
  }, [interLoaded, interError])

  if (!interLoaded && !interError) {
    return null
  } */

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <Provider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              title: 'Home',
            }}
          />
          <Stack.Screen
            name="(tabs)"
            options={{
              title: '',
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="user/[id]"
            options={{
              title: 'User',
              presentation: 'modal',
              animation: 'slide_from_right',
              gestureEnabled: true,
              gestureDirection: 'horizontal',
            }}
          />
          <Stack.Screen
            name="test"
            options={{
              title: 'testPage',
            }}
          />
        </Stack>
        <NativeToast />
      </ThemeProvider>
    </Provider>
  )
}
