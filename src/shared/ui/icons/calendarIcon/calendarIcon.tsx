import type { SVGProps } from 'react';

type CalendarIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function CalendarIcon({
  size = 64,
  ...props
}: CalendarIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient
          id="calendarIconGradient"
          x1="8"
          y1="6"
          x2="56"
          y2="58"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3FC47B" />
          <stop offset="1" stopColor="#18A85A" />
        </linearGradient>
      </defs>

      <circle
        cx="32"
        cy="32"
        r="32"
        fill="url(#calendarIconGradient)"
      />

      <circle
        cx="20"
        cy="18"
        r="17"
        fill="#FFFFFF"
        opacity="0.1"
      />

      <rect
        x="17"
        y="20"
        width="30"
        height="27"
        rx="3"
        stroke="#FFFFFF"
        strokeWidth="2.4"
      />

      <path
        d="M17 28H47"
        stroke="#FFFFFF"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      <path
        d="M24 16V23"
        stroke="#FFFFFF"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      <path
        d="M40 16V23"
        stroke="#FFFFFF"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      <circle cx="24" cy="34" r="1.7" fill="#FFFFFF" />
      <circle cx="32" cy="34" r="1.7" fill="#FFFFFF" />
      <circle cx="40" cy="34" r="1.7" fill="#FFFFFF" />

      <circle cx="24" cy="41" r="1.7" fill="#FFFFFF" />
      <circle cx="32" cy="41" r="1.7" fill="#FFFFFF" />
      <circle cx="40" cy="41" r="1.7" fill="#FFFFFF" />
    </svg>
  );
}