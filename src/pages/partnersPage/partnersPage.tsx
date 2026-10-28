import { Header } from "@/shared/ui/wedgets/header";
import { PartnersHero } from "@/shared/ui/wedgets/hero/partnersHero";
import { PartnersContent } from "@/shared/ui/wedgets/content/partnersContent";
import { Footer } from "@/shared/ui/wedgets/footer";

import styles from "./partnersPage.module.css";
import medicalCenterImage from "@/assets/images/medical-center.png";


export function PartnersPage() {
  return (
    <>
    <Header />
    <main className={styles.block}>
      <PartnersHero />
      <PartnersContent />
      <Footer 
              imageSrc={medicalCenterImage}
        directionsUrl="https://yandex.ru/maps/-/CXeXNR6n"/>
    </main>
    </>
  );
}