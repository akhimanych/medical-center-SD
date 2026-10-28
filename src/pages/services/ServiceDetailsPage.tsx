import { Link, useParams } from "react-router";

import services from "@/db/services.json";
import prices from "@/db/prices.json";

import { Header } from "@/shared/ui/wedgets/header";
import { ServicesHero } from "@/shared/ui/wedgets/hero/servicesHero/servicesHero";
import { AppointmentBanner } from "@/shared/ui/wedgets/appointmentBanner";
import { Footer } from "@/shared/ui/wedgets/footer";
import { PriceTable } from "@/shared/ui/wedgets/priceTable/PriceTable";
import { DoctorsWidget } from "@/shared/ui/wedgets/doctorsWidget/doctorsWidget";

import { HeartPulseIcon } from "@/shared/ui/icons/heartPulseIcon";
import medicalCenterImage from "@/assets/images/medical-center.png";

import styles from "./ServiceDetailsPage.module.css";

export default function ServiceDetailsPage() {
  const { serviceId } = useParams();

  const service = services.find(
    (item) => item.slug === serviceId && item.isActive,
  );

  if (!service) {
    return (
      <>
        <Header />

        <main className={styles.block}>
          <h1>Направление не найдено</h1>

          <Link to="/services">Вернуться к списку услуг</Link>
        </main>

        <Footer
          imageSrc={medicalCenterImage}
          directionsUrl="https://yandex.ru/maps/-/CXeXNR6n"
        />
      </>
    );
  }

  const currentPrices = prices.filter(
    (item) => item.serviceId === service.id && item.isActive,
  );

  return (
    <>
      <Header />

      <main className={styles.block}>
        <ServicesHero
          title={service.title}
          description={service.description}
          isDetails
        >
          <HeartPulseIcon />
        </ServicesHero>

        <PriceTable items={currentPrices} />
        <DoctorsWidget
          title="Специалисты направления"
          eyebrow=""
          specializationIds={service.specializationIds}
          randomize={false}
          limit={3}
          showAllLink={false}
          showDetailsLink={false}
        />

        <AppointmentBanner />
      </main>

      <Footer
        imageSrc={medicalCenterImage}
        directionsUrl="https://yandex.ru/maps/-/CXeXNR6n"
      />
    </>
  );
}
