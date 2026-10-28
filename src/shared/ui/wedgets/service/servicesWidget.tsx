import { useId } from "react";
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

function ArrowIcon() {
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
        d="M5 12h14M13 6l6 6-6 6"
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
  const visibleServices = servicesData
    .filter((service) => service.isActive)
    .slice(0, Math.max(0, limit));

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

        <ul className={styles.grid}>
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
      </div>
    </section>
  );
}
