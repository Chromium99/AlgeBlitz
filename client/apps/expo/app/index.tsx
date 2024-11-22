import React from 'react'
import { useRouter } from 'expo-router'
import { Button, SafeAreaView, Text, View, Pressable } from 'react-native'
import { RenderLandingImage } from './components/landingPageComponents/RenderImage'
import AntDesign from '@expo/vector-icons/AntDesign'
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
    <SafeAreaView className="bg-white flex-1 mx-auto mt-10">
      <RenderLandingImage />
      <View className=" flex-col mx-12">
        <Text
          style={{ fontFamily: 'bungee-inline' }}
          className="text-5xl mt-5 mb-10 text-primary-text-color"
        >
          ALGEBLITZ
        </Text>
        <Text
          style={{
            fontFamily: 'bungee-inline',
          }}
          className="text-secondary-text-color opacity-60 text text-2xl"
        >
          AN APP TO ENHANCE YOUR KNOWLEDGE OF MATHEMATICS, AND CULTIVATE PASSION.
        </Text>
        <Pressable className="bg-black h-20 rounded-3xl mt-10 active:opacity-50">
          {({ pressed }) => (
            <Text
              style={{
                fontFamily: 'bungee-inline',
              }}
              className="text-white mx-auto my-auto text-2xl"
            >
              {pressed ? 'Continue' : 'Get Started'}
            </Text>
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  )
}
