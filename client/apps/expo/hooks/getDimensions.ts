import { Dimensions } from 'react-native'

export const getDimensions = () => {
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height

  return { windowWidth, windowHeight }
}
