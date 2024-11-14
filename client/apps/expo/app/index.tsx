import { HomeScreen } from 'app/features/home/screen'
import { useRouter } from 'expo-router'
import { Button, SafeAreaView, Text } from 'react-native'
//import { useFonts } from 'expo-font'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  return (
    // NOTE : tab views are treated as screens simultaneously (Don't remove)
    /**
     * @usage router.push('(tabs)/') will naviagte to index.tsx within (tabs)
     * @usage router.push('(tabs)/settings') will navigate to settings.tsx within (tabs)
     * @note the (tabs) screen can be viewed as a screen, with the tabs serving as smaller subsets that make up the screen
     * @dsa routes are implemented using a stack, router.back() pops from the stack, router.push(someRouteVal : string) pushes onto the routing stack
     * @SafeAreaView is simply used to ensure content stays within header
     */
    <SafeAreaView className="bg-primary-background-color flex-1">
      <Text
        style={{
          fontFamily: 'test',
        }}
        // font-inter will help you use the inter font
        className="font-inter text-red-900 mt-20 text-2xl mx-auto"
      >
        Some Random Text
      </Text>

      {/**These errors can be ignored at the moment. */}
      <Button title="main-tab" onPress={() => router.push('(tabs)/')} />
      <Button title="settings-tab" onPress={() => router.push('(tabs)/settings')} />
    </SafeAreaView>
  )
}
