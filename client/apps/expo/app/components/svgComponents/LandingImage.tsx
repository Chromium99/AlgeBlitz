//@see https://react-svgr.com/playground/?native=true

import * as React from 'react'
import Svg, { G, Path, Defs } from 'react-native-svg'

// reusable SVG component for Landing Image
export const LandingImageComponent = ({ props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path fill="transparent" d="M3 0h424v451H3z" />
      <Path
        fill="#F7F7F7"
        d="M409.333 444.736H23.807c-2.59 0-4.71-2.255-4.71-5.011v-19.627c0-2.756 2.12-5.011 4.71-5.011h385.526c2.591 0 4.711 2.255 4.711 5.011v19.627c0 2.756-2.12 5.011-4.711 5.011Z"
      />
      <Path
        fill="#F3FAFF"
        d="M219.711 422.186c72.419 0 131.126-62.445 131.126-139.476 0-77.03-58.707-139.476-131.126-139.476-72.419 0-131.126 62.446-131.126 139.476 0 77.031 58.707 139.476 131.126 139.476Z"
      />
      <Path
        fill="#FFBE55"
        d="M382.244 381.22c2.788-7.558 5.615-15.952 2.984-23.552-.628-1.837-1.609-3.8-1.021-5.679.786-2.548 3.926-3.424 4.947-5.846 1.178-2.673-.667-5.763-.196-8.645.471-2.923 3.18-4.844 5.81-5.888 2.631-1.044 5.496-1.712 7.616-3.633 4.044-3.758 3.573-10.481 2.67-16.161-.903-5.637-1.57-12.319 2.316-16.286-7.145 1.462-14.447 2.965-20.65 6.974-6.203 4.009-11.15 11.108-10.796 18.833.196 3.884 1.609 8.018-.04 11.443-1.805 3.716-6.634 5.178-7.851 9.145-1.414 4.552 2.787 8.728 4.436 13.196 1.57 4.217.824 8.936 1.178 13.404.353 4.51 2.552 9.605 6.752 10.273l1.845 2.422Z"
      />
      <Path
        fill="#fff"
        d="M382.244 381.22c2.788-7.558 5.615-15.952 2.984-23.552-.628-1.837-1.609-3.8-1.021-5.679.786-2.548 3.926-3.424 4.947-5.846 1.178-2.673-.667-5.763-.196-8.645.471-2.923 3.18-4.844 5.81-5.888 2.631-1.044 5.496-1.712 7.616-3.633 4.044-3.758 3.573-10.481 2.67-16.161-.903-5.637-1.57-12.319 2.316-16.286-7.145 1.462-14.447 2.965-20.65 6.974-6.203 4.009-11.15 11.108-10.796 18.833.196 3.884 1.609 8.018-.04 11.443-1.805 3.716-6.634 5.178-7.851 9.145-1.414 4.552 2.787 8.728 4.436 13.196 1.57 4.217.824 8.936 1.178 13.404.353 4.51 2.552 9.605 6.752 10.273l1.845 2.422Z"
        opacity={0.31}
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={0.75}
        d="M379.378 371.323c-.078-21.965 3.926-67.942 27.757-75.626"
      />
      <Path
        fill="#FFBE55"
        d="M365.638 379.383c-4.24-8.435-8.637-17.831-6.556-27.144.51-2.255 1.374-4.677.471-6.806-1.217-2.84-5.026-3.466-6.557-6.139-1.688-2.923.04-6.849-.903-10.147-.942-3.383-4.357-5.179-7.537-6.056-3.18-.835-6.635-1.169-9.383-3.173-5.222-3.8-5.536-11.776-5.222-18.5.314-6.723.236-14.657-4.829-18.708 8.559.668 17.314 1.378 25.087 5.178s14.526 11.401 15.075 20.504c.275 4.552-.863 9.605 1.532 13.405 2.591 4.092 8.44 5.095 10.403 9.563 2.238 5.136-2.12 10.607-3.494 16.077-1.256 5.136.197 10.565.354 15.869.157 5.303-1.767 11.609-6.596 13.028l-1.845 3.049Z"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={0.75}
        d="M367.719 367.356c-2.749-25.765-13.349-79.008-42.283-84.479"
      />
      <Path
        fill="#CCE9FF"
        d="M392.452 428.868h-37.296c-2.592 0-4.712-2.255-4.712-5.011l-3.14-57.211c0-2.756 2.12-5.011 4.711-5.011h43.578c2.591 0 4.711 2.255 4.711 5.011l-3.141 57.211c0 2.756-2.12 5.011-4.711 5.011Z"
      />
      <Path
        fill="#FFBE55"
        d="m54.251 247.175 24.066-3.882 16.362 114.779-24.066 3.881-16.362-114.778Z"
      />
      <Path
        fill="#FFBE55"
        d="m66.276 245.245 12.032-1.941L94.67 358.083l-12.032 1.941-16.362-114.779Z"
      />
      <Path
        fill="#FFEBC2"
        d="m78.338 243.415-24.065 3.883 5.653-15.409 3.22-8.686 5.495 7.308 9.697 12.904Z"
      />
      <Path fill="#0E538C" d="m68.641 230.511-8.715 1.378 3.22-8.686 5.495 7.308Z" />
      <Path
        fill="#FFBE55"
        d="m97.66 217.015 24.243 2.309-9.734 115.627-24.243-2.309 9.734-115.627Z"
      />
      <Path
        fill="#FFBE55"
        d="m109.805 218.179 12.122 1.155-9.735 115.626-12.121-1.155 9.734-115.626Z"
      />
      <Path
        fill="#FFEBC2"
        d="m121.916 219.445-24.262-2.297 8.951-13.53 5.065-7.642 3.69 8.477 6.556 14.992Z"
      />
      <Path fill="#0E538C" d="m115.36 204.453-8.755-.835 5.065-7.642 3.69 8.477Z" />
      <Path fill="#CCE9FF" d="M137.856 429.285H42.22L29.696 271.853h115.815l-7.655 157.432Z" />
      <Path fill="#CCE9FF" d="M87.604 429.285h50.252l7.655-157.432H87.604v157.432Z" opacity={0.5} />
      <Path fill="#FFEBC2" d="M108.607 384.853h243.015v35.537H108.607v-35.537Z" />
      <Path
        fill="#FFBE55"
        d="M109.628 384.853v35.538h254.95v2.672c0 3.299-2.709 5.972-6.046 5.972H110.727c-7.891 0-14.29-6.264-14.29-14.031v-23.761c0-7.768 6.399-14.032 14.29-14.032h247.805c3.337 0 6.046 2.673 6.046 5.972v1.712h-254.95v-.042Z"
      />
      <Path fill="#FFEBC2" d="M108.607 400.68h243.015v19.669H108.607V400.68Z" />
      <Path fill="#CCE9FF" d="M140.015 341.591h197.474v30.902H140.015v-30.902Z" />
      <Path
        fill="#2A94F4"
        d="M140.015 341.591v30.902h204.933v2.338c0 2.881-2.198 5.178-4.868 5.178H140.879c-6.321 0-11.464-5.47-11.464-12.194v-20.67c0-6.724 5.143-12.194 11.464-12.194H340.08c2.67 0 4.868 2.338 4.868 5.178v1.503H140.015v-.041Z"
      />
      <Path
        fill="#0E538C"
        d="M225.364 236.399c-2.708-3.8-2.944-9.02-.392-12.987 2.041-3.174 3.415-7.099 3.258-9.98-.314-5.179-3.337-9.939-7.459-12.779-5.418-3.758-12.641-4.301-18.491-1.378s-10.09 9.187-10.836 15.994c-.549 4.886.511 10.231-1.845 14.49-1.727 3.049-4.907 4.845-8.048 6.056-3.18 1.169-6.517 1.962-9.422 3.758-2.905 1.796-5.379 4.886-5.339 8.477.039 2.714 1.491 5.22 1.649 7.893.235 3.925-2.356 7.391-5.104 9.98-2.788 2.589-5.968 4.844-7.852 8.227-3.102 5.595-1.649 13.154 2.277 18.165 3.926 5.011 9.815 7.809 15.704 9.437 16.096 4.51 33.056 1.587 49.663 1.295 5.143-.084 10.403.083 15.389-1.295 4.986-1.378 9.854-4.551 11.935-9.562 2.12-5.012 1.06-11.108-1.767-15.66-2.826-4.552-7.262-7.851-11.934-10.189-3.377-1.713-6.989-3.049-9.737-5.721-2.748-2.673-4.357-7.225-2.512-10.691.706-1.336 1.884-2.38 2.552-3.716 1.334-2.589.785-5.888-.707-8.394a38.078 38.078 0 0 0-.982-1.42Z"
      />
      <Path fill="#CCE9FF" d="M140.015 355.371h197.474v17.122H140.015v-17.122Z" />
      <Path
        fill="#0B4870"
        d="m229.133 311.524 24.341 18.374 29.837 65.562h-5.496l-33.371-58.045s-11.385.418-15.311-3.341c-3.926-3.758-26.5-20.044-26.5-20.044l26.5-2.506Z"
      />
      <Path
        fill="#0E538C"
        d="M186.066 306.262c-4.436 12.779-1.296 30.735 13.623 31.57 14.918.836 19.63 0 19.63 0l29.051 62.639h6.674l-22.77-70.155-27.678-16.286-18.53-7.768Z"
      />
      <Path
        fill="#4EA3FB"
        d="M208.719 233.434c3.925 5.429 13.348 20.462 16.881 37.166 3.533 16.704 13.348 40.924 13.348 40.924h-11.385l-10.993-39.671-10.207-37.166 2.356-1.253Z"
      />
      <Path
        fill="#FFE3CA"
        d="M220.81 211.26c.589 10.231-3.611 17.247-9.618 17.581-6.007.334-9.933-8.937-8.127-17.581 4.201-7.684 9.933-8.31 9.933-8.31h3.612l4.2 8.31Z"
      />
      <Path
        fill="#0E538C"
        d="M216.806 205.163c-1.099 3.592-3.533 6.682-6.674 8.436-3.141 1.754-6.91 2.171-10.325 1.085l8.558-12.987h7.342l7.027 5.93-1.06 6.807c-2.748-2.213-4.868-9.271-4.868-9.271Z"
      />
      <Path
        fill="#FFE3CA"
        d="M209.386 227.63c-1.256 5.178-.864 10.606-.864 11.442-1.178 1.67-6.674 1.252-7.459-4.594 1.178-7.517 3.533-15.868 3.533-15.868l1.963 4.593 2.827 4.427Z"
      />
      <Path
        fill="#2A94F4"
        d="M201.848 230.052c-4.907 1.712-21.396 9.646-22.181 11.317 1.177 4.593 7.066 72.661 7.066 72.661h26.697s-3.534-37.584-1.571-40.089c1.963-2.506 8.245-11.275 7.46-12.528-.786-1.253-10.758-28.188-10.758-28.188l-6.713-3.173Z"
      />
      <Path
        fill="#4EA3FB"
        d="M179.667 241.368c-3.848 3.132-20.023 31.32-14.919 46.353 5.104 15.034 21.789 23.886 21.789 23.886v-8.268s-13.544-11.442-12.759-19.794c.785-8.352 10.207-25.473 10.207-25.473l-4.318-16.704Z"
      />
      <Path
        fill="#FFBE55"
        d="M242.913 318.832h-57.789c-1.806 0-3.298-1.587-3.298-3.508l-1.57-39.337c0-1.921 1.491-3.508 3.297-3.508h60.146c1.805 0 3.297 1.587 3.297 3.508l-.785 39.337c0 1.921-1.492 3.508-3.298 3.508Z"
      />
      <Path
        fill="#1A87D8"
        d="M254.102 400.471c3.887.919 9.148 5.471 11.66 7.809.511.46.197 1.378-.51 1.378-4.044-.083-13.191-.543-15.311-2.464-2.748-2.505-1.963-6.681-1.963-6.681h6.124v-.042Zm29.131-5.178c3.454 1.002 8.008 5.262 10.286 7.558.51.502.117 1.379-.55 1.337-3.808-.293-11.974-1.086-13.819-2.965-2.434-2.422-1.531-6.222-1.531-6.222l5.614.292Z"
      />
      <Path
        fill="#fff"
        d="M213.822 301.919c3.253 0 5.889-2.804 5.889-6.264 0-3.459-2.636-6.263-5.889-6.263-3.252 0-5.889 2.804-5.889 6.263 0 3.46 2.637 6.264 5.889 6.264Z"
      />
      <Path
        fill="#FFBE55"
        d="m162 384.603-7.459-4.594-7.46 4.594v-29.232H162v29.232Zm115.658-173.092c0 .793-.275 1.503-.746 2.088.471.542.746 1.294.746 2.087v2.59a3.45 3.45 0 0 1-.393 1.545c.236.459.393 1.002.393 1.545v2.589c0 1.712-1.296 3.09-2.905 3.09H249.47c-1.61 0-2.906-1.378-2.906-3.09v-2.631c0-.543.157-1.086.393-1.545a3.443 3.443 0 0 1-.393-1.545v-2.589c0-.794.275-1.504.746-2.088-.471-.543-.746-1.295-.746-2.088v-2.589c0-1.712 1.296-3.09 2.906-3.09h25.283c1.609 0 2.905 1.378 2.905 3.09v2.631Zm20.179-58.547c0 15.075-8.244 28.062-20.179 34.243v14.031c0 1.044-.825 1.921-1.806 1.921H248.37c-.981 0-1.806-.877-1.806-1.921v-14.031c-11.934-6.139-20.179-19.168-20.179-34.243 0-21.005 15.979-38.001 35.726-38.001 19.748 0 35.726 17.038 35.726 38.001Z"
      />
      <Path
        stroke="#7F7F7F"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M274.281 213.807h-23.948m23.948 5.847h-23.948"
        opacity={0.23}
      />
      <Path
        fill="#fff"
        d="M268.236 157.641c-.432-.418-1.06-.626-1.728-.543-.824.084-1.609.585-2.12 1.295-.432.626-.667 1.378-.785 2.088-.353-.209-.746-.418-1.099-.668l-.118-.084h-.51l-.118.084c-.393.25-.746.459-1.099.668-.118-.71-.354-1.462-.786-2.088-.471-.71-1.295-1.211-2.12-1.295a2.136 2.136 0 0 0-1.727.543c-.589.585-.785 1.42-.589 2.297.314 1.169 1.217 2.13 2.277 2.338.667.126 1.296.084 1.963-.083.982 13.572 1.374 27.31 1.099 40.882h1.178c.275-13.613-.118-27.394-1.099-40.966 0-.125 0-.25-.039-.376a8.433 8.433 0 0 0 1.334-.751c.432.25.864.543 1.335.751 0 .126 0 .251-.039.376-.982 13.572-1.374 27.353-1.099 40.966h1.177c-.274-13.572.118-27.352 1.1-40.882.628.167 1.295.25 1.963.083 1.02-.208 1.963-1.169 2.277-2.338.157-.877-.04-1.712-.628-2.297Zm-10.326 3.466c-.589-.125-1.177-.752-1.374-1.461-.078-.293-.117-.752.236-1.044.196-.209.471-.251.667-.251h.157c.471.042.982.334 1.296.793.353.502.549 1.128.628 1.838a3.52 3.52 0 0 1-1.61.125Zm9.776-1.461c-.196.709-.746 1.336-1.374 1.461-.511.125-1.06.042-1.571-.125.118-.71.275-1.336.629-1.838.274-.417.785-.709 1.295-.793.236-.042.55 0 .825.251.274.292.235.751.196 1.044Z"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M252.689 121.937c-8.637 3.341-22.77 15.451-21.593 35.078"
      />
      <Path
        fill="#FFBE55"
        d="M205.381 190.005c5.529 0 10.012-4.768 10.012-10.649 0-5.881-4.483-10.648-10.012-10.648-5.529 0-10.011 4.767-10.011 10.648 0 5.881 4.482 10.649 10.011 10.649ZM312.559 149.08c2.494 0 4.515-2.15 4.515-4.802 0-2.652-2.021-4.802-4.515-4.802-2.493 0-4.515 2.15-4.515 4.802 0 2.652 2.022 4.802 4.515 4.802ZM297.837 227.588c4.12 0 7.459-3.552 7.459-7.934s-3.339-7.935-7.459-7.935c-4.12 0-7.459 3.553-7.459 7.935s3.339 7.934 7.459 7.934ZM226.385 116.926c4.12 0 7.459-3.552 7.459-7.934s-3.339-7.935-7.459-7.935c-4.119 0-7.459 3.553-7.459 7.935s3.34 7.934 7.459 7.934Z"
      />
      <Path
        fill="#0C0C0C"
        d="m162 384.603-7.459-4.594-7.46 4.594v-29.232H162v29.232Z"
        opacity={0.14}
      />
    </G>
    <Defs></Defs>
  </Svg>
)