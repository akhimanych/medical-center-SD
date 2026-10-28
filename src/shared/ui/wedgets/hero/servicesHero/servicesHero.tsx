import { useId, type ReactNode } from "react";
import { Link } from "react-router";

import styles from "./servicesHero.module.css";

type ServicesHeroProps = {
  children: ReactNode;
  title?: string;
  description?: string;
  isDetails?: boolean;
};

export function ServicesHero({
  children,
  title = "Медицинские услуги",
  description = "Полный спектр медицинской помощи для взрослых и детей",
  isDetails = false,
}: ServicesHeroProps) {
  const titleId = useId();

  return (
    <section
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <nav
            className={styles.breadcrumbs}
            aria-label="Хлебные крошки"
          >
            <Link className={styles.homeLink} to="/">
              Главная
            </Link>

            <span aria-hidden="true">/</span>

            {isDetails ? (
              <>
                <Link
                  className={styles.homeLink}
                  to="/services"
                >
                  Услуги
                </Link>

                <span aria-hidden="true">/</span>

                <span aria-current="page">
                  {title}
                </span>
              </>
            ) : (
              <span aria-current="page">Услуги</span>
            )}
          </nav>

          {isDetails && (
            <p className={styles.eyebrow}>
              НАШИ УСЛУГИ
            </p>
          )}

          <h1 className={styles.title} id={titleId}>
            {title}
          </h1>

          {description && (
            <p className={styles.description}>
              {description}
            </p>
          )}
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.heart}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}