import React from 'react'
import { Text } from 'react-native'
export const Text_Component = ({ text_content, tailwind_styling }) => {
  return (
    <Text
      style={{ fontFamily: 'bungee-inline' }}
      //   className="text-5xl mt-16 mb-10 text-primary-text-color mx-auto"
      className={tailwind_styling}
    >
      {text_content}
    </Text>
  )
}
