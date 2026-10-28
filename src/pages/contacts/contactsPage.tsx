import { Header } from "@/shared/ui/wedgets/header";
import { ContactCard } from "@/shared/ui/wedgets/content/contactCard";
import { LocationMap } from "@/shared/ui/wedgets/locationMap";
import { AppointmentBanner } from "@/shared/ui/wedgets/appointmentBanner";
import { Footer } from "@/shared/ui/wedgets/footer";

import medicalCenterImage from "@/assets/images/medical-center.png";

import styles from "./ContactsPage.module.css";

const DIRECTIONS_URL = "https://yandex.ru/maps/-/CXeXNR6n";

export default function ContactsPage() {
  return (
    <>
      <Header />

      <main className={styles.page} aria-label="Контакты">
        <section
          className={styles.contactSection}
          aria-label="Контактная информация медицинского центра"
        >
          <div className={styles.container}>
            <ContactCard
              imageSrc={medicalCenterImage}
              directionsUrl={DIRECTIONS_URL}
            />
          </div>
        </section>

        <LocationMap />

        <AppointmentBanner />
      </main>

      <Footer
        imageSrc={medicalCenterImage}
        directionsUrl={DIRECTIONS_URL}
      />
    </>
  );
}