import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link, router } from 'expo-router'
import { Text, View, Pressable, SafeAreaView, TextInput, StyleSheet, Button } from 'react-native'
import { RenderLoginImage } from '../components/landingPageComponents/RenderLogin'
import React from 'react'

export default function Page() {
  const { user } = useUser()
  const [number, onChangeNumber] = React.useState('')

  return (
    <View className="flex-1 mx-auto mt-10">
      <View className=" flex-col mx-12">
        <Text
          style={{ fontFamily: 'bungee-inline' }}
          className="text-5xl mt-5 mb-10 text-primary-text-color"
        >
          LOGIN
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </View>
      <Button title="login" onPress={() => router.push('/(auth)/sign-in')} />
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
})
