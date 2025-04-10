import React from "react";

const FavoriteIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="30" height="30" fill="url(#pattern0_54_130)" />
      <defs>
        <pattern
          id="pattern0_54_130"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_54_130" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_54_130"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default FavoriteIcon;
