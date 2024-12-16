import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

function SignIn_Icon(props) {
  return (
    <Svg
      width={30}
      height={28}
      viewBox="-4 -3 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        clipPath="url(#clip0_84_16)"
        stroke="#FAF7F7"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M11.017 18.594L15.937 14l-4.92-4.594M2.813 14h13.121M15.938 4.375H22.5c.249 0 .487.092.663.256a.847.847 0 01.274.619v17.5a.846.846 0 01-.274.619.973.973 0 01-.663.256h-6.563" />
      </G>
      <Defs>
        <ClipPath id="clip0_84_16">
          <Path fill="#fff" d="M0 0H30V28H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SignIn_Icon
