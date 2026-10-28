import { Link, useParams } from "react-router";

import doctorsData from "@/db/doctors.json";
import specializationsData from "@/db/specializations.json";

import { Header } from "@/shared/ui/wedgets/header";
import type { Doctor } from "@/shared/Types/doctor";
import { DoctorHero } from "@/shared/ui/wedgets/hero/doctorHero";
import { DoctorDetails } from "@/shared/ui/wedgets/doctorDetails";
import { PersonalDataNotice } from "@/shared/ui/wedgets/personalDataNotice";
import { AppointmentBanner } from "@/shared/ui/wedgets/appointmentBanner";
import { Footer } from "@/shared/ui/wedgets/footer";

import medicalCenterImage from "@/assets/images/medical-center.png";
import styles from "./DoctorPage.module.css";

const doctors: Doctor[] = doctorsData;

const SPECIALIZATION_ALIASES: Record<string, string> = {
  allergist: "allergist-immunologist",
};

function normalizeSpecializationId(id: string): string {
  return SPECIALIZATION_ALIASES[id] ?? id;
}

function getSpecializationIds(doctor: Doctor): string[] {
  const ids = Array.isArray(doctor.specializationId)
    ? doctor.specializationId
    : [doctor.specializationId];

  return ids.map(normalizeSpecializationId);
}

function getFullName(doctor: Doctor): string {
  return [doctor.lastName, doctor.firstName, doctor.middleName]
    .filter(Boolean)
    .join(" ");
}

function getPhotoSrc(photo: string): string {
  return photo.replace(/^\/?public\//, "/");
}

export default function DoctorPage() {
  const { specializationSlug, doctorSlug } = useParams<{
    specializationSlug: string;
    doctorSlug: string;
  }>();

  const specialization = specializationsData.find(
    (item) => item.slug === specializationSlug,
  );

  const doctor = specialization
    ? doctors.find(
        (item) =>
          Boolean(item.id && item.slug.trim()) &&
          item.slug.trim() === doctorSlug &&
          getSpecializationIds(item).includes(
            normalizeSpecializationId(specialization.id),
          ),
      )
    : undefined;

  if (!specialization || !doctor) {
    return (
      <>
        <Header />
        <main className={styles.page}>
          <div className={styles.container}>
            <h1 className={styles.notFoundTitle}>Врач не найден</h1>
            <p className={styles.notFoundText}>
              Проверьте адрес страницы или выберите врача из списка.
            </p>
            <Link className={styles.backLink} to="/doctors">
              Перейти к специальностям
            </Link>
          </div>
        </main>
        <Footer
          imageSrc={medicalCenterImage}
          directionsUrl="https://yandex.ru/maps/-/CXeXNR6n"
        />
      </>
    );
  }

  const fullName = getFullName(doctor);

  const specializationNames = [
    ...new Set(
      getSpecializationIds(doctor).flatMap((id) => {
        const specializationItem = specializationsData.find(
          (item) => normalizeSpecializationId(item.id) === id,
        );
        return specializationItem ? [specializationItem.title] : [];
      }),
    ),
  ];

  const doctorForHero: Doctor = {
    ...doctor,
    photo: getPhotoSrc(doctor.photo),
  };

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.container}>
          <nav className={styles.breadcrumbs} aria-label="Хлебные крошки">
            <ol className={styles.breadcrumbList}>
              <li className={styles.breadcrumbItem}>
                <Link className={styles.breadcrumbLink} to="/">
                  Главная
                </Link>
              </li>
              <li className={styles.breadcrumbItem}>
                <Link className={styles.breadcrumbLink} to="/doctors">
                  Врачи
                </Link>
              </li>
              <li className={styles.breadcrumbItem}>
                <Link
                  className={styles.breadcrumbLink}
                  to={`/doctors/${specialization.slug}`}
                >
                  {specialization.title}
                </Link>
              </li>
              <li className={styles.breadcrumbItem}>
                <span className={styles.breadcrumbCurrent} aria-current="page">
                  {fullName}
                </span>
              </li>
            </ol>
          </nav>

          <DoctorHero
            doctor={doctorForHero}
            specializationNames={specializationNames}
          />

          <div className={styles.detailsSection}>
            <DoctorDetails doctor={doctor} />
          </div>

          <div style={{ marginTop: 32, marginBottom: 32 }}>
            <PersonalDataNotice />
          </div>
        </div>
        <AppointmentBanner />
      </main>
      <Footer
        imageSrc={medicalCenterImage}
        directionsUrl="https://yandex.ru/maps/-/CXeXNR6n"
      />
    </>
  );
}