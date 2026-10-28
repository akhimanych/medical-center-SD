import { Link } from "react-router";

import styles from "./aboutMenu.module.css";

type AboutMenuProps = {
  id: string;
  isOpen: boolean;
  onNavigate: () => void;
};

const centerLinks = [
  {
    title: "О медицинском центре",
    href: "/about",
  },
  {
    title: "Руководство",
    href: "/management",
  },
  {
    title: "Партнёры",
    href: "/partners",
  },
  {
    title: "Фотогалерея",
    href: "/about/gallery",
  },
];

const documentLinks = [
  {
    title: "Лицензии",
    href: "/licenses",
    description: "",
  },
  {
    title: "Документы центра",
    href: "/documents",
    description: "Включая результаты оценки условий труда",
  },
  {
    title: "Контролирующие органы",
    href: "/supervisory-authorities",
    description: "",
  },
];

export function AboutMenu({ id, isOpen, onNavigate }: AboutMenuProps) {
  return (
    <div className={styles.panel} id={id} hidden={!isOpen}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h2 className={styles.heading}>О центре</h2>

          <ul className={styles.list}>
            {centerLinks.map((item) => (
              <li key={item.href}>
                <Link
                  className={styles.link}
                  to={item.href}
                  onClick={onNavigate}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h2 className={`${styles.heading} ${styles.headingWithIcon}`}>
            <svg
              className={styles.headingIcon}
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
              <path d="M14 2H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8L14 2Z" />
              <path d="M14 2v6h6M8 12h8M8 16h6" />
            </svg>

            <span>Документы и сведения</span>
          </h2>

          <ul className={styles.list}>
            {documentLinks.map((item) => (
              <li key={item.href}>
                <Link
                  className={styles.link}
                  to={item.href}
                  onClick={onNavigate}
                >
                  <span>{item.title}</span>

                  {item.description && (
                    <span className={styles.description}>
                      {item.description}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className={styles.footer}>
        Знакомство с центром и официальная информация
      </p>
    </div>
  );
}
