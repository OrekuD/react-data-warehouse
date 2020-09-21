import React from "react";

interface Props {
  size: number;
  color?: string;
}

export const Logo = ({ size }: Props) => (
  <svg
    width={size}
    height={size * 0.72}
    viewBox="0 0 49 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="15" width="20" height="20" rx="10" fill="#9C69E2" />
    <rect x="29" width="20" height="35" rx="10" fill="#F063B8" />
  </svg>
);

export const ArrowRight = ({ size, color }: Props) => (
  <svg
    width={size}
    height={size * 0.73}
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.5">
      <path
        d="M15 15L21 8L15 1"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 8H1"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
);
