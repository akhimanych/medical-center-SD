import type { Doctor } from "@/shared/Types/doctor";
import styles from "./DoctorDetails.module.css";

type DoctorDetailsProps = {
  doctor: Pick<
    Doctor,
    "education" | "accreditation" | "initialAccreditation"
  >;
};

export function DoctorDetails({ doctor }: DoctorDetailsProps) {
  const education = doctor.education.trim();
  const accreditation = doctor.accreditation?.trim();
  const initialAccreditation = doctor.initialAccreditation?.trim();

  if (!education && !accreditation && !initialAccreditation) {
    return null;
  }

  return (
    <div className={styles.details}>
      {education && (
        <section className={styles.section}>
          <h2 className={styles.title}>Образование</h2>

          <p className={styles.text}>{education}</p>
        </section>
      )}

      {accreditation && (
        <section className={styles.section}>
          <h2 className={styles.title}>Аккредитация</h2>

          <div className={styles.accreditation}>
            <p className={styles.text}>{accreditation}</p>
          </div>
        </section>
      )}

      {initialAccreditation && (
        <section className={styles.section}>
          <h2 className={styles.title}>
            Первичная аккредитация
          </h2>

          <div className={styles.accreditation}>
            <p className={styles.text}>
              {initialAccreditation}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}