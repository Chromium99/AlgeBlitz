import { HomeScreen } from 'app/features/home/screen'
import { Stack, router } from 'expo-router'
import React from 'react'
import { View, SafeAreaView, TextInput, Text } from 'react-native'
import { Text_Component } from './components/core/TextComponent'
import Sso_Component from './components/Sso_Components/SSO'
import { RenderBackIcon } from './components/core/BackIcon'
import ReusableButton from './components/core/Button'
import { RenderSignIn_Component } from './components/Sso_Components/RenderSignIn'

export default function Test() {
  const [otp, setOtp] = React.useState('')
  return (
    <SafeAreaView className="flex-1 mx-auto mt-10">
      <RenderBackIcon tailwind_styling={'h-10'} />
      <Text_Component
        text_content={'Check Your Email'}
        tailwind_styling={'text-3xl mt-4 mb-10 text-primary-text-color mx-auto'}
      />
      <Sso_Component />
      <TextInput
        style={{
          fontFamily: 'bungee-inline',
        }}
        className="h-16 border p-5 rounded-md w-[350px] bg-white shadow-md mt-2"
        placeholder="Enter Your OTP..."
        placeholderTextColor="gray"
        keyboardType="email-address"
        value={otp}
        onChangeText={setOtp}
      />
      <ReusableButton
        buttonContent="Continue"
        route="/(tabs)"
        button_icon={<RenderSignIn_Component />}
      />
      <View className="mx-auto mt-8">
        <Text
          className="text-custom-gray"
          style={{
            fontFamily: 'bungee-inline',
          }}
        >
          HAVEN'T RECIEVED IT YET?{' '}
          <Text
            className="text-primary-text-color"
            style={{
              fontFamily: 'bungee-inline',
            }}
          >
            RESEND OTP
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}
