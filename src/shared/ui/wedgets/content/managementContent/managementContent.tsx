import styles from "./managementContent.module.css";

type ManagementPerson = {
  id: string;
  position: string;
  name: string;
  photo: string | null;
};

const management: ManagementPerson[] = [
  {
    id: "director",
    position: "Генеральный директор",
    name: "Фомичев Александр Борисович",
    photo: null,
  },
  {
    id: "chief-doctor",
    position: "Главный врач",
    name: "Химаныч Анастасия Андреевна",
    photo: null,
  },
  {
    id: "head-nurse",
    position: "Старшая медицинская сестра",
    name: "Кремлева Ольга Павловна",
    photo: null,
  },
];

type PrincipleIconKind = "shield" | "heart" | "lock";
type Principle = {
  title: string;
  description: string;
  icon: PrincipleIconKind;
};

const principles: Principle[] = [
  {
    title: "Профессиональный подход",
    description: "Комплексный подход к диагностике и лечению.",
    icon: "shield",
  },
  {
    title: "Внимание к пациенту",
    description: "Доброжелательное общение и индивидуальный подход.",
    icon: "heart",
  },
  {
    title: "Конфиденциальность",
    description:
      "Бережное отношение к личной информации и соблюдение врачебной этики.",
    icon: "lock",
  },
];

function PrincipleIcon({ kind }: { kind: PrincipleIconKind }) {
  const paths: Record<PrincipleIconKind, string[]> = {
    shield: [
      "M24 4c6 4 12 6 17 7v12c0 10-7 17-17 21C14 40 7 33 7 23V11c5-1 11-3 17-7Z",
      "m16 24 6 6 11-12",
    ],
    heart: ["M24 41 8 25C-4 13 12-1 24 12 36-1 52 13 40 25L24 41Z"],
    lock: [
      "M14 21v-7a10 10 0 0 1 20 0v7",
      "M12 21h24a4 4 0 0 1 4 4v15a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V25a4 4 0 0 1 4-4Z",
      "M24 30v6",
      "M24 28a2 2 0 1 0 0 4 2 2 0 1 0 0-4Z",
    ],
  };
  return (
    <svg
      className={styles.principleIcon}
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[kind].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

export function ManagementContent() {
  return (
    <div className={styles.content}>
      <section
        className={styles.management}
        aria-labelledby="management-team-title"
      >
        <h2 className={styles.sectionTitle} id="management-team-title">
          Руководство центра
        </h2>
        <ul className={styles.teamGrid}>
          {management.map((person) => (
            <li className={styles.personCard} key={person.id}>
              <div className={styles.photoWrapper}>
                {person.photo ? (
                  <img
                    className={styles.photo}
                    src={person.photo}
                    alt={`Портрет: ${person.name}`}
                    width={480}
                    height={540}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className={styles.photoPlaceholder} aria-hidden="true">
                    <span>Фото скоро появится</span>
                  </div>
                )}
              </div>
              <div className={styles.personInfo}>
                <h3 className={styles.personPosition}>{person.position}</h3>
                <p className={styles.personName}>{person.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        className={styles.message}
        aria-labelledby="management-message-title"
      >
        <span className={styles.quoteMark} aria-hidden="true">
          “
        </span>
        <div className={styles.messageContent}>
          <h2 className={styles.messageTitle} id="management-message-title">
            Обращение руководства
          </h2>
          <div className={styles.messageText}>
            <p>
              Мы хотим, чтобы в «Семейном докторе» вы чувствовали заботу и
              поддержку. Для нас важно, чтобы каждый человек чувствовал
              внимание, получал понятные объяснения и поддержку на пути к
              выздоровлению.
            </p>
            <p>Спасибо за ваше доверие — оно помогает нам становиться лучше.</p>
          </div>
        </div>
      </section>

      <div className={styles.aboutGrid}>
        <section
          className={styles.about}
          aria-labelledby="management-about-title"
        >
          <h2 className={styles.sectionTitle} id="management-about-title">
            О медицинском центре
          </h2>
          <div className={styles.aboutText}>
            <p>
              «Семейный доктор» — команда врачей, медицинских сестёр и
              сотрудников, которые помогают организовать диагностику и лечение в
              комфортных условиях.
            </p>
            <p>
              Наша цель — качественная медицинская помощь и внимательное
              отношение к каждому пациенту.
            </p>
          </div>
        </section>
        <section
          className={styles.principles}
          aria-labelledby="management-principles-title"
        >
          <h2
            className={styles.principlesTitle}
            id="management-principles-title"
          >
            Наши принципы
          </h2>
          <ul className={styles.principlesList}>
            {principles.map((principle) => (
              <li className={styles.principle} key={principle.title}>
                <PrincipleIcon kind={principle.icon} />
                <div className={styles.principleContent}>
                  <h3 className={styles.principleTitle}>{principle.title}</h3>
                  <p className={styles.principleDescription}>
                    {principle.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
