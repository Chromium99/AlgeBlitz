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
  Alert,
} from 'react-native'
import React, { useState } from 'react'

export default function Page() {
  // we are not checking for user here
  //const { user } = useUser()
  const [modalVisible, setModalVisible] = useState(false)
  const [number, onChangeNumber] = React.useState('')

  return (
    <View className="flex-1 mx-auto mt-10">
      <View className=" flex-col mx-12">
        {/**
         * Define the modal component here
         * TODO : Define once complete
         * TODO : we need to render two modals in this case
         * TODO : first modal for login, second modal for signup
         */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed')
            // this is where the modal toggle logic is taking place
            // another method of setting the modal rather than explicitly setting it to false
            setModalVisible(!modalVisible)
          }}
        >
          <View style={styles.centeredView}>
            <Text>Not Yet Implemented.</Text>
          </View>
          {/**Define the content to be rendered within the modal, this is where the form input should be shown */}
        </Modal>
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

        <Pressable className="bg-custom-gray color-primary-text-color">
          <Text>Single Sign-on</Text>
        </Pressable>
        <Button title="login" onPress={() => router.push('/(auth)/sign-in')} />
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    // adjust as needed, we already have a white background
    backgroundColor: 'yellow',
  },
  // temporary styles
  PasswordButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#F194FF',
  },
})
