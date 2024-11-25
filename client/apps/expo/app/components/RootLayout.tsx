import React, { useEffect } from 'react' // ensures that we are working with a component.
import { useColorScheme } from 'react-native'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { Provider } from 'app/provider'
import { NativeToast } from '@my/ui/src/NativeToast'

export function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <Provider>
      <ThemeProvider
        // TODO : add ternary condition if we do decide to support light/dark mode later during development
        // DefaultTheme = Light Mode
        value={DefaultTheme}
      >
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: 'white',
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: 'Home',
              // hide the header for the landing screen
              headerShown: false,
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
