import type { Doctor } from "@/shared/Types/doctor";

import styles from "./doctorHero.module.css";

type DoctorHeroProps = {
  doctor: Doctor;
  specializationNames: string[];
};

export function DoctorHero({ doctor, specializationNames }: DoctorHeroProps) {
  const fullName = [doctor.lastName, doctor.firstName, doctor.middleName]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      className={styles.hero}
      aria-label={`Информация о враче: ${fullName}`}
    >
      <figure className={styles.photo}>
        <img
          className={styles.image}
          src={doctor.photo}
          alt={fullName}
          width={336}
          height={324}
        />
      </figure>

      <div className={styles.info}>
        <h1 className={styles.title}>{fullName}</h1>

        {specializationNames.length > 0 && (
          <p className={styles.specialty}>{specializationNames.join(", ")}</p>
        )}

        {doctor.category?.trim() && (
          <p className={styles.description}>{doctor.category}</p>
        )}

        {doctor.academicDegrees?.trim() && (
          <p className={styles.description}>{doctor.academicDegrees}</p>
        )}
      </div>
    </section>
  );
}
