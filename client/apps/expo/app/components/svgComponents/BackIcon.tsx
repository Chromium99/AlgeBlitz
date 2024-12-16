import * as React from 'react'
import { Pressable } from 'react-native'
import Svg, { Path } from 'react-native-svg'

function Back_Icon(props) {
  return (
    <Svg
      width={20}
      height={22}
      viewBox="0 0 20 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.681 11.172L13.841.551c.91-.735 2.38-.735 3.28 0l2.187 1.765c.91.734.91 1.921 0 2.647L9.99 12.5l9.328 7.529c.91.734.91 1.921 0 2.648l-2.187 1.772c-.91.734-2.38.734-3.28 0L.69 13.828c-.92-.734-.92-1.922-.01-2.656z"
        fill="#8B8B8B"
      />
    </Svg>
  )
}

export default Back_Icon
