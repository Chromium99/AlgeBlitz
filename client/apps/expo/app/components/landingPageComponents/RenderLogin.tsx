import LoginIllistrationComponent from '../svgComponents/LoginIllustration'
import { View, StyleSheet } from 'react-native'
import { getDimensions } from 'apps/expo/hooks/getDimensions'

export const RenderLoginImage = () => {
  const { windowWidth, windowHeight } = getDimensions()
  const propData = {
    width: windowWidth * 0.9,
    height: windowHeight * 0.52,
  }
  return (
    <View className="shadow-2xl">
      <LoginIllistrationComponent props={propData} />
    </View>
  )
}
