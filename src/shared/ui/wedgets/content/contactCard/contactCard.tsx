import { useId } from "react";
import type { SVGProps } from "react";

import styles from "./contactCard.module.css";

type ContactCardProps = {
  imageSrc?: string;
  directionsUrl?: string;
};

type IconProps = SVGProps<SVGSVGElement>;

function LocationIcon(props: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M12 21S5 14.5 5 9a7 7 0 1 1 14 0c0 5.5-7 12-7 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PhoneIcon(props: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="m7 3 3 5-2 2a15 15 0 0 0 6 6l2-2 5 3-1 3c-.3.8-1.1 1.2-2 1C10 20 4 14 3 6c-.2-.9.2-1.7 1-2l3-1Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon(props: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m3 6 9 7 9-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon(props: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 6v6l4 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ContactCard({ imageSrc, directionsUrl }: ContactCardProps) {
  const titleId = useId();

  return (
    <section className={styles.contactCard} aria-labelledby={titleId}>
      <div className={styles.info}>
        <h2 className={styles.title} id={titleId}>
          Мы всегда на связи
        </h2>

        <address className={styles.contacts}>
          <div className={styles.contactItem}>
            <LocationIcon className={styles.icon} />

            <p className={styles.contactText}>
              г. Северодвинск, Железнодорожная ул., 34
            </p>
          </div>

          <div className={styles.contactItem}>
            <PhoneIcon className={styles.icon} />

            <div className={styles.contactGroup}>
              <a className={styles.contactLink} href="tel:+78184548080">
                +7 (818) 454-80-80
              </a>

              <a className={styles.contactLink} href="tel:+79502500333">
                +7 (950) 250-03-33
              </a>
            </div>
          </div>

          <div className={styles.contactItem}>
            <MailIcon className={styles.icon} />

            <a className={styles.contactLink} href="mailto:semdoct@mail.ru">
              semdoct@mail.ru
            </a>
          </div>

          <div className={styles.contactItem}>
            <ClockIcon className={styles.icon} />

            <p className={styles.contactText}>
              ПН–ПТ: 8:00–20:00
              <br />
              СБ: 8:00–18:00
            </p>
          </div>
        </address>

        <a className={styles.callButton} href="tel:+78184548080">
          <PhoneIcon className={styles.buttonIcon} />
          Позвонить в центр
        </a>
      </div>

      <div className={styles.visual}>
        {imageSrc ? (
          <img
            className={styles.image}
            src={imageSrc}
            alt="Вход в медицинский центр Семейный доктор"
            loading="lazy"
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            Фото медицинского центра
          </div>
        )}

        {directionsUrl && (
          <a
            className={styles.directionsButton}
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Как добраться
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </section>
  );
}
