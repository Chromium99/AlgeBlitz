import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
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
} from 'react-native'
import { RenderLoginImage } from '../components/landingPageComponents/RenderLogin'
import React from 'react'

export default function Page() {
  // we are not checking for user here
  //const { user } = useUser()
  const [number, onChangeNumber] = React.useState('')

  return (
    <View className="flex-1 mx-auto mt-10">
      <View className=" flex-col mx-12">
        {/**
         * Define the modal component here
         * TODO : Define once complete
         */}
        <Modal
        //animationType=''
        ></Modal>
        <Text
          style={{ fontFamily: 'bungee-inline' }}
          className="text-5xl mt-5 mb-10 text-primary-text-color"
        >
          LOGIN
        </Text>
        {/*
        Input box to be rendered based on user's choice of selection
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter Your Email"
          keyboardType="email-address"
        />
      </View>*/}

        {/**Placeholder colors, just implementing something different, remove if needed */}
        <Pressable>
          <Text className="bg-custom-purple color-primary-text-color">Enter My Password</Text>
        </Pressable>

        <Pressable className="bg-custom-gray color-primary-text-color">Single Sign-on</Pressable>
        {/*<Button title="login" onPress={() => router.push('/(auth)/sign-in')} /> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  // temporary styles
  PasswordButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#F194FF',
  },
})
