import { useId } from "react";
import { AboutCenterHero } from "@/shared/ui/wedgets/hero/aboutCenterHero";
import { AboutCenterContent } from "@/shared/ui/wedgets/content/aboutCenterContent";
import type { AboutCenterImages } from "@/shared/ui/wedgets/content/aboutCenterContent";
import styles from "./aboutCenterPage.module.css";

import { Header } from "@/shared/ui/wedgets/header";
import { Footer } from "@/shared/ui/wedgets/footer";

import medicalCenterImage from "@/assets/images/medical-center.png";

const defaultImages: AboutCenterImages & {
  reception: { src: string; alt?: string };
} = {
  reception: {
    src: "/images/center/resepshen.jpg",
    alt: "Регистратура медицинского центра «Семейный доктор»",
  },
  ultrasound: { src: "/images/center/ultrasound-room.jpeg" },
  diagnostics: { src: "/images/center/functional-diagnostics-room.jpeg" },
  consultation: { src: "/images/center/consultation-room.jpeg" },
  procedure: { src: "/images/center/procedure-room.jpeg" },
  bloodCollection: { src: "/images/center/blood-collection-room.jpeg" },
  tubes: { src: "/images/center/blood-sample-tubes.jpeg" },
  gynecology: { src: "/images/center/gynecology-room.jpeg" },
};

const defaultLinks = {
  home: "/",
  doctors: "/doctors",
  services: "/services",
  contacts: "/contacts",
  documents: "/documents",
  patients: "/patients",
  taxdeduction: "/tax-deduction",
};

function handleDefaultBook() {
  window.alert(
    "Это предварительный просмотр. Запись на приём пока не подключена.",
  );
}

export type AboutCenterPageProps = {
  images?: typeof defaultImages;
  links?: typeof defaultLinks;
  onBook?: () => void;
};

function Icon({ type }: { type: "document" | "calendar" | "phone" }) {
  return (
    <svg
      className={styles.icon}
      width="38"
      height="38"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === "document" && (
        <>
          <path d="M8 3h11l6 6v20H8V3Z" />
          <path d="M19 3v7h6M12 15h9M12 20h9M12 25h6" />
        </>
      )}
      {type === "calendar" && (
        <>
          <rect x="4" y="6" width="24" height="23" rx="3" />
          <path d="M10 3v6M22 3v6M4 13h24M10 19h1M16 19h1M22 19h1M10 24h1M16 24h1M22 24h1" />
        </>
      )}
      {type === "phone" && (
        <path d="M8 4 4 8c-1 7 13 21 20 20l4-4-7-6-3 3c-3-1-6-4-7-7l3-3-6-7Z" />
      )}
    </svg>
  );
}

function Arrow() {
  return (
    <svg
      width="18"
      height="18"
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

export function AboutCenterPage({
  images = defaultImages,
  links = defaultLinks,
  onBook = handleDefaultBook,
}: AboutCenterPageProps = {}) {
  const id = useId();
  const cards = [
    {
      title: "Документы центра",
      description: "Лицензии и сведения об организации",
      href: links.documents,
      type: "document" as const,
    },
    {
      title: "Заказать справку",
      description: "Справка для налогового вычета",
      href: links.taxdeduction,
      type: "document" as const,
    },
    {
      title: "Контакты",
      description: "Как связаться с центром и найти нас",
      href: links.contacts,
      type: "phone" as const,
    },
  ];

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.container}>
          <AboutCenterHero
            imageSrc={images.reception.src}
            imageAlt={
              images.reception.alt ?? "Регистратура медицинского центра"
            }
            homeHref={links.home}
            galleryHref="#center-gallery"
            onBook={onBook}
          />
          <AboutCenterContent
            images={images}
            links={links}
            galleryId="center-gallery"
          />
          <section
            className={styles.information}
            aria-labelledby={`${id}-information`}
          >
            <h2 className={styles.heading} id={`${id}-information`}>
              Полезная информация
            </h2>
            <div className={styles.infoGrid}>
              {cards.map((card) => (
                <article className={styles.infoCard} key={card.type}>
                  <Icon type={card.type} />
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <a
                    href={card.href}
                    className={styles.infoLink}
                    aria-label={`Подробнее: ${card.title}`}
                  >
                    Подробнее <Arrow />
                  </a>
                </article>
              ))}
            </div>
          </section>
          <section className={styles.cta} aria-labelledby={`${id}-booking`}>
            <div className={styles.ctaIcon}>
              <Icon type="calendar" />
            </div>
            <div className={styles.ctaText}>
              <h2 id={`${id}-booking`}>Планируете посещение?</h2>
              <p>Выберите специалиста или перейдите к записи на приём.</p>
            </div>
            <div className={styles.ctaActions}>
              <button
                type="button"
                className={styles.bookButton}
                onClick={onBook}
              >
                Записаться
              </button>
              <a href={links.doctors}>
                Наши врачи <Arrow />
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer 
              imageSrc={medicalCenterImage}
        directionsUrl="https://yandex.ru/maps/-/CXeXNR6n"/>
    </>
  );
}
