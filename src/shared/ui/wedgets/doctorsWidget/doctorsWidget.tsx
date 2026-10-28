import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router";

import doctorsData from "@/db/doctors.json";
import specializationsData from "@/db/specializations.json";
import styles from "./doctorsWidget.module.css";

type Doctor = {
  id: string;
  slug: string;
  lastName: string;
  firstName: string;
  middleName: string;
  specializationId: string | string[];
  photo: string;
  isAvailableForAppointment: boolean;
};

type DoctorsWidgetProps = {
  limit?: number;
  specializationIds?: string[];
  title?: string;
  eyebrow?: string;
  randomize?: boolean;
  showAllLink?: boolean;
  showDetailsLink?: boolean;
};

const PLACEHOLDER_PHOTO = `${import.meta.env.BASE_URL}images/doctors/NonPhoto.jpg`;

const PLACEHOLDER_PHOTO_NAMES = new Set([
  "nonphotoman.png",
  "nonphotowoman.png",
  "nonphoto.jpg",
]);

function hasRealPhoto(photo: string): boolean {
  const path = photo.trim().toLowerCase();

  if (!path) return false;

  const fileName = path.split(/[?#]/)[0].split("/").pop();

  return Boolean(fileName && !PLACEHOLDER_PHOTO_NAMES.has(fileName));
}

function getSpecializationIds(value: string | string[]): string[] {
  return Array.isArray(value) ? value : [value];
}

function getSpecializations(value: string | string[]): string {
  return getSpecializationIds(value)
    .filter(Boolean)
    .map(
      (id) => specializationsData.find((item) => item.id === id)?.title ?? id,
    )
    .join(", ");
}

function getDoctorUrl(
  doctor: Doctor,
  preferredSpecializationIds?: string[],
): string | undefined {
  const ids = getSpecializationIds(doctor.specializationId);

  const preferred = preferredSpecializationIds
    ?.filter((id) => ids.includes(id))
    .map((id) => specializationsData.find((item) => item.id === id))
    .find((item) => item !== undefined);

  const specialization =
    preferred ??
    ids
      .map((id) => specializationsData.find((item) => item.id === id))
      .find((item) => item !== undefined);

  if (!specialization) return undefined;

  return `/doctors/${encodeURIComponent(
    specialization.slug,
  )}/${encodeURIComponent(doctor.slug.trim())}`;
}

function getPhotoPath(photo: string): string {
  const path = photo
    .trim()
    .replace(/^\/?public\//, "")
    .replace(/^\/+/, "");

  if (!path) return PLACEHOLDER_PHOTO;

  return `${import.meta.env.BASE_URL}${path}`;
}

const seenSlugs = new Set<string>();

const doctors: Doctor[] = doctorsData
  .filter((doctor) => {
    const slug = doctor.slug.trim();

    if (!doctor.id || !slug || !doctor.lastName.trim() || seenSlugs.has(slug)) {
      return false;
    }

    seenSlugs.add(slug);

    return true;
  })
  .map((doctor) => ({
    ...doctor,
    slug: doctor.slug.trim(),
    photo: getPhotoPath(doctor.photo),
  }));

function shuffleDoctors(list: Doctor[]): Doctor[] {
  const shuffled = [...list];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
}

const shuffledDoctors = shuffleDoctors(doctors);

function ArrowIcon({ left = false }: { left?: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={left ? "M19 12H5m6-6-6 6 6 6" : "M5 12h14M13 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoctorsWidget({
  limit = 5,
  specializationIds,
  title = "Профессионалы, которым доверяют",
  eyebrow = "Наши врачи",
  randomize = true,
  showAllLink = true,
  showDetailsLink = true,
}: DoctorsWidgetProps) {
  const titleId = useId();
  const listId = useId();
  const listRef = useRef<HTMLUListElement>(null);

  const [scrollState, setScrollState] = useState({
    overflow: false,
    previous: false,
    next: false,
  });

  const sourceDoctors = randomize ? shuffledDoctors : doctors;

  const matchingDoctors =
    specializationIds === undefined
      ? sourceDoctors
      : sourceDoctors.filter((doctor) =>
          getSpecializationIds(doctor.specializationId).some((id) =>
            specializationIds.includes(id),
          ),
        );

  const visibleDoctors = matchingDoctors
    .filter(
      (doctor) =>
        hasRealPhoto(doctor.photo) &&
        Boolean(getDoctorUrl(doctor, specializationIds)),
    )
    .slice(0, Math.max(0, limit));

  const visibleKey = visibleDoctors.map((doctor) => doctor.slug).join("|");

  useEffect(() => {
    const list = listRef.current;

    if (!list) return;

    function updateScrollState() {
      if (!list) return;

      const maxScroll = list.scrollWidth - list.clientWidth;

      const next = {
        overflow: maxScroll > 2,
        previous: list.scrollLeft > 2,
        next: list.scrollLeft < maxScroll - 2,
      };

      setScrollState((current) =>
        current.overflow === next.overflow &&
        current.previous === next.previous &&
        current.next === next.next
          ? current
          : next,
      );
    }

    list.scrollTo({ left: 0, behavior: "instant" });
    updateScrollState();

    const observer = new ResizeObserver(updateScrollState);

    observer.observe(list);
    Array.from(list.children).forEach((child) => observer.observe(child));

    list.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      observer.disconnect();
      list.removeEventListener("scroll", updateScrollState);
    };
  }, [visibleKey]);

  function move(direction: -1 | 1) {
    const list = listRef.current;
    const first = list?.firstElementChild;

    if (!list || !(first instanceof HTMLElement)) return;

    const gap = parseFloat(window.getComputedStyle(list).columnGap) || 0;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    list.scrollBy({
      left: direction * (first.getBoundingClientRect().width + gap),
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }

  if (visibleDoctors.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby={titleId}>
      <div className={styles.container}>
        <div className={styles.heading}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}

          <h2 className={styles.title} id={titleId}>
            {title}
          </h2>
        </div>

        {showAllLink && (
          <Link className={styles.allLink} to="/doctors">
            Все врачи
            <ArrowIcon />
          </Link>
        )}

        <ul className={styles.grid} id={listId} ref={listRef}>
          {visibleDoctors.map((doctor) => {
            const fullName = [
              doctor.lastName,
              doctor.firstName,
              doctor.middleName,
            ]
              .filter(Boolean)
              .join(" ");

            const doctorUrl = getDoctorUrl(doctor, specializationIds);

            if (!doctorUrl) return null;

            return (
              <li className={styles.item} key={doctor.slug}>
                <Link
                  className={styles.cardLink}
                  to={doctorUrl}
                  aria-label={`Подробнее о враче: ${fullName}`}
                >
                  <article className={styles.card}>
                    <div className={styles.imageWrapper}>
                      <img
                        className={styles.image}
                        src={doctor.photo}
                        alt={fullName}
                        loading="lazy"
                        decoding="async"
                        onError={(event) => {
                          const image = event.currentTarget;

                          if (image.dataset.fallback === "true") return;

                          image.dataset.fallback = "true";
                          image.src = PLACEHOLDER_PHOTO;
                        }}
                      />
                    </div>

                    <div className={styles.content}>
                      <h3 className={styles.name}>{fullName}</h3>

                      <p className={styles.specialization}>
                        {getSpecializations(doctor.specializationId)}
                      </p>

                      {showDetailsLink && (
                        <span className={styles.detailsLink}>
                          Подробнее
                          <ArrowIcon />
                        </span>
                      )}
                    </div>
                  </article>
                </Link>
              </li>
            );
          })}
        </ul>

        {scrollState.overflow && (
          <div className={styles.controls}>
            <p className={styles.swipeHint}>
              Листайте, чтобы посмотреть врачей
            </p>

            <div className={styles.buttons}>
              <button
                className={styles.scrollButton}
                type="button"
                onClick={() => move(-1)}
                disabled={!scrollState.previous}
                aria-label="Предыдущий врач"
                aria-controls={listId}
              >
                <ArrowIcon left />
              </button>

              <button
                className={styles.scrollButton}
                type="button"
                onClick={() => move(1)}
                disabled={!scrollState.next}
                aria-label="Следующий врач"
                aria-controls={listId}
              >
                <ArrowIcon />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
