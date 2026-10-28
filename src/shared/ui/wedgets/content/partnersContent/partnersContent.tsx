import { useState } from "react";

import {
  IconInvitro,
  IconSvdHocpitalTwo,
  IconBioTechMed,
  IconSvdkHospitalKids,
  IconSvdHospitalOne,
} from "@/shared/ui/icons/laboratory";

import {
  IconRosgosstrakh,
  IconAlfaStrakhovanie,
  IconSoglasie,
  IconKapitalPolis,
  IconArsenal,
  IconIngosstrakh,
  IconSogaz,
  IconResoGarantia,
  IconMedexpress,
  IconVsk,
  IconSovcombankLife,
  IconMaks,
  IconYugoria,
  IconAllianzLife,
  IconLibertyInsurance,
  IconAbsolutInsurance,
  IconBestDoctor,
  IconPari,
  IconRegionMedservice,
  IconEnergogarant,
} from "@/shared/ui/icons/insuranceIcon";

import styles from "./partnersContent.module.css";

type PartnersContentProps = {
  invitroPricesHref?: string;
  bioTechMedPricesHref?: string;
};

const hospitals = [
  {
    id: "hospital-1",
    name: "Северодвинская городская больница № 1",
    Icon: IconSvdHospitalOne,
  },
  {
    id: "hospital-2",
    name: "Северодвинская городская больница № 2 скорой медицинской помощи",
    Icon: IconSvdHocpitalTwo,
  },
  {
    id: "children-hospital",
    name: "Северодвинская городская детская клиническая больница",
    Icon: IconSvdkHospitalKids,
  },
];

const insuranceCompanies = [
  {
    id: "rosgosstrakh",
    name: "Росгосстрах",
    Icon: IconRosgosstrakh,
  },
  {
    id: "alfa",
    name: "Альфастрахование",
    Icon: IconAlfaStrakhovanie,
  },
  {
    id: "soglasie",
    name: "Согласие",
    Icon: IconSoglasie,
  },
  {
    id: "kapital",
    name: "Капитал-полис",
    Icon: IconKapitalPolis,
  },
  {
    id: "arsenal",
    name: "Арсенал",
    Icon: IconArsenal,
  },
  {
    id: "ingosstrakh",
    name: "Ингосстрах",
    Icon: IconIngosstrakh,
  },
  {
    id: "sogaz",
    name: "Согаз",
    Icon: IconSogaz,
  },
  {
    id: "reso",
    name: "РЕСО-Гарантия",
    Icon: IconResoGarantia,
  },
  {
    id: "medexpress",
    name: "Медэкспресс",
    Icon: IconMedexpress,
  },
  {
    id: "vsk",
    name: "ВСК",
    Icon: IconVsk,
  },
  {
    id: "sovcombank-life",
    name: "Совкомбанк Жизнь",
    Icon: IconSovcombankLife,
  },
  {
    id: "maks",
    name: "МАКС",
    Icon: IconMaks,
  },
  {
    id: "yugoria",
    name: "Югория",
    Icon: IconYugoria,
  },
  {
    id: "allianz",
    name: "Альянс Жизнь",
    Icon: IconAllianzLife,
  },
  {
    id: "liberty",
    name: "Либерти Страхование",
    Icon: IconLibertyInsurance,
  },
  {
    id: "absolut",
    name: "Абсолют Страхование",
    Icon: IconAbsolutInsurance,
  },
  {
    id: "bestdoctor",
    name: "Бестдоктор",
    Icon: IconBestDoctor,
  },
  {
    id: "pari",
    name: "ПАРИ, филиал «Адвант»",
    Icon: IconPari,
  },
  {
    id: "region",
    name: "Регион-Медсервис",
    Icon: IconRegionMedservice,
  },
  {
    id: "energogarant",
    name: "ЭНЕРГОГАРАНТ",
    Icon: IconEnergogarant,
  },
];

function normalizeSearch(value: string) {
  return value
    .toLocaleLowerCase("ru-RU")
    .replace(/ё/g, "е")
    .replace(/[^a-zа-я0-9]/g, "");
}

export function PartnersContent({
  invitroPricesHref,
  bioTechMedPricesHref,
}: PartnersContentProps) {
  const [search, setSearch] = useState("");

  const normalizedSearch = normalizeSearch(search);

  const filteredCompanies = insuranceCompanies.filter((company) =>
    normalizeSearch(company.name).includes(normalizedSearch),
  );

  const laboratories = [
    {
      id: "invitro",
      name: "Лаборатория ИНВИТРО",
      location: "Москва, Санкт-Петербург",
      Icon: IconInvitro,
      href: invitroPricesHref,
    },
    {
      id: "biotechmed",
      name: "Диагностический лабораторный центр БиоТехМед",
      location: "Санкт-Петербург",
      Icon: IconBioTechMed,
      href: bioTechMedPricesHref,
    },
  ];

  return (
    <div className={styles.partners}>
      <div className={styles.container}>
        <section
          className={styles.section}
          aria-labelledby="partners-laboratories-title"
        >
          <h2 id="partners-laboratories-title" className={styles.sectionTitle}>
            Лаборатории
          </h2>

          <ul className={styles.laboratoriesGrid}>
            {laboratories.map(({ id, name, location, Icon, href }) => (
              <li key={id} className={styles.laboratoryCard}>
                <div className={styles.laboratoryLogo} aria-hidden="true">
                  <Icon />
                </div>

                <h3 className={styles.cardTitle}>{name}</h3>

                <p className={styles.location}>{location}</p>

                {href && (
                  <a className={styles.pricesLink} href={href}>
                    Анализы и цены
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section
          id="partners-hospitals"
          className={styles.section}
          aria-labelledby="partners-hospitals-title"
        >
          <h2 id="partners-hospitals-title" className={styles.sectionTitle}>
            Медицинские организации
          </h2>

          <ul className={styles.hospitalsGrid}>
            {hospitals.map(({ id, name, Icon }) => (
              <li key={id} className={styles.hospitalCard}>
                <div className={styles.hospitalIcon} aria-hidden="true">
                  <Icon />
                </div>

                <h3 className={styles.cardTitle}>{name}</h3>
              </li>
            ))}
          </ul>
        </section>

        <section
          className={styles.section}
          aria-labelledby="partners-insurance-title"
        >
          <div className={styles.insuranceHeader}>
            <div>
              <h2 id="partners-insurance-title" className={styles.sectionTitle}>
                Страховые компании
              </h2>

              <p className={styles.sectionDescription}>
                Партнёры по добровольному медицинскому страхованию
              </p>
            </div>

            <label className={styles.search}>
              <span className={styles.visuallyHidden}>
                Найти страховую компанию
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="
                    M10.5 17.5
                    A7 7 0 1 0 10.5 3.5
                    A7 7 0 1 0 10.5 17.5
                    M16 16L21 21
                  "
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Найти страховую компанию"
                aria-controls="partners-insurance-list"
              />
            </label>
          </div>

          <p className={styles.visuallyHidden} role="status" aria-atomic="true">
            Найдено компаний: {filteredCompanies.length}
          </p>

          <ul id="partners-insurance-list" className={styles.insuranceGrid}>
            {filteredCompanies.map(({ id, name, Icon }) => (
              <li key={id} className={styles.insuranceCard}>
                <div className={styles.insuranceLogo} aria-hidden="true">
                  <Icon />
                </div>

                <span className={styles.insuranceName}>{name}</span>
              </li>
            ))}
          </ul>

          {filteredCompanies.length === 0 && (
            <p className={styles.emptyState}>
              По вашему запросу ничего не найдено. Попробуйте изменить название
              компании.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
