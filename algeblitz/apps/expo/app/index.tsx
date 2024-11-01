import { HomeScreen } from 'app/features/home/screen'
import { Stack, router } from 'expo-router'
import { Button, SafeAreaView } from 'react-native'

export default function Home() {
  return (
    <SafeAreaView>
      <Button title="test-link" onPress={() => router.push('(tabs)/')} />
    </SafeAreaView>
  )
}
