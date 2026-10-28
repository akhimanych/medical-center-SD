import { useLayoutEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router";

import HomePage from "@/pages/home/home-page";
import ServicePage from "@/pages/services/services-page";
import ServiceDetailsPage from "@/pages/services/ServiceDetailsPage";

import SpecialtiesPage from "@/pages/doctors/specialties-page";
import DoctorsPage from "@/pages/doctors/doctorsPage";
import DoctorPage from "@/pages/doctors/doctorPage";

import ContactPage from "@/pages/contacts/contactsPage";

import LaboratoryPage from "@/pages/laboratoryPage/laboratoryPage";
import LaboratoryPricesPage from "./pages/laboratoryPage/laboratoryPricesPage";

import { PartnersPage } from "@/pages/partnersPage/partnersPage";

import { LicensesPage } from "@/pages/licensesPage/licensesPage";
import { DocumentsPage } from "@/pages/documentsPage/documentsPage";
import { AuthoritiesPage } from "@/pages/authorities/authoritiesPage";
import { ManagementPage } from "./pages/managementPage/managementPage";
import { TaxCertificatePage } from "./pages/taxCertificatePage/taxCertificatePage";
import { AboutCenterPage } from "./pages/aboutCenterPage/aboutCenterPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // Не сбрасываем прокрутку для ссылок на разделы страницы.
    if (hash) {
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/services" element={<ServicePage />} />

        <Route
          path="/services/:serviceId"
          element={<ServiceDetailsPage />}
        />

        <Route path="/doctors" element={<SpecialtiesPage />} />

        <Route
          path="/doctors/:specializationSlug"
          element={<DoctorsPage />}
        />

        <Route
          path="/doctors/:specializationSlug/:doctorSlug"
          element={<DoctorPage />}
        />

        <Route path="/contacts" element={<ContactPage />} />

        <Route
          path="/services/lab-tests"
          element={<LaboratoryPage />}
        />

        <Route
          path="/services/lab-tests/prices/:laboratorySlug"
          element={<LaboratoryPricesPage />}
        />

        <Route path="/partners" element={<PartnersPage />} />

        <Route path="/licenses" element={<LicensesPage />} />

        <Route path="/documents" element={<DocumentsPage />} />

        <Route
          path="/supervisory-authorities"
          element={<AuthoritiesPage />}
        />

        <Route path="/management" element={<ManagementPage />} />

        <Route
          path="/tax-deduction"
          element={<TaxCertificatePage />}
        />

        <Route path="/about" element={<AboutCenterPage />} />
      </Routes>
    </BrowserRouter>
  );
}