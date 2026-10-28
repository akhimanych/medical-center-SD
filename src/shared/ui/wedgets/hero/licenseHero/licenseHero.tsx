import { Link } from "react-router";

import { IconLicense } from "@/shared/ui/icons/licenseIcon";

import styles from "./licenseHero.module.css";

export function LicensesHero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="licenses-hero-title"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <nav
            className={styles.breadcrumbs}
            aria-label="Хлебные крошки"
          >
            <Link to="/">Главная</Link>

            <span aria-hidden="true">/</span>

            <span>О нас</span>

            <span aria-hidden="true">/</span>

            <span aria-current="page">Лицензии</span>
          </nav>

          <h1
            id="licenses-hero-title"
            className={styles.title}
          >
            Лицензии
          </h1>

          <p className={styles.description}>
            Документы на осуществление медицинской деятельности
          </p>
        </div>

        <div
          className={styles.decoration}
          aria-hidden="true"
        >
          <span className={styles.shapeFirst} />
          <span className={styles.shapeSecond} />

          <div className={styles.icon}>
            <IconLicense />
          </div>
        </div>
      </div>
    </section>
  );
}