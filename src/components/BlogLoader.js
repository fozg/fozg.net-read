import React from "react";
import ContentLoader from "react-content-loader";

export default props => (
  <div style={{marginTop: 10}}>
  <ContentLoader
    height={170}
    width={500}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="300" height="25" />
    <rect x="0" y="35" rx="13" ry="13" width="26" height="26" />
    <rect x="34" y="40" rx="3" ry="3" width="100" height="16" />
    <rect x="0" y="75" rx="3" ry="3" width="500" height="14" />
    <rect x="0" y="100" rx="3" ry="3" width="500" height="14" />
    <rect x="0" y="125" rx="3" ry="3" width="500" height="14" />
    <rect x="0" y="150" rx="3" ry="3" width="250" height="14" />
  </ContentLoader>
  </div>
);
