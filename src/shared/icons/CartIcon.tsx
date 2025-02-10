import React from "react";

const CartIcon = () => {
  return (
    <svg
      width="63"
      height="64"
      viewBox="0 0 63 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        x="0.185547"
        y="0.458252"
        width="61.8326"
        height="62.7419"
        fill="url(#pattern0_74_665)"
      />
      <defs>
        <pattern
          id="pattern0_74_665"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_74_665"
            transform="matrix(0.01 0 0 0.00985507 0 0.00724637)"
          />
        </pattern>
        <image
          id="image0_74_665"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default CartIcon;
