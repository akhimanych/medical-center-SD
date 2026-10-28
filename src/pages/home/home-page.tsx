import "./home-page.module.css";

import { Header } from "@/shared/ui/wedgets/header";
import { Hero } from "@/shared/ui/wedgets/hero/homeHero";
import { AppointmentBanner } from "@/shared/ui/wedgets/appointmentBanner";
import { ServicesWidget } from "@/shared/ui/wedgets/service/servicesWidget";
import { DoctorsWidget } from "@/shared/ui/wedgets/doctorsWidget/doctorsWidget";
import { Footer } from "@/shared/ui/wedgets/footer";

import medicalCenterImage from "@/assets/images/medical-center.png";

import styles from "./home-page.module.css";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className={styles.block}>
        <Hero />
        <AppointmentBanner />
        <ServicesWidget />
        <DoctorsWidget />
      </main>

      <Footer
        imageSrc={medicalCenterImage}
        directionsUrl="https://yandex.ru/maps/-/CXeXNR6n"
      />
    </>
  );
}
