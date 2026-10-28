import { useId } from "react";
import styles from "./aboutCenterContent.module.css";

type Photo = { src: string; alt?: string };
export type AboutCenterImages = {
  ultrasound: Photo;
  diagnostics: Photo;
  consultation: Photo;
  procedure: Photo;
  bloodCollection: Photo;
  tubes: Photo;
  gynecology: Photo;
};
export type AboutCenterContentProps = {
  images: AboutCenterImages;
  links: { doctors: string; services: string; contacts: string };
  galleryId?: string;
};
function PhotoCard({
  photo,
  caption,
  tall = false,
}: {
  photo: Photo;
  caption: string;
  tall?: boolean;
}) {
  return (
    <figure className={`${styles.photoCard} ${tall ? styles.tallCard : ""}`}>
      <div className={styles.imageWrap}>
        <img
          src={photo.src}
          alt={photo.alt ?? caption}
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}
function Arrow() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </svg>
  );
}
function FolderIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 29H7V7h10l4 5h10v6" />
      <path d="M14 34V16h9l4 4h8v14H14Z" />
    </svg>
  );
}
export function AboutCenterContent({
  images,
  links,
  galleryId = "center-gallery",
}: AboutCenterContentProps) {
  const id = useId();
  return (
    <div className={styles.content}>
      <section className={styles.introGrid} aria-labelledby={`${id}-about`}>
        <div className={styles.introText}>
          <h2 className={styles.heading} id={`${id}-about`}>
            О нашем центре
          </h2>
          <p>
            Познакомьтесь с пространством центра перед посещением. Ниже
            представлены фотографии и иллюстрации кабинетов.
          </p>
        </div>
        <aside className={styles.visitCard} aria-labelledby={`${id}-visit`}>
          <div className={styles.visitIcon}>
            <FolderIcon />
          </div>
          <div className={styles.visitContent}>
            <h3 id={`${id}-visit`}>Всё для вашего визита</h3>
            <nav aria-label="Информация для посещения центра">
              <a href={links.doctors}>
                Наши врачи <Arrow />
              </a>
              <a href={links.services}>
                Услуги и цены <Arrow />
              </a>
              <a href={links.contacts}>
                Как добраться <Arrow />
              </a>
            </nav>
          </div>
        </aside>
      </section>
      <section
        id={galleryId}
        className={styles.gallerySection}
        aria-labelledby={`${id}-gallery`}
      >
        <h2 className={styles.heading} id={`${id}-gallery`}>
          Кабинеты и пространство центра
        </h2>
        <p className={styles.subtitle}>Иллюстрации интерьеров и оборудования</p>
        <div className={styles.topGrid}>
          <PhotoCard photo={images.ultrasound} caption="Кабинет УЗИ" />
          <PhotoCard
            photo={images.diagnostics}
            caption="Функциональная диагностика"
          />
          <PhotoCard
            photo={images.consultation}
            caption="Кабинет приёма врача"
          />
        </div>
        <div className={styles.bottomGrid}>
          <PhotoCard
            photo={images.procedure}
            caption="Процедурный кабинет"
            tall
          />
          <div className={styles.middleStack}>
            <PhotoCard
              photo={images.bloodCollection}
              caption="Кабинет забора крови"
            />
            <PhotoCard
              photo={images.tubes}
              caption="Материалы для забора анализов"
            />
          </div>
          <PhotoCard
            photo={images.gynecology}
            caption="Гинекологический кабинет"
            tall
          />
        </div>
        <p className={styles.disclaimer}>
          Изображения кабинетов носят иллюстративный характер.
        </p>
      </section>
    </div>
  );
}
