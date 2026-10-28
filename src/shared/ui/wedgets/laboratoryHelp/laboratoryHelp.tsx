import styles from "./LaboratoryHelp.module.css";

export function LaboratoryHelp() {
  return (
    <section
      className={styles.widget}
      aria-label="Помощь с выбором анализа"
    >
      <div className={styles.text}>
        <h2 className={styles.title}>
          Нужна помощь с выбором анализа?
        </h2>

        <p className={styles.description}>
          Свяжитесь с администратором центра
        </p>
      </div>

      <a
        className={styles.button}
        href="tel:+78184548080"
      >
        Позвонить в центр
      </a>
    </section>
  );
}