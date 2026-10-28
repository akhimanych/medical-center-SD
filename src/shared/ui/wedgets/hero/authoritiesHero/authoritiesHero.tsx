import { IconHealthcareAuthority } from "@/shared/ui/icons/healthcareAuthorityIcon";

import styles from "./authoritiesHero.module.css";

export function AuthoritiesHero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="authorities-hero-title"
    >
      <div className={styles.content}>
        <nav className={styles.breadcrumbs} aria-label="Хлебные крошки">
          <ol>
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/about">О нас</a>
            </li>
            <li aria-current="page">Контролирующие органы</li>
          </ol>
        </nav>

        <h1 id="authorities-hero-title" className={styles.title}>
          Контролирующие
          <br />
          органы
        </h1>

        <p className={styles.description}>
          Официальные ресурсы в сфере здравоохранения.
        </p>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <span className={styles.ovalFirst} />
        <span className={styles.ovalSecond} />

        <IconHealthcareAuthority className={styles.icon} />
      </div>
    </section>
  );
}