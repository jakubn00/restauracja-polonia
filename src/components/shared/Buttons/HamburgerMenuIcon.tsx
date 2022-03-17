import React from "react";

interface IProps {
  isDarker?: boolean;
}

const HamburgerMenuIcon: React.FC<IProps> = ({ isDarker = true }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37.99"
      height="26.841"
      viewBox="0 0 37.99 26.841"
      cursor="pointer"
    >
      <g id="Group_5" data-name="Group 5" transform="translate(-285.01 -36.08)">
        <line
          id="Line_4"
          data-name="Line 4"
          x2="37.99"
          transform="translate(285.01 37.58)"
          fill="none"
          stroke={isDarker ? "#0a0a0a" : "#fff"}
          stroke-width="3"
        />
        <line
          id="Line_5"
          data-name="Line 5"
          x2="37.99"
          transform="translate(285.01 49.5)"
          fill="none"
          stroke={isDarker ? "#0a0a0a" : "#fff"}
          stroke-width="3"
        />
        <line
          id="Line_6"
          data-name="Line 6"
          x2="37.99"
          transform="translate(285.01 61.42)"
          fill="none"
          stroke={isDarker ? "#0a0a0a" : "#fff"}
          stroke-width="3"
        />
      </g>
    </svg>
  );
};

export default HamburgerMenuIcon;
