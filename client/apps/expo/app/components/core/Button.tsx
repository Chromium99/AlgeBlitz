import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { router } from 'expo-router'
export default function ReusableButton({ buttonContent, route, button_icon }) {
  return (
    <Pressable
      className="bg-black h-20 rounded-3xl mt-10 active:opacity-50"
      // TODO : look into potential fix for this
      onPress={() => router.push(route)}
    >
      {({ pressed }) => (
        <Text
          style={{
            fontFamily: 'bungee-inline',
          }}
          className="text-white mx-auto my-auto text-2xl"
        >
          {buttonContent} {button_icon}
        </Text>
      )}
    </Pressable>
  )
}

export function GoogleButton({ Icon }) {
  return (
    <View className="mr-4 w-48">
      <Pressable className="bg-black h-20 rounded-3xl mt-10 active:opacity-50">
        {({ pressed }) => (
          <Text
            style={{
              fontFamily: 'bungee-inline',
            }}
            className="text-white mx-auto my-auto text-xl"
          >
            {Icon} GOOGLE
          </Text>
        )}
      </Pressable>
    </View>
  )
}

export function AppleButton({ Icon }) {
  return (
    <View className="mr-4 w-48">
      <Pressable className="bg-black h-20 rounded-3xl mt-10 active:opacity-50">
        {({ pressed }) => (
          <Text
            style={{
              fontFamily: 'bungee-inline',
            }}
            className="text-white mx-auto my-auto text-xl"
          >
            APPLE {Icon}
          </Text>
        )}
      </Pressable>
    </View>
  )
}
