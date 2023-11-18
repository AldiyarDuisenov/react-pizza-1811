import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="130" r="130" />
    <rect x="10" y="275" rx="5" ry="5" width="260" height="28" />
    <rect x="10" y="323" rx="5" ry="5" width="260" height="88" />
    <rect x="10" y="431" rx="5" ry="5" width="100" height="32" />
    <rect x="150" y="425" rx="20" ry="20" width="120" height="40" />
  </ContentLoader>
);

export default Skeleton;
