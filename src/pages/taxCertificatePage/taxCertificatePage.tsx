import { Header } from "@/shared/ui/wedgets/header";
import { Footer } from "@/shared/ui/wedgets/footer";

import { TaxCertificateHero } from "@/shared/ui/wedgets/hero/taxCertificateHero";
import { TaxCertificateContent } from "@/shared/ui/wedgets/taxCertificateContent";

import medicalCenterImage from "@/assets/images/medical-center.png";

import styles from "./taxCertificatePage.module.css";

export function TaxCertificatePage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <div className={styles.container}>
          <TaxCertificateHero />
          <TaxCertificateContent />
        </div>
      </main>

      <Footer
        imageSrc={medicalCenterImage}
        directionsUrl="https://yandex.ru/maps/-/CXeXNR6n"
      />
    </>
  );
}
