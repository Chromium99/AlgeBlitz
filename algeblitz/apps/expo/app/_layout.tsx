//import { Slot } from 'expo-router'
import { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { Provider } from 'app/provider'
import { NativeToast } from '@my/ui/src/NativeToast'
import '/Users/ayandas/Desktop/VS_Code_Projects/Alge-Blitz/algeblitz/apps/expo/global.css'

export const unstable_settings = {
  // Ensure that reloading on `/user` keeps a back button present.
  initialRouteName: 'Home',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function App() {
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync()
    }
  }, [interLoaded, interError])

  if (!interLoaded && !interError) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <Provider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              title: '',
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="index"
            options={{
              title: 'Home',
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
