import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router";

import servicesData from "@/db/services.json";

import {
  ServiceIcon,
  type ServiceIconName,
} from "@/shared/ui/icons/service/serviceIcon";

import styles from "./servicesWidget.module.css";

type ServicesWidgetProps = {
  limit?: number;
  showHeader?: boolean;
};

function ArrowIcon({ left = false }: { left?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={left ? "M19 12H5M11 6l-6 6 6 6" : "M5 12h14M13 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ServicesWidget({
  limit = 6,
  showHeader = true,
}: ServicesWidgetProps) {
  const titleId = useId();
  const listId = useId();

  const gridRef = useRef<HTMLUListElement>(null);

  const [scrollState, setScrollState] = useState({
    hasOverflow: false,
    canScrollBack: false,
    canScrollForward: false,
  });

  const visibleServices = servicesData
    .filter((service) => service.isActive)
    .slice(0, Math.max(0, limit));

  const servicesCount = visibleServices.length;

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) {
      return;
    }

    function updateScrollState() {
      if (!grid) {
        return;
      }

      const maxScroll = grid.scrollWidth - grid.clientWidth;

      const nextState = {
        hasOverflow: maxScroll > 2,
        canScrollBack: grid.scrollLeft > 2,
        canScrollForward: grid.scrollLeft < maxScroll - 2,
      };

      setScrollState((previous) => {
        if (
          previous.hasOverflow === nextState.hasOverflow &&
          previous.canScrollBack === nextState.canScrollBack &&
          previous.canScrollForward === nextState.canScrollForward
        ) {
          return previous;
        }

        return nextState;
      });
    }

    updateScrollState();

    grid.addEventListener("scroll", updateScrollState, {
      passive: true,
    });

    const observer = new ResizeObserver(updateScrollState);

    observer.observe(grid);

    Array.from(grid.children).forEach((item) => {
      observer.observe(item);
    });

    return () => {
      grid.removeEventListener("scroll", updateScrollState);
      observer.disconnect();
    };
  }, [servicesCount]);

  function scrollServices(direction: -1 | 1) {
    const grid = gridRef.current;

    if (!grid) {
      return;
    }

    const firstItem = grid.children[0] as HTMLElement | undefined;
    const secondItem = grid.children[1] as HTMLElement | undefined;

    if (!firstItem) {
      return;
    }

    const step = secondItem
      ? secondItem.getBoundingClientRect().left -
        firstItem.getBoundingClientRect().left
      : firstItem.getBoundingClientRect().width;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    grid.scrollBy({
      left: step * direction,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }

  return (
    <section
      className={styles.section}
      id="services"
      aria-labelledby={showHeader ? titleId : undefined}
      aria-label={showHeader ? undefined : "Список медицинских услуг"}
    >
      <div className={styles.container}>
        {showHeader && (
          <div className={styles.heading}>
            <p className={styles.eyebrow}>Наши услуги</p>

            <h2 className={styles.title} id={titleId}>
              Полный спектр медицинской помощи{" "}
              <br className={styles.titleBreak} />
              для всей семьи
            </h2>
          </div>
        )}

        {showHeader && (
          <Link className={styles.allLink} to="/services">
            Все услуги <ArrowIcon />
          </Link>
        )}

        <ul className={styles.grid} id={listId} ref={gridRef}>
          {visibleServices.map((service) => (
            <li className={styles.item} key={service.id}>
              <Link
                className={styles.card}
                to={`/services/${encodeURIComponent(service.slug)}`}
              >
                <span className={styles.iconWrapper} aria-hidden="true">
                  <ServiceIcon
                    name={service.icon as ServiceIconName}
                    width={32}
                    height={32}
                  />
                </span>

                <div className={styles.content}>
                  <h3 className={styles.name}>{service.title}</h3>

                  {service.description && (
                    <p className={styles.description}>{service.description}</p>
                  )}
                </div>

                <span className={styles.arrow} aria-hidden="true">
                  <ArrowIcon />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div
          className={styles.controls}
          data-overflow={scrollState.hasOverflow}
        >
          <p className={styles.swipeHint}>Листайте, чтобы посмотреть услуги</p>

          <div className={styles.scrollButtons}>
            <button
              className={styles.scrollButton}
              type="button"
              aria-label="Предыдущие услуги"
              aria-controls={listId}
              disabled={!scrollState.canScrollBack}
              onClick={() => scrollServices(-1)}
            >
              <ArrowIcon left />
            </button>

            <button
              className={styles.scrollButton}
              type="button"
              aria-label="Следующие услуги"
              aria-controls={listId}
              disabled={!scrollState.canScrollForward}
              onClick={() => scrollServices(1)}
            >
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
