import type { ReactNode } from "react";

import {
  IconMinzdrav,
  IconMedicalCrossAuthority,
  IconRoszdravnadzor,
  IconRospotrebnadzor,
} from "@/shared/ui/icons/authoritiesIcon";

import styles from "./AuthoritiesContent.module.css";

export type AuthorityItem = {
  id: string;
  name: string;
  href: string;
  icon: ReactNode;
};

const federal: AuthorityItem[] = [
  {
    id: "minzdrav",
    name: "Министерство здравоохранения РФ",
    href: "https://minzdrav.gov.ru/",
    icon: <IconMinzdrav />,
  },
  {
    id: "ffoms",
    name: "Федеральный фонд ОМС",
    href: "https://www.ffoms.gov.ru/",
    icon: <IconMedicalCrossAuthority />,
  },
  {
    id: "roszdravnadzor",
    name: "Росздравнадзор",
    href: "https://roszdravnadzor.gov.ru/",
    icon: <IconRoszdravnadzor />,
  },
  {
    id: "rospotrebnadzor",
    name: "Роспотребнадзор",
    href: "https://rospotrebnadzor.ru/",
    icon: <IconRospotrebnadzor />,
  },
];

const regional: AuthorityItem[] = [
  {
    id: "regional-minzdrav",
    name: "Министерство здравоохранения Архангельской области",
    href: "https://minzdrav29.ru/",
    icon: <IconMinzdrav />,
  },
  {
    id: "tfoms",
    name: "Территориальный фонд ОМС Архангельской области",
    href: "https://www.arhofoms.ru/",
    icon: <IconMedicalCrossAuthority />,
  },
  {
    id: "regional-roszdravnadzor",
    name: "Территориальный орган Росздравнадзора Архангельской области",
    href: "https://29reg.roszdravnadzor.gov.ru/",
    icon: <IconRoszdravnadzor />,
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M14 4h6v6M20 4 10 14" />
      <path d="M10 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5" />
    </svg>
  );
}

function ClinicalRecommendationsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      viewBox="0 0 64 64"
      fill="none"
      stroke="#18A85A"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M32 15C25 10 17 9 10 11V49C18 47 25 49 32 53" />
      <path d="M32 15C39 10 47 9 54 11V49C46 47 39 49 32 53" />
      <path d="M32 15V53" />
      <path d="M10 16H5V56C15 53 24 54 32 58C40 54 49 53 59 56V16H54" />
    </svg>
  );
}

function AuthorityCard({ name, href, icon }: AuthorityItem) {
  return (
    <li className={styles.card}>
      <div className={styles.authorityIcon} aria-hidden="true">
        {icon}
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{name}</h3>

        <a
          className={styles.button}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Перейти на сайт: ${name} (откроется в новой вкладке)`}
        >
          <span>Перейти на сайт</span>
          <ExternalLinkIcon />
        </a>
      </div>
    </li>
  );
}

export function AuthoritiesContent() {
  return (
    <div className={styles.content}>
      <section
        className={styles.section}
        aria-labelledby="federal-authorities-title"
      >
        <h2 id="federal-authorities-title" className={styles.sectionTitle}>
          Федеральные органы
        </h2>

        <ul className={styles.grid}>
          {federal.map((item) => (
            <AuthorityCard key={item.id} {...item} />
          ))}
        </ul>
      </section>

      <section
        className={styles.section}
        aria-labelledby="regional-authorities-title"
      >
        <h2 id="regional-authorities-title" className={styles.sectionTitle}>
          Региональные органы
        </h2>

        <ul className={styles.grid}>
          {regional.map((item) => (
            <AuthorityCard key={item.id} {...item} />
          ))}
        </ul>
      </section>

      <section
        className={styles.resource}
        aria-labelledby="clinical-resources-title"
      >
        <div className={styles.resourceIcon} aria-hidden="true">
          <ClinicalRecommendationsIcon />
        </div>

        <h2 id="clinical-resources-title" className={styles.resourceTitle}>
          Стандарты и клинические рекомендации
        </h2>

        <a
          className={styles.button}
          href="https://cr.minzdrav.gov.ru/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Открыть рубрикатор клинических рекомендаций (в новой вкладке)"
        >
          <span>Открыть ресурс</span>
          <ExternalLinkIcon />
        </a>
      </section>
    </div>
  );
}
