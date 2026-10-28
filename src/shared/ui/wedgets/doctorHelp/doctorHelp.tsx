import { AdministratorIcon } from "@/shared/ui/icons/administrator";
import styles from "./doctorHelp.module.css";

export function DoctorHelp() {
  return (
    <section
      className={styles.widget}
      aria-label="Помощь с выбором врача"
    >
      <div className={styles.content}>
        <AdministratorIcon className={styles.icon} />

        <div className={styles.text}>
          <h2 className={styles.title}>
            Нужна помощь с выбором врача?
          </h2>

          <p className={styles.description}>
            Свяжитесь с администратором центра
          </p>
        </div>
      </div>

      <a
        className={styles.contactButton}
        href="tel:+78184548080"
        aria-label="Позвонить в центр: +7 (818) 454-80-80"
      >
        Связаться с центром
      </a>
    </section>
  );
}