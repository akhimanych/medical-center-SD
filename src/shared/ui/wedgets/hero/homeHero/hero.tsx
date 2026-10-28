import { HeartPulseIcon } from "@/shared/ui/icons/heartPulseIcon";
import doctorImage from "@/assets/images/hero-doctor.png";

import styles from "./hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span>Современная медицина</span>
            <span className={styles.dot} aria-hidden="true">
              •
            </span>
            <span>Забота о каждом</span>
          </p>

          <h1 className={styles.title}>
            Здоровье семьи —
            <br className={styles.titleBreak} /> в надёжных руках
          </h1>

          <p className={styles.description}>
            «Семейный доктор» — это современный медицинский центр, где забота,
            профессионализм и внимание к каждому пациенту объединяются ради
            вашего здоровья.
          </p>
        </div>

        <div className={styles.visual}>
          <img
            className={styles.doctorImage}
            src={doctorImage}
            alt="Врач медицинского центра Семейный доктор"
            fetchPriority="high"
          />

          <div className={styles.quoteBlock}>
            <p className={styles.quote}>
              Здоровые
              <br />
              люди —
              <br />
              счастливые
              <br />
              семьи
            </p>

            <div className={styles.heartIcon} aria-hidden="true">
              <HeartPulseIcon size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
