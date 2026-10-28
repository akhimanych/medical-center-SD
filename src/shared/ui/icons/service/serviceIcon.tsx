import type { SVGProps } from 'react';

const paths = {
  "lab-tests": "M22 8v26a10 10 0 0 0 20 0V8M18 8h28M22 24h20M26 35l4 3 5-5M15 54h34",
  "hirudotherapy": "M12 45c6-17 16-27 31-30 9-2 11 7 3 11-13 6-16 16-25 22-6 4-12 2-9-3ZM24 29l6 6m2-13 6 6m2-9 5 5m-26 12 5 5",
  "specialist-consultation": "M10 12v13a10 10 0 0 0 20 0V12M10 12h5m10 0h5M20 35v7a10 10 0 0 0 20 0v-5M45 32a5 5 0 1 1-10 0 5 5 0 1 1 10 0M39 10h15v13h-7l-5 5v-5h-3Z",
  "medication-blockade": "M17 40l23-23 10 10-23 23ZM36 13l18 18M44 9l11 11M50 14l-8 8M17 40l-6 13 13-6M28 29l7 7m-2-12 7 7",
  "orthopedics": "M19 11c-6-5-13 3-9 8 2 3 5 3 8 2l24 24c-1 3-1 6 2 8 5 4 13-3 8-9 6-5-1-13-7-9L21 15c1-3 1-6-2-7M27 25l7 3-4 6 8 4",
  "gynecology": "M24 30c-4-10-9-12-15-9m31 9c4-10 9-12 15-9M9 21c-5 2-4 9 2 9s9-4 13 0m31-9c5 2 4 9-2 9s-9-4-13 0M24 30c0 10 8 12 8 20 0-8 8-10 8-20M28 50h8",
  "dermatology": "M8 33c6-7 10 7 16 0s10 7 16 0 10 7 16 0M8 43h48M8 52h48M17 15v9m15-14v14m15-9v9",
  "oncology": "M24 11c8-6 19-1 17 9-2 11-13 22-22 34l-8-7c9-10 19-21 23-30 2-5-5-8-10-6ZM24 11c-9 11 7 29 22 43l8-7C41 34 30 22 30 16",
  "ent": "M21 23c0-18 27-19 27 0 0 12-12 12-13 23-1 10-14 9-14 0M28 24c0-9 13-10 13-1 0 7-10 8-10 15M25 35h7M13 20l-4 3m4 9H7m7 9-4 3",
  "ophthalmology": "M6 32s10-16 26-16 26 16 26 16-10 16-26 16S6 32 6 32ZM41 32a9 9 0 1 1-18 0 9 9 0 1 1 18 0M35 32a3 3 0 1 1-6 0 3 3 0 1 1 6 0",
  "urology": "M19 12c-13 0-16 28-4 30 9 2 13-8 8-13-5-4 2-17-4-17Zm26 0c13 0 16 28 4 30-9 2-13-8-8-13 5-4-2-17 4-17ZM23 35c5 0 5 8 5 12m13-12c-5 0-5 8-5 12M24 47h16c0 13-16 13-16 0Zm8 10v4",
  "surgery": "M13 49l23-23 7 7-23 23ZM36 26l10-16c4-6 12-3 10 3L43 33M13 49l-5 9 12-2M40 21l8 5",
  "checkups": "M24 12h-6a4 4 0 0 0-4 4v36a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V16a4 4 0 0 0-4-4h-6M24 7h16v10H24ZM22 29l3 3 6-7m5 4h7m-21 14 3 3 6-7m5 4h7",
  "treatment-room": "M19 16h26v38H19ZM24 8h16v8M26 32h12m-6-6v12M19 46h26",
  "other-services": "M15 18h34a5 5 0 0 1 5 5v26a5 5 0 0 1-5 5H15a5 5 0 0 1-5-5V23a5 5 0 0 1 5-5ZM23 18v-8h18v8M24 36h16m-8-8v16",
  "kinesio-taping": "M13 9l10 2 14 40-10 4ZM41 9l10 3-9 21-11-4ZM29 41l11-4 12 14-9 7ZM20 27l9-3m-5 15 9-3m3-15 10 4m-9 20 7-6",
  "ultrasound": "M10 9h30a3 3 0 0 1 3 3v22a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3ZM25 37v8m-10 0h20M14 27l5-7 7 9 7-13M45 31c12 0 13 12 5 15M43 46l8-2 5 12-10 3Z",
  "functional-diagnostics": "M10 12h44a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4ZM11 31h10l5-12 8 23 6-14h13M24 48v7m16-7v7M18 55h28",
  "aesthetic-gynecology": "M20 10c5 10 5 14 0 24-4 8-4 14 0 21M44 10c-5 10-5 14 0 24 4 8 4 14 0 21M20 34c7 5 17 5 24 0M47 8l2 5 5 2-5 2-2 5-2-5-5-2 5-2ZM30 43v8m-4-4h8"
} as const;

export type ServiceIconName = keyof typeof paths;

type ServiceIconProps = Omit<SVGProps<SVGSVGElement>, 'children'> & {
  name: ServiceIconName;
};

export function ServiceIcon({ name, width = 64, height = 64, ...props }: ServiceIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={width}
      height={height}
      fill="none"
      stroke="#18A85A"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}