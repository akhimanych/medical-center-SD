import { useId, type ReactNode } from "react";
import { Link } from "react-router";

import { DoctorsHeroIcon } from "@/shared/ui/icons/doctorsHero";

import styles from "./doctorsHero.module.css";

type DoctorsHeroProps = {
  title?: ReactNode;
  description?: string;
  specializationTitle?: string;
};

export function DoctorsHero({
  title = (
    <>
      Выберите
      <br />
      специальность
    </>
  ),
  description = "Найдите нужного специалиста и познакомьтесь с врачами центра.",
  specializationTitle,
}: DoctorsHeroProps) {
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

            {specializationTitle ? (
              <>
                <Link
                  className={styles.homeLink}
                  to="/doctors"
                >
                  Врачи
                </Link>

                <span aria-hidden="true">/</span>

                <span aria-current="page">
                  {specializationTitle}
                </span>
              </>
            ) : (
              <span aria-current="page">Врачи</span>
            )}
          </nav>

          <p className={styles.eyebrow}>
            НАШИ СПЕЦИАЛИСТЫ
          </p>

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
          <div className={styles.doctor}>
            <DoctorsHeroIcon />
          </div>
        </div>
      </div>
    </section>
  );
}