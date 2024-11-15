import React from 'react'
import { View, StyleSheet, Image, ImageSourcePropType } from 'react-native'
import { ImageContentFit } from 'expo-image'
import { LandingImageComponent } from '../svgComponents/LandingImage'

export const RenderLandingImage = () => {
  return (
    <View className="shadow-2xl">
      <LandingImageComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
  },
})
