import styles from './Faq.module.css';

const questions = [
  {
    id: 'appointment',
    question: 'Нужно ли направление на сдачу анализов??',
    answer: 'Нет, не нужно.',
  },
  {
    id: 'documents',
    question: 'Можно ли забрать свою медицинскую карту из центра для другого медучреждения?',
    answer: 'Нет. Но возможно заказать выписку из карты..',
  },
];

export function Faq() {
  return (
    <section className={styles.faq} aria-label="Часто задаваемые вопросы">
      <p className={styles.eyebrow}>Вопросы и ответы</p>

      <h2 className={styles.title}>
        Часто задаваемые вопросы
      </h2>

      <div className={styles.list}>
        {questions.map(({ id, question, answer }) => (
          <details className={styles.item} key={id}>
            <summary className={styles.question}>
              <span>{question}</span>

              <span className={styles.plus} aria-hidden="true" />
            </summary>

            <p className={styles.answer}>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}