import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    className = "pizza-block"
    speed={2}
    width={220}
    height={495}
    viewBox="0 0 220 495"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="110" cy="100" r="100" /> 
    <rect x="0" y="220" rx="10" ry="10" width="220" height="54" /> 
    <rect x="0" y="403" rx="5" ry="5" width="220" height="27" /> 
    <rect x="0" y="445" rx="10" ry="10" width="220" height="45" /> 
    <rect x="0" y="295" rx="10" ry="10" width="220" height="88" />
  </ContentLoader>
)

export default Skeleton

