import type { SVGProps } from "react";

export function IconDocuments(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="96"
      viewBox="0 0 80 96"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {/* Задний лист */}
      <path
        d="
          M66 18
          H70
          C72.8 18 75 20.2 75 23
          V85
          C75 87.8 72.8 90 70 90
          H29
          C26.2 90 24 87.8 24 85
          V84
        "
      />

      {/* Средний лист */}
      <path
        d="
          M61 11
          H63
          C65.8 11 68 13.2 68 16
          V78
          C68 80.8 65.8 83 63 83
          H22
          C19.2 83 17 80.8 17 78
          V77
        "
      />

      {/* Верхний край стопки */}
      <path
        d="
          M14 10
          V8
          C14 5.2 16.2 3 19 3
          H57
          C59.8 3 62 5.2 62 8
          V69
          C62 73.4 58.4 77 54 77
          H51
        "
      />

      {/* Передний документ */}
      <path
        d="
          M10 10
          H45
          L55 20
          V71
          C55 74.3 52.3 77 49 77
          H10
          C6.7 77 4 74.3 4 71
          V16
          C4 12.7 6.7 10 10 10
          Z
        "
      />

      {/* Загнутый угол */}
      <path
        d="
          M45 10
          V20
          H55
        "
      />

      {/* Медицинский крест */}
      <path
        d="
          M26 22
          H32
          V29
          H39
          V35
          H32
          V42
          H26
          V35
          H19
          V29
          H26
          V22
          Z
        "
      />

      {/* Строки */}
      <path
        d="
          M16 51H44
          M16 59H44
          M16 67H35
        "
      />
    </svg>
  );
}