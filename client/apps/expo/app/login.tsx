// import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link, router } from 'expo-router'
import {
  Text,
  View,
  Pressable,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Alert,
} from 'react-native'
import ReusableButton, { GoogleButton, AppleButton } from './components/core/Button'
import { RenderingEmailIcon } from './components/loginPageComponents/RenderingEmail'
import React, { useState } from 'react'
import { RenderingGoogleIcon } from './components/loginPageComponents/RenderingGoogle'
import AppleIcon from './components/svgComponents/AppleIcon'
import { RenderingEmailIllustration } from './components/loginPageComponents/RenderingEmailImage'
import { Text_Component } from './components/core/TextComponent'
import { RenderBackIcon } from './components/core/BackIcon'
export default function Page() {
  const [modalVisible, setModalVisible] = useState(false)
  const [email, onChangeEmail] = React.useState('')

  return (
    <SafeAreaView className="flex-1 mx-auto mt-10">
      {/* <Text
        style={{ fontFamily: 'bungee-inline' }}
        className="text-5xl mt-16 mb-10 text-primary-text-color mx-auto"
      >
        LOGIN
      </Text> */}
      <RenderBackIcon tailwind_styling="w-4 h-4" />

      <Text_Component
        text_content="LOGIN"
        tailwind_styling="text-5xl mt-16 mb-10 text-primary-text-color mx-auto"
      />
      <TextInput
        style={{
          fontFamily: 'bungee-inline',
        }}
        className="h-16 border p-5 rounded-md w-[350px] bg-white shadow-md"
        placeholder="Enter Your Email..."
        placeholderTextColor="gray"
        keyboardType="email-address"
        value={email}
        onChangeText={onChangeEmail}
      />
      <ReusableButton buttonContent="Continue" route="/sso" button_icon={<RenderingEmailIcon />} />

      <View className="mt-5" style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1, height: 1.5, backgroundColor: 'gray' }} />
        <View>
          <Text
            className="text-custom-gray"
            style={{ width: 180, textAlign: 'center', fontFamily: 'bungee-inline' }}
          >
            OR CONTINUE WITH
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
      </View>
      <View className="flex flex-row">
        <GoogleButton Icon={<RenderingGoogleIcon />} />
        <AppleButton Icon={<AppleIcon />} />
      </View>
      <RenderingEmailIllustration />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'yellow',
  },
  PasswordButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#F194FF',
  },
})
