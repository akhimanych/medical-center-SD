import type { ReactNode } from "react";

import type { IconProps } from "./types";

type IconBaseProps = Omit<IconProps, "children"> & {
  children: ReactNode;
};

function IconBase({
  children,
  width = 48,
  height = 48,
  viewBox = "0 0 48 48",
  fill = "none",
  stroke = "currentColor",
  strokeWidth = 1.8,
  strokeLinecap = "round",
  strokeLinejoin = "round",
  ...props
}: IconBaseProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function GynecologistIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="24" cy="19" r="9" />
      <path d="M24 28V40M19 35H29" />
    </IconBase>
  );
}

export function HirudotherapistIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M29.5 8.5C37 12 39.5 20.5 35.5 28.5C32.5 34.5 25.5 39 19 38.5C11.5 38 8.5 31 11.5 24.5C14.5 18 21 14 25.5 10.5C26.8 9.5 28 8.5 29.5 8.5Z" />
      <path d="M18 21C20 18.5 23.5 17 26.5 17.5M17.5 29C20.5 32 25.5 32.5 29 30" />
      <circle cx="29" cy="16" r="1" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function PediatricianIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="16" cy="15" r="4" />
      <circle cx="32" cy="15" r="4" />
      <circle cx="24" cy="24" r="13" />
      <circle cx="20" cy="23" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="28" cy="23" r="1.2" fill="currentColor" stroke="none" />
      <path d="M20 29C22 31 26 31 28 29" />
      <path d="M16 36C18 38 21 39 24 39C27 39 30 38 32 36" />
    </IconBase>
  );
}

export function AllergistIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="24" cy="24" r="3.5" />
      <path d="M24 8C28 12 28 16 24 20C20 16 20 12 24 8Z" />
      <path d="M40 24C36 28 32 28 28 24C32 20 36 20 40 24Z" />
      <path d="M24 40C20 36 20 32 24 28C28 32 28 36 24 40Z" />
      <path d="M8 24C12 20 16 20 20 24C16 28 12 28 8 24Z" />
      <circle cx="35" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="39" cy="16" r="1" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function GastroenterologistIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M23 9V18C23 22 26 24 30 24C34 24 37 27 37 31C37 36 33 40 28 40C21 40 14 35 14 27C14 22 17 19 20 17V9" />
      <path d="M20 17C18 20 18 23 20 25C22 27 25 27 28 27" />
    </IconBase>
  );
}

export function TherapistIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M18 10V20C18 23 20 25 23 25H26C30 25 33 28 33 32C33 36 30 39 26 39C22 39 19 36 19 32C19 29 21 27 24 27" />
      <path d="M18 10H24M18 14H22" />
      <circle cx="26" cy="32" r="4" />
      <path d="M31 13C35 15 37 18 37 22" />
    </IconBase>
  );
}

export function DermatovenerologistIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M14 30C14 21 18 14 24 14C30 14 34 21 34 30C34 35 30 39 24 39C18 39 14 35 14 30Z" />
      <path d="M18 23C20 21 22 20 24 20C26 20 28 21 30 23" />
      <circle cx="19" cy="29" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="25" cy="33" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="30" cy="28" r="1.4" fill="currentColor" stroke="none" />
      <path d="M10 12C12 14 12 16 10 18C8 16 8 14 10 12Z" />
    </IconBase>
  );
}

export function DermatologistIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M30 10C22 10 16 16 16 24C16 32 20 38 27 38C31 38 34 35 34 31C34 28 32 27 30 25C28 23 29 20 32 18C34 16 34 12 30 10Z" />
      <path d="M19 24C22 23 24 21 25 18" />
      <circle cx="25" cy="28" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="28.5" cy="32" r="1.2" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function CardiologistIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M24 39C21 36 10 28 10 19C10 14 13.5 11 18 11C20.8 11 23 12.5 24 15C25 12.5 27.2 11 30 11C34.5 11 38 14 38 19C38 28 27 36 24 39Z" />
      <path d="M12 24H19L21.5 20L25 29L28 24H36" />
    </IconBase>
  );
}

