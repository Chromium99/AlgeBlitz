import React from 'react'
import { View, StyleSheet } from 'react-native'
import { LandingImageComponent } from '../svgComponents/LandingImage'
import { getDimensions } from 'apps/expo/hooks/getDimensions'

export const RenderLandingImage = () => {
  const { windowWidth, windowHeight } = getDimensions()
  const width = windowWidth * 0.9
  const height = windowHeight * 0.52

  return (
    <View className="shadow-2xl" testID="image-component">
      <LandingImageComponent width={width} height={height} testID="mock-render-landing-image" />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
  },
})
