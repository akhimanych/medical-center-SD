import type { SVGProps } from 'react';

type HeartPulseIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function HeartPulseIcon({
  size = 32,
  ...props
}: HeartPulseIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M24 41.5C21.8 39.6 9 29.6 9 19.2C9 13.4 13.5 9 19.2 9C22.2 9 24.9 10.4 26.5 12.8C28.1 10.4 30.8 9 33.8 9C39.5 9 44 13.4 44 19.2C44 29.6 31.2 39.6 29 41.5L26.5 43.6L24 41.5Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M13.5 25H18.8L21.5 20L25 30.5L28.2 23.8L30.4 26.2H36"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}