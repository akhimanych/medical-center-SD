import { Header } from "@/shared/ui/wedgets/header";
import { ServicesHero } from "@/shared/ui/wedgets/hero/servicesHero/servicesHero";
import { ServicesWidget } from "@/shared/ui/wedgets/service/servicesWidget";
import { AppointmentBanner } from "@/shared/ui/wedgets/appointmentBanner";
import { Footer } from "@/shared/ui/wedgets/footer";

import { HeartPulseIcon } from "@/shared/ui/icons/heartPulseIcon";
import medicalCenterImage from "@/assets/images/medical-center.png";

import styles from "./services-page.module.css";
export default function ServicePage() {
  return (
    <>
      <Header />

      <main className={styles.block}>
        <ServicesHero>
          <HeartPulseIcon />
        </ServicesHero>

        <ServicesWidget limit={19} showHeader={false} />

        <AppointmentBanner />
      </main>

      <Footer
        imageSrc={medicalCenterImage}
        directionsUrl="https://yandex.ru/maps/-/CXeXNR6n"
      />
    </>
  );
}
