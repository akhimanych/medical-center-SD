import { useId } from "react";
import { Link } from "react-router";

import styles from "./footer.module.css";
import { Button } from "@/shared/ui/Button";
import { Faq } from "@/shared/ui/wedgets/faq";

type FooterProps = {
  imageSrc?: string;
  directionsUrl?: string;
  licenseUrl?: string;
  privacyPolicyUrl?: string;
  personalDataConsentUrl?: string;
  cookiePolicyUrl?: string;
};

export function Footer({
  imageSrc,
  directionsUrl,
  licenseUrl = "/licenses",
  privacyPolicyUrl = "/documents/privacy-policy.pdf",
  personalDataConsentUrl = "/documents/personal-data-consent.pdf",
  cookiePolicyUrl = "/documents/usloviya-ispol-zovaniya-cookie-fai-lov.pdf",
}: FooterProps) {
  const contactTitleId = useId();
  const documents = [
    { title: "Политика обработки персональных данных", url: privacyPolicyUrl },
    {
      title: "Согласие на обработку персональных данных",
      url: personalDataConsentUrl,
    },
    { title: "Условия использования cookie-файлов", url: cookiePolicyUrl },
  ];

  return (
    <footer className={styles.footer} id="contacts">
      <div className={styles.container}>
        <div className={styles.topGrid}>
          <div className={styles.faqCard}>
            <Faq />
          </div>

          <section
            className={styles.contactCard}
            aria-labelledby={contactTitleId}
          >
            <div className={styles.info}>
              <p className={styles.eyebrow}>Контакты</p>
              <h2 className={styles.title} id={contactTitleId}>
                Мы всегда на связи
              </h2>
              <address className={styles.contacts}>
                <div className={styles.contactItem}>
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
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
                  <p className={styles.contactText}>
                    г. Северодвинск, Железнодорожная ул., 34
                  </p>
                </div>

                <div className={styles.contactItem}>
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="m7 3 3 5-2 2a15 15 0 0 0 6 6l2-2 5 3-1 3c-.3.8-1.1 1.2-2 1C10 20 4 14 3 6c-.2-.9.2-1.7 1-2l3-1Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className={styles.phoneGroup}>
                    <a className={styles.contactLink} href="tel:+78184548080">
                      +7 (818) 454-80-80
                    </a>
                    <a className={styles.contactLink} href="tel:+79502500333">
                      +7 (950) 250-03-33
                    </a>
                    <p className={styles.contactHint}>
                      ПН–ПТ: 8:00–20:00
                      <br />
                      СБ: 8:00–18:00
                    </p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M3 5h18v14H3V5Zm0 1 9 7 9-7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a
                    className={styles.contactLink}
                    href="mailto:semdokt@mail.ru"
                  >
                    semdokt@mail.ru
                  </a>
                </div>
              </address>
            </div>

            <div className={styles.visual}>
              {imageSrc ? (
                <img
                  className={styles.image}
                  src={imageSrc}
                  alt="Медицинский центр Семейный доктор"
                  loading="lazy"
                />
              ) : (
                <div className={styles.imagePlaceholder}>
                  Фото медицинского центра
                </div>
              )}
              <Button
                className={styles.directionsButton}
                type="button"
                variant="outline"
                disabled={!directionsUrl}
                onClick={() => {
                  if (directionsUrl)
                    window.open(directionsUrl, "_blank", "noopener,noreferrer");
                }}
              >
                Как добраться<span aria-hidden="true">↗</span>
              </Button>
            </div>
          </section>
        </div>

        <section
          className={styles.legalSection}
          aria-label="Правовая информация"
        >
          <div className={styles.licenseRow}>
            <div className={styles.licenseInfo}>
              <span className={styles.documentIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" focusable="false">
                  <path
                    d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-5-5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 3v5h5M9 12h6M9 16h6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className={styles.licenseContent}>
                <p className={styles.licenseLabel}>Медицинская деятельность</p>
                {licenseUrl ? (
                  <Link className={styles.licenseLink} to={licenseUrl}>
                    Лицензия ЛО-29-01-002417 от 02.03.2018
                  </Link>
                ) : (
                  <p className={styles.licenseText}>
                    Лицензия ЛО-29-01-002417 от 02.03.2018
                  </p>
                )}
              </div>
            </div>
            <span className={styles.patientBadge}>
              Информация для пациентов
            </span>
          </div>

          <ul className={styles.documentList} aria-label="Документы">
            {documents.map(({ title, url }) => (
              <li key={title}>
                {url ? (
                  <a
                    className={styles.documentLink}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {title}
                  </a>
                ) : (
                  <span className={styles.documentText}>{title}</span>
                )}
              </li>
            ))}
          </ul>

          <div className={styles.warning}>
            <p className={styles.warningTitle}>
              Имеются противопоказания.
              <br className={styles.warningBreak} /> Необходима консультация
              специалиста
            </p>
            <p className={styles.disclaimer}>
              Обращаем ваше внимание на то, что данный интернет-сайт носит
              исключительно информационный характер и ни при каких условиях не
              является публичной офертой, определяемой положениями ч. 2 ст. 437
              Гражданского кодекса Российской Федерации. Для получения подробной
              информации о стоимости и сроках выполнения услуг, пожалуйста,
              обращайтесь непосредственно к специалистам компании.
            </p>
          </div>

          <div className={styles.bottomRow}>
            <p>Медицинский центр «Семейный доктор»</p>
            <p>г. Северодвинск</p>
          </div>
        </section>
      </div>
    </footer>
  );
}
