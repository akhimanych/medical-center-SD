// Сюда скопируй импорты Header и Footer из DocumentsPage.

import { AuthoritiesHero } from "@/shared/ui/wedgets/hero/authoritiesHero";
import { AuthoritiesContent } from "@/shared/ui/wedgets/content/authoritiesContent";
import { Header } from "@/shared/ui/wedgets/header";
import { Footer } from "@/shared/ui/wedgets/footer";

import medicalCenterImage from "@/assets/images/medical-center.png";

import styles from "./AuthoritiesPage.module.css";

export function AuthoritiesPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <div className={styles.container}>
          <AuthoritiesHero />
          <AuthoritiesContent />
        </div>
      </main>

      <Footer
        imageSrc={medicalCenterImage}
        directionsUrl="https://yandex.ru/maps/-/CXeXNR6n"
      />
    </>
  );
}
