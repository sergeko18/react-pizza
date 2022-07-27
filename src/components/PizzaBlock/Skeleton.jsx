import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="137" cy="140" r="130" /> 
    <rect x="0" y="317" rx="21" ry="21" width="282" height="88" /> 
    <rect x="0" y="276" rx="14" ry="14" width="280" height="27" /> 
    <rect x="125" y="415" rx="22" ry="22" width="152" height="45" /> 
    <rect x="14" y="426" rx="4" ry="4" width="78" height="27" />
  </ContentLoader>
)

export default Skeleton