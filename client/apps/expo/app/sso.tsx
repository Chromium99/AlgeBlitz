import { HomeScreen } from 'app/features/home/screen'
import { Stack, router } from 'expo-router'
import { Button, SafeAreaView } from 'react-native'

export default function Test() {
  return (
    <SafeAreaView>
      {/*<HomeScreen /> */}
      <Button
        title="test-link"
        onPress={() => router.push('../app/(root)/(tabs)/(settings)/settings')}
      />
    </SafeAreaView>
  )
}
