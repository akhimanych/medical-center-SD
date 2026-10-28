import { Header } from "@/shared/ui/wedgets/header";
import { Footer } from "@/shared/ui/wedgets/footer";

import { DocumentsHero } from "@/shared/ui/wedgets/hero/documentsHero";
import { DocumentsContent } from "@/shared/ui/wedgets/content/documentsContent";

import medicalCenterImage from "@/assets/images/medical-center.png";

import styles from "./documentsPage.module.css";

export function DocumentsPage() {
  return (
    <>
      <Header />

      <main className={styles.block}>
        <DocumentsHero />
        <DocumentsContent />
      </main>

      <Footer
        imageSrc={medicalCenterImage}
        directionsUrl="https://yandex.ru/maps/-/CXeXNR6n"
      />
    </>
  );
}
