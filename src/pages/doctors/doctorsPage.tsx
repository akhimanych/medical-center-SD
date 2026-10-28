import { Link, useParams } from "react-router";

import doctorsData from "@/db/doctors.json";
import specializations from "@/db/specializations.json";

import { Header } from "@/shared/ui/wedgets/header";
import { DoctorsHero } from "@/shared/ui/wedgets/hero/doctorsHero";
import { DoctorHelp } from "@/shared/ui/wedgets/doctorHelp/doctorHelp";
import { AppointmentBanner } from "@/shared/ui/wedgets/appointmentBanner";
import { PersonalDataNotice } from "@/shared/ui/wedgets/personalDataNotice";
import { Footer } from "@/shared/ui/wedgets/footer";

import medicalCenterImage from "@/assets/images/medical-center.png";
import styles from "./doctorsPage.module.css";

type Doctor = {
  id: string;
  slug: string;
  lastName: string;
  firstName: string;
  middleName?: string;
  specializationId?: string | string[];
  specializationIds?: string[];
  education?: string;
  accreditation?: string;
  initialAccreditation?: string;
  category?: string;
  academicDegrees?: string;
  photo?: string;
  isAvailableForAppointment?: boolean;
};

const doctors: Doctor[] = doctorsData;

const SPECIALIZATION_ALIASES: Record<string, string> = {
  allergist: "allergist-immunologist",
};

function normalizeSpecializationId(id: string) {
  return SPECIALIZATION_ALIASES[id] ?? id;
}

function getDoctorSpecializationIds(doctor: Doctor): string[] {
  const value = doctor.specializationIds ?? doctor.specializationId;
  if (!value) {
    return [];
  }
  const ids = Array.isArray(value) ? value : [value];
  return ids.map(normalizeSpecializationId);
}

function getDoctorFullName(doctor: Doctor) {
  return [doctor.lastName, doctor.firstName, doctor.middleName]
    .filter(Boolean)
    .join(" ");
}

function getPhotoSrc(photo?: string) {
  if (!photo) {
    return undefined;
  }
  return photo.replace(/^\/?public\//, "/");
}

export default function DoctorsPage() {
  const { specializationSlug } = useParams<{
    specializationSlug: string;
  }>();

  const specialization = specializations.find(
    (item) => item.slug === specializationSlug,
  );

  const selectedDoctors = specialization
    ? doctors.filter(
        (doctor) =>
          Boolean(doctor.id && doctor.slug.trim()) &&
          getDoctorSpecializationIds(doctor).includes(
            normalizeSpecializationId(specialization.id),
          ),
      )
    : [];

  return (
    <>
      <Header />
      <main className={styles.block}>
        <DoctorsHero
          title={
            specialization ? (
              <>
                {specialization.title}
                <br />
                Выберите врача
              </>
            ) : (
              <>
                Специальность
                <br />
                не найдена
              </>
            )
          }
          description={
            specialization
              ? "Познакомьтесь со специалистами этого направления."
              : "Вернитесь к каталогу и выберите специальность."
          }
          specializationTitle={
            specialization?.title ?? "Специальность не найдена"
          }
        />
        <section className={styles.section} aria-label="Список врачей">
          <div className={styles.container}>
            <Link className={styles.backLink} to="/doctors">
              <span aria-hidden="true">←</span>
              Все специальности
            </Link>

            {!specialization ? (
              <div className={styles.empty}>
                <p>
                  Такого направления нет в каталоге. Вернитесь к списку
                  специальностей.
                </p>
              </div>
            ) : selectedDoctors.length === 0 ? (
              <div className={styles.empty}>
                <p>Врачи этого направления пока не добавлены.</p>
              </div>
            ) : (
              <>
                <ul className={styles.grid}>
                  {selectedDoctors.map((doctor) => {
                    const fullName = getDoctorFullName(doctor);
                    const photoSrc = getPhotoSrc(doctor.photo);
                    const doctorUrl = `/doctors/${specialization.slug}/${doctor.slug.trim()}`;

                    return (
                      <li key={`${doctor.id}-${doctor.slug.trim()}`}>
                        <Link
                          className={styles.cardLink}
                          to={doctorUrl}
                          aria-label={`Подробнее о враче: ${fullName}`}
                        >
                          <article className={styles.card}>
                            <div className={styles.photoWrapper}>
                              {photoSrc ? (
                                <img
                                  className={styles.photo}
                                  src={photoSrc}
                                  alt={fullName}
                                  loading="lazy"
                                />
                              ) : (
                                <div
                                  className={styles.photoPlaceholder}
                                  aria-hidden="true"
                                >
                                  {doctor.lastName.charAt(0)}
                                  {doctor.firstName.charAt(0)}
                                </div>
                              )}
                            </div>
                            <div className={styles.cardContent}>
                              <p className={styles.specialization}>
                                {specialization.title}
                              </p>
                              <h2 className={styles.name}>{fullName}</h2>
                              {(doctor.category || doctor.academicDegrees) && (
                                <div className={styles.qualifications}>
                                  {doctor.category && <p>{doctor.category}</p>}
                                  {doctor.academicDegrees && (
                                    <p>{doctor.academicDegrees}</p>
                                  )}
                                </div>
                              )}
                            </div>
                          </article>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div style={{ marginTop: 32 }}>
                  <PersonalDataNotice />
                </div>
              </>
            )}
          </div>
        </section>
        <DoctorHelp />
        <AppointmentBanner />
      </main>
      <Footer
        imageSrc={medicalCenterImage}
        directionsUrl="https://yandex.ru/maps/-/CXeXNR6n"
      />
    </>
  );
}