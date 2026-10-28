import styles from "./licenseExtract.module.css";

type LicenseExtractProps = {
  href: string;
  date: string;
  dateTime: string;
};

export function LicenseExtract({
  href,
  date,
  dateTime,
}: LicenseExtractProps) {
  return (
    <section
      className={styles.section}
      aria-labelledby="license-extract-title"
    >
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.icon} aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 80"
              fill="none"
              focusable="false"
            >
              <path
                d="
                  M39 5
                  H13
                  C9.7 5 7 7.7 7 11
                  V69
                  C7 72.3 9.7 75 13 75
                  H51
                  C54.3 75 57 72.3 57 69
                  V23
                  L39 5
                  Z

                  M39 5
                  V23
                  H57

                  M19 34H33
                  M19 46H44
                  M19 58H37
                "
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className={styles.content}>
            <h2
              id="license-extract-title"
              className={styles.title}
            >
              Выписка из реестра лицензий
            </h2>

            <p className={styles.description}>
              По состоянию на{" "}
              <time dateTime={dateTime}>{date}</time>
            </p>
          </div>

          <a
            className={styles.button}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Открыть выписку</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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

            <span className={styles.visuallyHidden}>
              {" "}(откроется в новой вкладке)
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}