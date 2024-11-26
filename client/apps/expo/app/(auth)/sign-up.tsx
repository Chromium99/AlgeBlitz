import * as React from 'react'
import { TextInput, Button, View, StyleSheet } from 'react-native'
import { useSignUp } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp()
  const router = useRouter()

  const [emailAddress, setEmailAddress] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [pendingVerification, setPendingVerification] = React.useState(false)
  const [code, setCode] = React.useState('')

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return
    }

    try {
      // this is the part where error occurs
      await signUp.create({
        emailAddress,
        password,
      })

      // send code to email --> never executes
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      setPendingVerification(true)
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }

  const onPressVerify = async () => {
    if (!isLoaded) {
      return
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      })

      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId })
        console.log(`Created user ${emailAddress}`)
        router.replace('/(tabs)/settings')
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2))
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
      console.error(err)
    }
  }

  return (
    <View>
      {!pendingVerification && (
        <>
          <TextInput
            style={styles.input}
            onChangeText={setEmailAddress}
            value={emailAddress}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="useless placeholder"
            keyboardType="default"
            secureTextEntry={true}
          />
          <Button title="Sign Up" onPress={onSignUpPress} />
        </>
      )}
      {pendingVerification && (
        <>
          {/**Step 2 of the verification */}
          <TextInput
            style={styles.input}
            onChangeText={setCode}
            value={code}
            placeholder="Enter code..."
            keyboardType="numeric"
          />
          <Button title="Verify Email" onPress={onPressVerify} />
        </>
      )}
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
