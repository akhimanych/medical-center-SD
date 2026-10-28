import { Header } from "@/shared/ui/wedgets/header";
import { Footer } from "@/shared/ui/wedgets/footer";

import { LicensesHero } from "@/shared/ui/wedgets/hero/licenseHero";
import { LicenseExtract } from "@/shared/ui/wedgets/licenseExtract";
import { LicensesGallery } from "@/shared/ui/wedgets/content/licensesGallery";

import styles from "./licensesPage.module.css";
import medicalCenterImage from "@/assets/images/medical-center.png";

export function LicensesPage() {
  return (
    <>
      <Header />

      <main className={styles.block}>
        <LicensesHero />

        <LicenseExtract
          href="public/documents/vypiska_semei_doktor.pdf"
          date="04.05.2026"
          dateTime="2026-05-04"
        />

        <LicensesGallery />
      </main>

      <Footer
        imageSrc={medicalCenterImage}
        directionsUrl="https://yandex.ru/maps/-/CXeXNR6n"
      />
    </>
  );
}
