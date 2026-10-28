import { Header } from "@/shared/ui/wedgets/header";
import { LaboratoryHero } from "@/shared/ui/wedgets/hero/laboratoryHero";
import { LaboratoryCatalog } from "@/shared/ui/wedgets/laboratoryCatalog";
import { LaboratoryHelp } from "@/shared/ui/wedgets/laboratoryHelp";
import { AppointmentBanner } from "@/shared/ui/wedgets/appointmentBanner";
import { Footer } from "@/shared/ui/wedgets/footer";

import medicalCenterImage from "@/assets/images/medical-center.png";

import styles from "./laboratoryPage.module.css";

export default function LaboratoryPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <LaboratoryHero
          title="Анализы и лаборатории"
          description="Выберите лабораторию, чтобы посмотреть исследования и цены."
        />

        <div className={styles.container}>
          <LaboratoryCatalog />

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
