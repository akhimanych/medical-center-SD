import { useId, useState } from "react";
import type { FormEvent, SVGProps } from "react";
import { Link } from "react-router";

import {
  IconInvitro,
  IconHospital,
  IconBioTechMed,
} from "@/shared/ui/icons/laboratory";

import styles from "./laboratoryCatalog.module.css";

type LaboratoryCard = {
  id: string;
  title: string;
  searchText: string;
  logo: "biotechmed" | "invitro" | "hospital";
  detailsUrl: string;
};

const laboratories: LaboratoryCard[] = [
  {
    id: "biotechmed",
    title: "БиоТехМед",
    searchText: "биотехмед био тех мед biotechmed",
    logo: "biotechmed",
    detailsUrl: "/services/lab-tests/prices/biotechmed",
  },
  {
    id: "invitro",
    title: "Инвитро",
    searchText: "инвитро invitro",
    logo: "invitro",
    detailsUrl: "/services/lab-tests/prices/invitro",
  },
  {
    id: "hospital",
    title: "ГБУЗ АО «СГБ № 2» СМП",
    searchText: "гбуз ао сгб 2 смп больница",
    logo: "hospital",
    detailsUrl: "/services/lab-tests/prices/hospital",
  },
];

function normalizeQuery(value: string): string {
  return value
    .toLocaleLowerCase("ru-RU")
    .replace(/ё/g, "е")
    .replace(/[«»№.,]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="m15 15 6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LaboratoryLogo({ logo }: { logo: LaboratoryCard["logo"] }) {
  switch (logo) {
    case "biotechmed":
      return <IconBioTechMed className={styles.logo} width={250} height={43} />;

    case "invitro":
      return <IconInvitro className={styles.logo} width={200} height={36} />;

    case "hospital":
      return <IconHospital className={styles.logo} width={250} height={70} />;
  }
}

export function LaboratoryCatalog() {
  const inputId = useId();
  const titleId = useId();

  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");

  const queryWords = normalizeQuery(query).split(" ").filter(Boolean);

  const visibleLaboratories = laboratories.filter((laboratory) => {
    const text = normalizeQuery(`${laboratory.title} ${laboratory.searchText}`);

    return queryWords.every((word) => text.includes(word));
  });

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setQuery(inputValue.trim());
  }

  function resetSearch() {
    setInputValue("");
    setQuery("");
  }

  return (
    <section className={styles.section} aria-labelledby={titleId}>
      <form className={styles.search} onSubmit={handleSearch}>
        <label className={styles.label} htmlFor={inputId}>
          Поиск лаборатории
        </label>

        <div className={styles.searchRow}>
          <div className={styles.inputWrapper}>
            <SearchIcon className={styles.searchIcon} />

            <input
              className={styles.input}
              id={inputId}
              type="search"
              name="laboratory"
              placeholder="Введите название лаборатории"
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
            />
          </div>

          <button className={styles.searchButton} type="submit">
            Найти
          </button>
        </div>
      </form>

      <div className={styles.headingRow}>
        <h2 className={styles.title} id={titleId}>
          Выберите лабораторию
        </h2>

        {query && (
          <button
            className={styles.resetButton}
            type="button"
            onClick={resetSearch}
          >
            Сбросить поиск
          </button>
        )}
      </div>

      <p className={styles.resultStatus} role="status">
        {query ? `Найдено лабораторий: ${visibleLaboratories.length}` : ""}
      </p>

      {visibleLaboratories.length > 0 ? (
        <ul className={styles.grid}>
          {visibleLaboratories.map((laboratory) => (
            <li className={styles.item} key={laboratory.id}>
              <Link
                className={styles.card}
                to={laboratory.detailsUrl}
                aria-label={`Посмотреть анализы и цены лаборатории ${laboratory.title}`}
              >
                <div className={styles.logoWrapper}>
                  <LaboratoryLogo logo={laboratory.logo} />
                </div>

                <p className={styles.cardDescription}>
                  Анализы, выполняемые в лаборатории
                </p>

                <h3 className={styles.cardTitle}>{laboratory.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.empty}>
          <p>По вашему запросу лаборатории не найдены.</p>

          <button
            className={styles.resetButton}
            type="button"
            onClick={resetSearch}
          >
            Показать все лаборатории
          </button>
        </div>
      )}
    </section>
  );
}
