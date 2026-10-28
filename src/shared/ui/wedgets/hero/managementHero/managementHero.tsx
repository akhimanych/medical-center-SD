import { Link } from "react-router";

import styles from "./managementHero.module.css";

function ManagementTeamIcon() {
  return (
    <svg
      className={styles.teamIcon}
      xmlns="http://www.w3.org/2000/svg"
      width="320"
      height="220"
      viewBox="0 0 320 220"
      fill="none"
      stroke="currentColor"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {/* Руководитель слева */}
      <path d="M80 108a23 23 0 1 0 0-46 23 23 0 1 0 0 46Z" />

      <path d="M36 164v-9c0-24 17-40 37-44" />
      <path d="m74 114-8 17 17 17 8-34" />
      <path d="m68 132 7 3" />

      {/* Главный врач */}
      <path d="M161 89a29 29 0 1 0 0-58 29 29 0 1 0 0 58Z" />

      <path d="M104 169v-17c0-29 17-47 42-52l15 31 16-31c25 5 42 23 42 52v17" />

      {/* Стетоскоп */}
      <path d="M134 105v25" />
      <path d="M124 153v-13a10 10 0 0 1 20 0v13" />
      <path d="M124 153h3M144 153h-3" />

      <path d="M189 107v25" />
      <path d="M189 149a9 9 0 1 0 0-18 9 9 0 1 0 0 18Z" />

      {/* Старшая медицинская сестра */}
      <path d="M226 92a23 23 0 1 0 46 0" />

      <path d="m228 87-2-21c12-8 32-8 46 0l-3 21c-13-5-27-5-41 0Z" />
      <path d="M249 67v11M243.5 72.5h11" />

      <path d="m233 118 16 24 15-24" />
      <path d="M266 119c16 5 25 20 25 41v5" />
    </svg>
  );
}

export function ManagementHero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="management-hero-title"
    >
      <div className={styles.content}>
        <nav
          className={styles.breadcrumbs}
          aria-label="Хлебные крошки"
        >
          <ol>
            <li>
              <Link to="/">Главная</Link>
            </li>

            <li>
              <Link to="/about">О нас</Link>
            </li>

            <li aria-current="page">Руководство</li>
          </ol>
        </nav>

        <h1
          className={styles.title}
          id="management-hero-title"
        >
          Руководство
        </h1>

        <p className={styles.description}>
          Команда, которая отвечает за работу центра
          и организацию медицинской помощи.
        </p>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <span className={styles.ovalFirst} />
        <span className={styles.ovalSecond} />

        <ManagementTeamIcon />
      </div>
    </section>
  );
}