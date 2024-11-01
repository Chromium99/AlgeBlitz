import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs } from 'expo-router'
import { Colors } from 'react-native/Libraries/NewAppScreen'

//@reference : https://github.com/expo/router/issues/518
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: {
          //display: route.name === 'test' ? 'none' : 'flex',
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'sampleTab',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  )
}
