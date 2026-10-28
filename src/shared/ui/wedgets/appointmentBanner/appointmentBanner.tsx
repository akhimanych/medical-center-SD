import { useState, type FormEvent } from 'react';

import { Button } from '@/shared/ui/Button';
import { CalendarIcon } from '@/shared/ui/icons/calendarIcon';

import styles from './AppointmentBanner.module.css';

export function AppointmentBanner() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({
      name,
      phone,
    });
  }

  return (
    <section className={styles.banner} aria-labelledby="appointment-title">
      <div className={styles.container}>
        <div className={styles.info}>
          <CalendarIcon size={64} />

          <div className={styles.text}>
            <p className={styles.eyebrow}>Онлайн-запись на приём</p>

            <h2 className={styles.title} id="appointment-title">
              Выберите удобное время и специалиста
            </h2>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            <span className={styles.visuallyHidden}>Ваше имя</span>

            <span className={styles.userIcon} aria-hidden="true">
              ♙
            </span>

            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Ваше имя"
              autoComplete="name"
              required
            />
          </label>

          <label className={styles.field}>
            <span className={styles.visuallyHidden}>Номер телефона</span>

            <span className={styles.phoneIcon} aria-hidden="true">
              ☎
            </span>

            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="+7 (___) ___-__-__"
              autoComplete="tel"
              inputMode="tel"
              required
            />
          </label>

          <Button
            className={styles.submitButton}
            type="submit"
            variant="primary"
          >
            Записаться
          </Button>
        </form>
      </div>
    </section>
  );
}