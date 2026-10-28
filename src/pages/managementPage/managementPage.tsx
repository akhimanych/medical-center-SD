import { Header } from "@/shared/ui/wedgets/header";
import { Footer } from "@/shared/ui/wedgets/footer";

import { ManagementHero } from "@/shared/ui/wedgets/hero/managementHero";
import { ManagementContent } from "@/shared/ui/wedgets/content/managementContent";

import styles from "./managementPage.module.css";
import medicalCenterImage from "@/assets/images/medical-center.png";

export function ManagementPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <div className={styles.container}>
          <ManagementHero />
          <ManagementContent />
        </div>
      </main>

      <Footer
        imageSrc={medicalCenterImage}
        directionsUrl="https://yandex.ru/maps/-/CXeXNR6n"
      />
    </>
  );
}