export function NeurologistIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M25 10C20 9 16 12 16 17C12 18 10 21 11 25C11 28 13 30 16 31C16 36 20 39 24 38C26 40 30 39 32 36C36 36 38 33 38 29C40 26 39 22 36 20C37 15 33 11 29 12C28 10 27 10 25 10Z" />
      <path d="M20 17C23 18 24 20 24 23V35M29 16C27 19 28 21 31 23M17 26C20 26 22 28 22 31M30 29C28 31 28 33 29 35" />
    </IconBase>
  );
}

export function OncologistIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M18 10C21 10 24 12 24 16C24 12 27 10 30 10C34 10 36 13 36 17C36 22 31 26 27 29L34 39H28L24 32L20 39H14L21 28C17 25 12 22 12 17C12 13 14 10 18 10Z" />
    </IconBase>
  );
}

export function OtolaryngologistIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M28 10C20 10 15 16 15 24C15 31 18 38 24 38C28 38 31 35 31 31C31 27 28 25 25 25C22 25 21 23 21 21C21 18 23 16 26 16C29 16 31 18 31 21" />
      <path d="M25 29C23 29 22 31 22 33C22 35 23 36 24 36" />
      <path d="M34 18C37 20 38 23 38 26M35 12C40 15 42 20 42 25" />
    </IconBase>
  );
}

export function OphthalmologistIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M8 24C12 16 17 12 24 12C31 12 36 16 40 24C36 32 31 36 24 36C17 36 12 32 8 24Z" />
      <circle cx="24" cy="24" r="6" />
      <circle cx="24" cy="24" r="2" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function PulmonologistIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M24 10V23" />
      <path d="M23 16C19 14 16 15 14 19C11 24 10 32 13 36C16 40 21 38 23 34L24 30" />
      <path d="M25 16C29 14 32 15 34 19C37 24 38 32 35 36C32 40 27 38 25 34L24 30" />
    </IconBase>
  );
}

export function TraumatologistOrthopedistIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M16 13C18 11 21 12 22 14L25 18C26 19 27 19 28 18L31 15C33 13 36 14 37 16C38 18 37 20 35 21L31 24C30 25 30 27 31 28L35 32C37 34 36 37 34 38C32 39 30 38 29 36L25 32C24 31 22 31 21 32L17 36C15 38 12 37 11 35C10 33 11 31 13 30L17 27C18 26 18 24 17 23L13 19C11 17 12 14 14 13C14.7 12.5 15.4 12.5 16 13Z" />
    </IconBase>
  );
}

export function EndocrinologistIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20 14C17 15 16 18 17 21C18 24 20 25 21 26C19 28 18 30 18 33C18 36 20 38 24 38C28 38 30 36 30 33C30 30 29 28 27 26C28 25 30 24 31 21C32 18 31 15 28 14C26 13 25 15 24 17C23 15 22 13 20 14Z" />
      <path d="M24 17V26M20 30H28" />
    </IconBase>
  );
}

export function UrologistIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M19 12C14 12 12 17 12 22C12 28 15 32 19 32C22 32 24 30 24 27V17C23 14 21 12 19 12Z" />
      <path d="M29 12C34 12 36 17 36 22C36 28 33 32 29 32C26 32 24 30 24 27V17C25 14 27 12 29 12Z" />
      <path d="M24 27V39" />
    </IconBase>
  );
}

export function SurgeonIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M11 36L29 18" />
      <path d="M28 13L35 20" />
      <path d="M30 11L37 18L33 22L26 15L30 11Z" />
      <path d="M10 38L15 37L12 33L10 38Z" />
      <path d="M18 29L22 33" />
    </IconBase>
  );
}

export function RheumatologistIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M18 37C15 35 14 32 15 29L18 21C19 18 22 18 23 20C24 21 24 23 23 25L22 28" />
      <path d="M22 28L25 19C26 16 29 16 30 18C31 19 31 21 30 23L28 29" />
      <path d="M28 29L31 23C32 21 35 22 36 24C37 25 36 27 35 29L31 36C29 39 24 40 20 38L18 37" />
      <path d="M12 14L15 17M12 20H16M36 13L33 17M39 20H35" />
    </IconBase>
  );
}
