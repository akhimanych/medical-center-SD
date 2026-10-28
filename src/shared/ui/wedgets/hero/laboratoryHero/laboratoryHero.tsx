import { LaboratoryIcon } from "@/shared/ui/icons/laboratoryHeroIcon";

import styles from "./laboratoryHero.module.css";

type LaboratoryHeroProps = {
  title?: string;
  description?: string;
};

export function LaboratoryHero({
  title = "Анализы и цены",
  description = "БиоТехМед · Инвитро · СГБ № 2 СМП",
}: LaboratoryHeroProps) {
  return (
    <section
      className={styles.hero}
      aria-labelledby="laboratory-page-title"
    >
      <div className={styles.container}>
        <div className={styles.info}>
          <p className={styles.eyebrow}>
            Лабораторные исследования
          </p>

          <h1
            className={styles.title}
            id="laboratory-page-title"
          >
            {title}
          </h1>

          <p className={styles.description}>
            {description}
          </p>
        </div>

        <LaboratoryIcon className={styles.illustration} />
      </div>
    </section>
  );
}