import type { ComponentType } from "react";
import { Link } from "react-router";

import specializations from "@/db/specializations.json";

import { Header } from "@/shared/ui/wedgets/header";
import { DoctorsHero } from "@/shared/ui/wedgets/hero/doctorsHero";
import { DoctorHelp } from "@/shared/ui/wedgets/doctorHelp/doctorHelp";
import { AppointmentBanner } from "@/shared/ui/wedgets/appointmentBanner";
import { Footer } from "@/shared/ui/wedgets/footer";

import * as Icons from "@/shared/ui/icons/specializations/specializations";

import medicalCenterImage from "@/assets/images/medical-center.png";

import styles from "./specialties-page.module.css";

const SPECIALIZATION_ICONS: Record<string, ComponentType> = {
  gynecologist: Icons.GynecologistIcon,
  hirudotherapist: Icons.HirudotherapistIcon,
  pediatrician: Icons.PediatricianIcon,
  "allergist-immunologist": Icons.AllergistIcon,
  allergist: Icons.AllergistIcon,
  gastroenterologist: Icons.GastroenterologistIcon,
  therapist: Icons.TherapistIcon,
  dermatovenereologist: Icons.DermatovenerologistIcon,
  dermatologist: Icons.DermatologistIcon,
  cardiologist: Icons.CardiologistIcon,
  neurologist: Icons.NeurologistIcon,
  oncologist: Icons.OncologistIcon,
  breastOncologist: Icons.OncologistIcon,
  otolaryngologist: Icons.OtolaryngologistIcon,
  ophthalmologist: Icons.OphthalmologistIcon,
  pulmonologist: Icons.PulmonologistIcon,
  orthopedicTraumatologist: Icons.TraumatologistOrthopedistIcon,
  endocrinologist: Icons.EndocrinologistIcon,
  urologist: Icons.UrologistIcon,
  surgeon: Icons.SurgeonIcon,
  rheumatologist: Icons.RheumatologistIcon,
  ultrasound: Icons.TherapistIcon,
};

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SpecialtiesPage() {
  return (
    <>
      <Header />

      <main className={styles.block}>
        <DoctorsHero />

        <section className={styles.section} aria-label="Специальности врачей">
          <div className={styles.container}>
            <ul className={styles.grid}>
              {specializations.map((specialization) => {
                const Icon =
                  SPECIALIZATION_ICONS[specialization.id] ??
                  Icons.TherapistIcon;

                return (
                  <li className={styles.item} key={specialization.id}>
                    <Link
                      className={styles.card}
                      to={`/doctors/${encodeURIComponent(specialization.slug)}`}
                    >
                      <span className={styles.iconWrapper}>
                        <Icon />
                      </span>

                      <div className={styles.content}>
                        <h3 className={styles.name}>{specialization.title}</h3>
                      </div>

                      <span className={styles.arrow} aria-hidden="true">
                        <ArrowIcon />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
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
