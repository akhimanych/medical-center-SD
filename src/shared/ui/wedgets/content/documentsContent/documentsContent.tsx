import styles from "./documentsContent.module.css";

const documents = [
  {
    id: "paid-services-contract",
    title: "Договор на оказание платных медицинских услуг",
    href: "public/documents/Dogovor ob okazanii platnykh meditsinskikh uslug.xlsx",
  },
  {
    id: "consumer-protection",
    title: "Закон о защите прав потребителей",
    href: "/documents/consumer-protection.pdf",
  },
  {
    id: "paid-services-rules",
    title: "Правила предоставления платных медицинских услуг",
    href: "/documents/paid-services-rules.pdf",
  },
  {
    id: "state-guarantees",
    title: "Территориальная программа государственных гарантий",
    href: "public/documents/Territorial'nyye programmnyye gosudarstvennyye garantii.pdf",
  },
  {
    id: "health-protection",
    title: "Основы охраны здоровья граждан",
    href: "https://minzdrav.gov.ru/documents/7025-federalnyy-zakon-ot-21-noyabrya-2011-g-323-fz-ob-osnovah-o",
  },
  {
    id: "egrul-extract",
    title: "Выписка из ЕГРЮЛ",
    href: "public/documents/Vypiska iz YEGRYUL.pdf",
  },
  {
    id: "waiting-times",
    title: "Приказ об установлении времени ожидания пациента",
    href: "public/documents/Prikaz ob ustanovlenii vremeni ozhidaniya patsiyenta.pdf",
  },
];

function IconDocument() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="56"
      viewBox="0 0 48 56"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="
          M29 4
          H10
          C7.8 4 6 5.8 6 8
          V48
          C6 50.2 7.8 52 10 52
          H38
          C40.2 52 42 50.2 42 48
          V17
          L29 4
          Z

          M29 4
          V17
          H42

          M16 29H32
          M16 38H29
        "
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconExternalLink() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="
          M14 4H20V10
          M20 4L10 14

          M10 5H6
          C4.9 5 4 5.9 4 7
          V18
          C4 19.1 4.9 20 6 20
          H17
          C18.1 20 19 19.1 19 18
          V14
        "
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DocumentsContent() {
  return (
    <section
      className={styles.section}
      aria-labelledby="documents-content-title"
    >
      <div className={styles.container}>
        <h2 id="documents-content-title" className={styles.title}>
          Документы и сведения
        </h2>

        <ul className={styles.grid}>
          {documents.map((item) => (
            <li key={item.id} className={styles.card}>
              <div className={styles.icon}>
                <IconDocument />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>

                <a
                  className={styles.button}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Открыть документ: ${item.title}. В новой вкладке`}
                >
                  <span>Открыть документ</span>
                  <IconExternalLink />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
