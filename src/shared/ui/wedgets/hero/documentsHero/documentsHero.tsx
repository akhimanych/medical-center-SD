import { Link } from "react-router";

import { IconDocuments } from "@/shared/ui/icons/documentsIcon";

import styles from "./documentsHero.module.css";

export function DocumentsHero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="documents-hero-title"
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

            <span aria-current="page">Документы центра</span>
          </nav>

          <h1
            id="documents-hero-title"
            className={styles.title}
          >
            Документы центра
          </h1>

          <p className={styles.description}>
            Официальные документы и информация для пациентов
          </p>
        </div>

        <div
          className={styles.decoration}
          aria-hidden="true"
        >
          <span className={styles.shapeFirst} />
          <span className={styles.shapeSecond} />

          <div className={styles.icon}>
            <IconDocuments />
          </div>
        </div>
      </div>
    </section>
  );
}