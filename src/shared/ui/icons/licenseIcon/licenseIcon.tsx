import type { SVGProps } from "react";

export function IconLicense(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="90"
      height="110"
      viewBox="0 0 90 110"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {/* Контур документа */}
      <path
        d="
          M48 98
          H14
          C10.7 98 8 95.3 8 92
          V12
          C8 8.7 10.7 6 14 6
          H74
          C77.3 6 80 8.7 80 12
          V92
          C80 95 78 97 75 97
        "
      />

      {/* Медицинский крест */}
      <path
        d="
          M41 16
          H47
          V23
          H54
          V29
          H47
          V36
          H41
          V29
          H34
          V23
          H41
          V16
          Z
        "
      />

      {/* Строки документа */}
      <path
        d="
          M22 47H67
          M22 60H67
          M22 72H39
          M22 84H39
        "
      />

      {/* Ленты печати */}
      <path
        d="
          M55 90
          L53 105
          L61 100
          L66 106
          L67 93

          M67 92
          L73 103
          L73 90
        "
      />

      {/* Внешний контур печати */}
      <path
        d="
          M63 69
          C70 69 75 74 75 81
          C75 88 70 93 63 93
          C56 93 51 88 51 81
          C51 74 56 69 63 69
          Z
        "
      />

      {/* Внутренний контур печати */}
      <path
        d="
          M63 73
          C67.4 73 71 76.6 71 81
          C71 85.4 67.4 89 63 89
          C58.6 89 55 85.4 55 81
          C55 76.6 58.6 73 63 73
          Z
        "
      />
    </svg>
  );
}