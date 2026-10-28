import { Link } from "react-router";

import { Header } from "@/shared/ui/wedgets/header";
import { LaboratoryHero } from "@/shared/ui/wedgets/hero/laboratoryHero";
import { LaboratoryPrices } from "@/shared/ui/wedgets/laboratoryPrices";
import { LaboratoryHelp } from "@/shared/ui/wedgets/laboratoryHelp";
import { AppointmentBanner } from "@/shared/ui/wedgets/appointmentBanner";
import { Footer } from "@/shared/ui/wedgets/footer";

import medicalCenterImage from "@/assets/images/medical-center.png";

import styles from "./laboratoryPage.module.css";

export default function LaboratoryPricesPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <LaboratoryHero />

        <div className={styles.container}>
          <nav className={styles.breadcrumbs} aria-label="Навигация по разделу">
            <Link className={styles.backLink} to="/services/lab-tests">
              ← Все лаборатории
            </Link>

            <span className={styles.breadcrumbDivider} aria-hidden="true">
              /
            </span>

            <span className={styles.breadcrumbCurrent} aria-current="page">
              Анализы и цены
            </span>
          </nav>

          <LaboratoryPrices />

          <LaboratoryHelp />
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
