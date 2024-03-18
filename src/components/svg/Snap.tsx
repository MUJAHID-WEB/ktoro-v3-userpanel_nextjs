import React from "react";

const Snap = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="40" height="40" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_5846_16716" transform="scale(0.015625)" />
        </pattern>
        <image
          id="image0_5846_16716"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Snap;
