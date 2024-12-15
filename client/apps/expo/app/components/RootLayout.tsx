import React, { useEffect } from 'react' // ensures that we are working with a component.
import { useColorScheme } from 'react-native'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { Provider } from 'app/provider'
import { NativeToast } from '@my/ui/src/NativeToast'
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import * as SecureStore from 'expo-secure-store'

// define a simple getter for the publishable key
const getPublisableKey = () => {
  let publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

  if (!publishableKey) {
    publishableKey = 'pk_test_ZW5vdWdoLXNlcnZhbC02OC5jbGVyay5hY2NvdW50cy5kZXYk'
  }
  return publishableKey
}

export function RootLayoutNav() {
  // const colorScheme = useColorScheme()
  // let publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

  // if (!publishableKey) {
  //   // hardcode the publishable key if it cannot be detected
  //   // TODO : remove before commiting
  //   publishableKey = 'pk_test_ZW5vdWdoLXNlcnZhbC02OC5jbGVyay5hY2NvdW50cy5kZXYk'
  // }
  const publishableKey = getPublisableKey()

  const tokenCache = {
    async getToken(key: string) {
      try {
        const item = await SecureStore.getItemAsync(key)
        if (item) {
          console.log(`${key} was used 🔐 \n`)
        } else {
          console.log('No values stored under key: ' + key)
        }
        return item
      } catch (error) {
        console.error('SecureStore get item error: ', error)
        await SecureStore.deleteItemAsync(key)
        return null
      }
    },
    async saveToken(key: string, value: string) {
      try {
        return SecureStore.setItemAsync(key, value)
      } catch (err) {
        return
      }
    },
  }

  return (
    /**
     * originally this was <Provider></Provider> and <ThemeProvider></ThemeProvider>
     * now replaced with <ClerkProvider></ClerkProvider> and <ClerkLoaded></ClerkLoaded> as wrappers
     * for single sign on authentication purposes
     */
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
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
            name="sso"
            options={{
              title: 'Single Sign On',
            }}
          />
          <Stack.Screen
            name="(tabs)"
            options={{
              title: '',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="login"
            options={{
              title: '',
              headerShown: false,
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
        </Stack>
        <NativeToast />
      </ClerkLoaded>
    </ClerkProvider>
  )
}
