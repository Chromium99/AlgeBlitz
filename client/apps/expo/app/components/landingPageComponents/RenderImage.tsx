import React from 'react'
import { View, StyleSheet } from 'react-native'
import { LandingImageComponent } from '../svgComponents/LandingImage'
import { getDimensions } from 'apps/expo/hooks/getDimensions'

export const RenderLandingImage = () => {
  const { windowWidth, windowHeight } = getDimensions()
  const propData = {
    width: windowWidth * 0.9,
    height: windowHeight * 0.52,
  }
  return (
    <View className="shadow-2xl">
      <LandingImageComponent props={propData} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
  },
})
