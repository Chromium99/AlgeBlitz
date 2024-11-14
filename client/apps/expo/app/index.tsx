import { HomeScreen } from 'app/features/home/screen'
import { Stack, router } from 'expo-router'
import { Button, SafeAreaView, Text } from 'react-native'

export default function Home() {
  return (
    // NOTE : tab views are treated as screens simultaneously (Don't remove)
    /**
     * @usage router.push('(tabs)/') will naviagte to index.tsx within (tabs)
     * @usage router.push('(tabs)/settings') will navigate to settings.tsx within (tabs)
     * @note the (tabs) screen can be viewed as a screen, with the tabs serving as smaller subsets that make up the screen
     * @dsa routes are implemented using a stack, router.back() pops from the stack, router.push(someRouteVal : string) pushes onto the routing stack
     * @SafeAreaView is simply used to ensure content stays within header
     */
    <SafeAreaView>
      <Text className="text-red-900 mt-20 text-2xl mx-auto">Some Random Text</Text>

      <Button title="main-tab" onPress={() => router.push('(tabs)/')} />
      <Button title="settings-tab" onPress={() => router.push('(tabs)/settings')} />
    </SafeAreaView>
  )
}
