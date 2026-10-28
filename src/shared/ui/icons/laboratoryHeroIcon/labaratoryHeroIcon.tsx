import type { SVGProps } from "react";

export function LaboratoryIcon(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="400"
      height="280"
      viewBox="0 0 400 280"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {/* Фон иллюстрации */}
      <path
        d="
          M336 142
          A116 116 0 1 1 104 142
          A116 116 0 1 1 336 142
          Z
        "
        fill="#DCEFE3"
      />

      <path
        d="
          M358 68
          A48 48 0 1 1 262 68
          A48 48 0 1 1 358 68
          Z
        "
        fill="#E4F3EA"
      />

      <g
        stroke="#299B66"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Левая пробирка */}
        <g transform="translate(120 42) rotate(-12 30 90)">
          <path
            d="
              M14 20
              V168
              C14 179.046 22.954 188 34 188
              C45.046 188 54 179.046 54 168
              V20
              Z
            "
            fill="#FFFFFF"
          />

          <path
            d="
              M14 104
              V168
              C14 179.046 22.954 188 34 188
              C45.046 188 54 179.046 54 168
              V104
              Z
            "
            fill="#A5DDBB"
          />

          <path
            d="
              M11 4
              H57
              A5 5 0 0 1 62 9
              V17
              A5 5 0 0 1 57 22
              H11
              A5 5 0 0 1 6 17
              V9
              A5 5 0 0 1 11 4
              Z
            "
            fill="#C1E6CE"
          />

          <path d="M25 52H39M25 76H39" />
        </g>

        {/* Правая пробирка */}
        <g transform="translate(228 66) rotate(12 30 90)">
          <path
            d="
              M14 20
              V168
              C14 179.046 22.954 188 34 188
              C45.046 188 54 179.046 54 168
              V20
              Z
            "
            fill="#FFFFFF"
          />

          <path
            d="
              M14 88
              V168
              C14 179.046 22.954 188 34 188
              C45.046 188 54 179.046 54 168
              V88
              Z
            "
            fill="#A5DDBB"
          />

          <path
            d="
              M11 4
              H57
              A5 5 0 0 1 62 9
              V17
              A5 5 0 0 1 57 22
              H11
              A5 5 0 0 1 6 17
              V9
              A5 5 0 0 1 11 4
              Z
            "
            fill="#C1E6CE"
          />

          <path d="M25 48H39M25 68H39" />
        </g>
      </g>

      {/* Декоративные элементы */}
      <path
        d="M76 82H96M86 72V92M325 180H345M335 170V190"
        stroke="#83BD99"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="
          M97 190
          A5 5 0 1 1 87 190
          A5 5 0 1 1 97 190
          Z
        "
        fill="#A5DDBB"
      />

      <path
        d="
          M298 30
          A4 4 0 1 1 290 30
          A4 4 0 1 1 298 30
          Z
        "
        fill="#83BD99"
      />
    </svg>
  );
}