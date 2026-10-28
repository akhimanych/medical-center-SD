import { useId } from "react";

import styles from "./LocationMap.module.css";

const MAP_EMBED_URL =
  "https://yandex.ru/map-widget/v1/?ll=39.855114%2C64.560932&mode=whatshere&rtext=~64.561036%2C39.856884&rtt=auto&ruri=~&utm_source=share&whatshere%5Bpoint%5D=39.856864%2C64.561134&whatshere%5Bzoom%5D=17.12&z=17.04";

const MAP_PAGE_URL =
  "https://yandex.ru/maps/10849/severodvinsk/?ll=39.855114%2C64.560932&mode=whatshere&rtext=~64.561036%2C39.856884&rtt=auto&ruri=~&whatshere%5Bpoint%5D=39.856864%2C64.561134&whatshere%5Bzoom%5D=17.12&z=17.04";

export function LocationMap() {
  const titleId = useId();

  return (
    <section
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title} id={titleId}>
            Как нас найти
          </h2>

          <a
            className={styles.mapLink}
            href={MAP_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Открыть в Яндекс Картах
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className={styles.mapWrapper}>
          <iframe
            className={styles.map}
            src={MAP_EMBED_URL}
            title="Железнодорожная улица, 34, Северодвинск — Яндекс Карты"
            width="560"
            height="400"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}