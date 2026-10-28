import { useEffect, useRef, useState } from "react";

import styles from "./licensesGallery.module.css";

type LicenseDocument = {
  id: string;
  title: string;
  src: string;
};

const documents: LicenseDocument[] = [
  {
    id: "license-front",
    title: "Лицензия",
    src: `${import.meta.env.BASE_URL}images/licenses/license-front.jpg`,
  },
  {
    id: "license-back",
    title: "Оборотная сторона",
    src: `${import.meta.env.BASE_URL}images/licenses/license-back.jpg`,
  },
  {
    id: "license-appendix-1",
    title: "Приложение · стр. 1",
    src: `${import.meta.env.BASE_URL}images/licenses/license-appendix-1.jpg`,
  },
  {
    id: "license-appendix-2",
    title: "Приложение · стр. 2",
    src: `${import.meta.env.BASE_URL}images/licenses/license-appendix-2.jpg`,
  },
];

export function LicensesGallery() {
  const [activeDocument, setActiveDocument] =
    useState<LicenseDocument | null>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!activeDocument) {
      return;
    }

    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    if (!dialog.open) {
      dialog.showModal();
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;

      if (dialog.open) {
        dialog.close();
      }
    };
  }, [activeDocument]);

  function closePreview() {
    dialogRef.current?.close();
    setActiveDocument(null);
  }

  return (
    <section
      className={styles.section}
      aria-labelledby="licenses-gallery-title"
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2
            id="licenses-gallery-title"
            className={styles.title}
          >
            Лицензия и приложения
          </h2>

          <p className={styles.description}>
            Нажмите на документ, чтобы увеличить.
          </p>
        </div>

        <ul className={styles.grid}>
          {documents.map((item) => (
            <li key={item.id} className={styles.card}>
              <button
                className={styles.cardButton}
                type="button"
                aria-label={`Увеличить: ${item.title}`}
                aria-haspopup="dialog"
                onClick={() => setActiveDocument(item)}
              >
                <span className={styles.preview}>
                  <img
                    className={styles.previewImage}
                    src={item.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </span>

                <span className={styles.documentTitle}>
                  {item.title}
                </span>

                <span className={styles.viewLink}>
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
                        M10.5 17.5
                        A7 7 0 1 0 10.5 3.5
                        A7 7 0 1 0 10.5 17.5
                        M16 16L21 21
                      "
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>

                  Смотреть
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label={
          activeDocument
            ? `Просмотр документа: ${activeDocument.title}`
            : "Просмотр документа"
        }
        onClose={() => setActiveDocument(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closePreview();
          }
        }}
      >
        {activeDocument && (
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>
                {activeDocument.title}
              </h3>

              <button
                className={styles.closeButton}
                type="button"
                aria-label="Закрыть просмотр"
                onClick={closePreview}
                autoFocus
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className={styles.modalBody}>
              <img
                className={styles.fullImage}
                src={activeDocument.src}
                alt={activeDocument.title}
              />
            </div>

            <div className={styles.modalFooter}>
              <a
                className={styles.originalLink}
                href={activeDocument.src}
                target="_blank"
                rel="noopener noreferrer"
              >
                Открыть оригинал в новой вкладке
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}