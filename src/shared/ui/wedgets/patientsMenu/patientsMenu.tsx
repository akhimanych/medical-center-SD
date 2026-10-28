import { Link } from "react-router";

import styles from "./patientsMenu.module.css";

type PatientsMenuProps = {
  id: string;
  isOpen: boolean;
  onNavigate: () => void;
};

type MenuIconProps = {
  kind: "info" | "question" | "shield" | "document" ;
  className?: string;
};

function MenuIcon({ kind, className }: MenuIconProps) {
  const paths = {
    info: [
      "M12 22a10 10 0 1 0 0-20 10 10 0 1 0 0 20Z",
      "M12 11v6M12 7v.1",
    ],
    question: [
      "M12 22a10 10 0 1 0 0-20 10 10 0 1 0 0 20Z",
      "M9.5 8.5a2.5 2.5 0 1 1 4.2 1.8C12.5 11.2 12 11.5 12 13M12 17v.1",
    ],
    shield: [
      "M12 2 3.5 5.5V12c0 5 4 8.5 8.5 10 4.5-1.5 8.5-5 8.5-10V5.5L12 2Z",
      "m8 12 2.5 2.5L16 9",
    ],
    document: [
      "M14 2H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8L14 2Z",
      "M14 2v6h6M8 12h8M8 16h6",
    ],
  };

  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[kind].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

function ArrowIcon() {
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
      focusable="false"
    >
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </svg>
  );
}

export function PatientsMenu({
  id,
  isOpen,
  onNavigate,
}: PatientsMenuProps) {
  return (
    <div
      id={id}
      className={styles.panel}
      hidden={!isOpen}
    >
      <div className={styles.information}>
        <h2 className={styles.heading}>
          <MenuIcon kind="info" />
          <span>Полезная информация</span>
        </h2>

        <ul className={styles.list}>
          <li>
            <Link
              className={styles.menuLink}
              to="/patients/faq"
              onClick={onNavigate}
            >
              <MenuIcon kind="question" />
              <span>Частые вопросы</span>
            </Link>
          </li>

          <li>
            <Link
              className={styles.menuLink}
              to="/patients/insurance"
              onClick={onNavigate}
            >
              <MenuIcon kind="shield" />
              <span>Страховые компании</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.taxCard}>
        <div className={styles.taxHeading}>
          <MenuIcon kind="document" />

          <div>
            <h2 className={styles.taxTitle}>
              Налоговый вычет
            </h2>

            <p className={styles.subtitle}>
              Справки и инструкции
            </p>
          </div>
        </div>

        <div className={styles.taxContent}>
          <MenuIcon
            kind="document"
            className={styles.largeDocument}
          />

          <Link
            className={styles.resourceLink}
            to="/tax-deduction"
            onClick={onNavigate}
          >
            <span>Заказать справку</span>
            <ArrowIcon />
          </Link>

          <a
            className={styles.resourceLink}
            href="public/documents/instruktsiya po otslezhivaniyu spravki v lk fns.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onNavigate}
            aria-label="Найти справку в личном кабинете ФНС (откроется в новой вкладке)"
          >
            <span>Найти справку в личном кабинете ФНС</span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  );
}