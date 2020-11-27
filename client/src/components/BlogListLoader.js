import React from "react";
import ContentLoader from "react-content-loader";

export default props => (
  <div style={{ marginTop: 10 }}>
    <ContentLoader
      height={500}
      width={500}
      speed={2}
      primaryColor="#222"
      secondaryColor="#111"
      {...props}
    >
      {Array(20).fill(0).map((_, idx) => (
        <rect x="0" y={(idx * 40 - (idx % 2) * 10) + 20} rx="3" ry="3" width={idx % 2 ? 250 : 500} height="14" />
      ))} 
    </ContentLoader>
  </div>
);
