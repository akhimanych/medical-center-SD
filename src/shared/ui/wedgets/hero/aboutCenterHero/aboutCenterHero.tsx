import { useId } from "react";
import styles from "./aboutCenterHero.module.css";

type AboutCenterHeroProps = {
  imageSrc: string;
  imageAlt?: string;
  homeHref?: string;
  galleryHref?: string;
  onBook?: () => void;
};

export function AboutCenterHero({
  imageSrc = "public/images/center/resepshen.jpg",
  imageAlt = "Регистратура медицинского центра «Семейный доктор»",
  homeHref = "/",
  galleryHref = "#center-gallery",
  onBook,
}: AboutCenterHeroProps) {
  const id = useId();
  return (
    <section className={styles.hero} aria-labelledby={id}>
      <nav className={styles.breadcrumbs} aria-label="Хлебные крошки">
        <ol>
          <li>
            <a href={homeHref}>Главная</a>
          </li>
          <li className={styles.separator} aria-hidden="true">
            /
          </li>
          <li aria-current="page">О центре</li>
        </ol>
      </nav>
      <div className={styles.card}>
        <div className={styles.content}>
          <h1 className={styles.title} id={id}>
            Медицинский центр
            <br />
            <span>«Семейный доктор»</span>
          </h1>
          <p className={styles.description}>
            Познакомьтесь с нашим центром и пространством,
            <br className={styles.desktopBreak} /> где проходят приёмы и
            процедуры.
          </p>
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.primaryButton}
              onClick={onBook}
              disabled={!onBook}
            >
              Записаться на приём
            </button>
            <a href={galleryHref} className={styles.galleryLink}>
              Посмотреть кабинеты
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 4v16m-6-6 6 6 6-6" />
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.imageWrap}>
          <img
            className={styles.image}
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={520}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
