import { HomeScreen } from 'app/features/home/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <Stack>
      <Stack.Screen
        name=""
        options={{
          title: 'Home',
        }}
      />
      <HomeScreen />
      {/*
      <Stack.Screen
        options={{
          title : 
        }}
      
      />*/}
    </Stack>
  )
}
