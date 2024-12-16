import React from 'react'
import Back_Icon from '../svgComponents/BackIcon'
import { Pressable, View } from 'react-native'
import { router } from 'expo-router'
export const RenderBackIcon = ({ tailwind_styling }) => {
  return (
    <Pressable onPress={() => router.back()} className={tailwind_styling}>
      <Back_Icon />
    </Pressable>
  )
}
