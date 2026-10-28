import type { SVGProps } from "react";

type AdministratorIconProps = SVGProps<SVGSVGElement>;

export function AdministratorIcon({
  width = 56,
  height = 64,
  ...props
}: AdministratorIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 64 72"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Волосы */}
        <path d="M12 39V26C12 13 20 5 32 5C44 5 52 13 52 26V39" />

        <path d="M17 32V25C17 15 23 9 32 9C41 9 47 15 47 25V32" />

        {/* Лицо */}
        <path
          d="M20 27C25 27 30 24 33 18C36 23 40 26 44 27V40C44 49 39 56 32 56C25 56 20 49 20 40V27Z"
        />

        {/* Глаза */}
        <path d="M25 34H28M36 34H39" />

        {/* Нос */}
        <path d="M32 37V42" />

        {/* Улыбка */}
        <path d="M28 47C30 49 34 49 36 47" />

        {/* Левая часть гарнитуры */}
        <path
          d="M12 29C9.8 29 8 30.8 8 33V40C8 42.2 9.8 44 12 44C14.2 44 16 42.2 16 40V33C16 30.8 14.2 29 12 29Z"
        />

        {/* Правая часть гарнитуры */}
        <path
          d="M52 29C49.8 29 48 30.8 48 33V40C48 42.2 49.8 44 52 44C54.2 44 56 42.2 56 40V33C56 30.8 54.2 29 52 29Z"
        />

        {/* Дужка микрофона */}
        <path d="M52 44V48C52 53 47 56 41 56" />

        {/* Микрофон */}
        <path
          d="M35.5 53H38.5C39.9 53 41 54.1 41 55.5C41 56.9 39.9 58 38.5 58H35.5C34.1 58 33 56.9 33 55.5C33 54.1 34.1 53 35.5 53Z"
        />

        {/* Шея */}
        <path d="M25 54V60M39 54V60" />

        {/* Плечи и воротник */}
        <path
          d="M7 69C8 61 14 56 25 56L32 64L39 56C50 56 56 61 57 69"
        />
      </g>
    </svg>
  );
}