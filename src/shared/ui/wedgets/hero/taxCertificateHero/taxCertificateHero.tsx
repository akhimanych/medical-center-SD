import { Link } from "react-router";

import styles from "./taxCertificateHero.module.css";

function TaxCertificateIcon() {
  return (
    <svg
      className={styles.documentIcon}
      xmlns="http://www.w3.org/2000/svg"
      width="260"
      height="220"
      viewBox="0 0 260 220"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {/* Документ */}
      <path d="M147 25H73a9 9 0 0 0-9 9v152a9 9 0 0 0 9 9h111a9 9 0 0 0 9-9V71L147 25Z" />

      {/* Загнутый угол */}
      <path d="M147 25v37a9 9 0 0 0 9 9h37" />

      {/* Медицинский крест */}
      <path d="M99 61h17v17h17v17h-17v17H99V95H82V78h17Z" />

      {/* Строки документа */}
      <path d="M84 135h54M84 153h43M84 171h32" />

      {/* Подтверждение */}
      <path
        className={styles.checkBackground}
        d="M189 184a35 35 0 1 0 0-70 35 35 0 1 0 0 70Z"
      />

      <path d="m174 149 10 10 20-21" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 1 0 0 20Z" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export function TaxCertificateHero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="tax-certificate-hero-title"
    >
      <div className={styles.content}>
        <nav
          className={styles.breadcrumbs}
          aria-label="Хлебные крошки"
        >
          <ol>
            <li>
              <Link to="/">Главная</Link>
            </li>

            <li>
              <span>Пациентам</span>
            </li>

            <li aria-current="page">
              Справка для налоговой
            </li>
          </ol>
        </nav>

        <p className={styles.eyebrow}>Пациентам</p>

        <h1
          className={styles.title}
          id="tax-certificate-hero-title"
        >
          Справка для
          <br />
          налогового вычета
        </h1>

        <p className={styles.description}>
          Заполните заявление на подготовку справки
          об оплате медицинских услуг.
        </p>

        <div className={styles.deadline}>
          <ClockIcon />

          <span>
            Срок изготовления — 14 календарных дней
          </span>
        </div>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <span className={styles.ovalFirst} />
        <span className={styles.ovalSecond} />

        <TaxCertificateIcon />
      </div>
    </section>
  );
}