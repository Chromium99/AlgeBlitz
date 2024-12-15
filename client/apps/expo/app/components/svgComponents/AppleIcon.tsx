import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function AppleIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.084 5.19A4.379 4.379 0 0018.144 2a4.44 4.44 0 00-3 1.52 4.17 4.17 0 00-1 3.09 3.69 3.69 0 002.94-1.42zm2.52 7.44a4.51 4.51 0 012.16-3.81 4.66 4.66 0 00-3.66-2c-1.56-.16-3 .91-3.83.91-.83 0-2-.89-3.3-.87a4.92 4.92 0 00-4.14 2.53c-1.76 3.06-.45 7.61 1.31 10.08.8 1.21 1.8 2.58 3.12 2.53 1.32-.05 1.75-.82 3.28-.82 1.53 0 2 .82 3.3.79 1.3-.03 2.22-1.24 3.06-2.45a10.997 10.997 0 001.38-2.85 4.41 4.41 0 01-2.68-4.04z"
        fill="#FFFBFB"
      />
    </Svg>
  )
}

export default AppleIcon
