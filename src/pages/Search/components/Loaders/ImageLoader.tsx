import React from "react";
import ContentLoader from "react-content-loader";

const ImageLoader = () => (
  <ContentLoader 
    speed={2}
    width={350}
    height={460}
    viewBox= "0 0 350 460"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="30" y="23" rx="6" ry="6" width="284" height="284" /> 
    <rect x="30" y="326" rx="6" ry="6" width="155" height="48" />
  </ContentLoader>
)

export default ImageLoader