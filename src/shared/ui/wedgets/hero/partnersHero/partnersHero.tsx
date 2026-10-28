import styles from "./partnersHero.module.css";
import { IconPartners } from "@/shared/ui/icons/pathersIcon";

export function PartnersHero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="partners-hero-title"
    >
      <div className={styles.container}>
        <nav
          className={styles.breadcrumbs}
          aria-label="Хлебные крошки"
        >
          <a href="/">Главная</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Партнёры</span>
        </nav>

        <div className={styles.content}>
          <h1
            id="partners-hero-title"
            className={styles.title}
          >
            Партнёры
          </h1>

          <p className={styles.description}>
            Лаборатории, медицинские организации
            <br />
            и страховые компании
          </p>
        </div>

        <div
          className={styles.decoration}
          aria-hidden="true"
        >
          <span className={styles.shapeFirst} />
          <span className={styles.shapeSecond} />

          <div className={styles.icon}>
            <IconPartners />
          </div>
        </div>
      </div>
    </section>
  );
}