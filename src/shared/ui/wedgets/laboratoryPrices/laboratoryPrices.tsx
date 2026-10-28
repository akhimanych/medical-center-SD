import { useId, useState } from "react";
import { useNavigate, useParams } from "react-router";

import biotechmedData from "@/db/laboratories/biotechmed.json";
import invitroData from "@/db/laboratories/invitro.json";
import hospitalData from "@/db/laboratories/sgb-smp.json";

import type { Laboratory } from "@/shared/Types/laboratory";

import { LaboratoryTabs } from "./components/laboratoryTabs";
import { LaboratoryFilters } from "./components/laboratoryFilters";
import { LaboratoryPriceTable } from "./components/laboratoryPriceTable";

import styles from "./laboratoryPrices.module.css";

type LaboratoryEntry = {
  routeSlug: string;
  tabTitle: string;
  data: Laboratory;
};

const laboratories: LaboratoryEntry[] = [
  {
    routeSlug: "biotechmed",
    tabTitle: "БиоТехМед",
    data: biotechmedData,
  },
  {
    routeSlug: "invitro",
    tabTitle: "Инвитро",
    data: invitroData,
  },
  {
    routeSlug: "hospital",
    tabTitle: "СГБ № 2 СМП",
    data: hospitalData,
  },
];

const laboratoryOptions = laboratories.map((entry) => ({
  id: entry.data.id,
  title: entry.tabTitle,
}));

const PAGE_SIZE = 30;

function normalizeQuery(value: string): string {
  return value
    .toLocaleLowerCase("ru-RU")
    .replace(/ё/g, "е")
    .replace(/а/g, "a")
    .replace(/в/g, "b")
    .replace(/[«»№.,]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function LaboratoryPrices() {
  const titleId = useId();
  const navigate = useNavigate();

  const { laboratorySlug } = useParams<{
    laboratorySlug: string;
  }>();

  const [query, setQuery] = useState("");

  const [categorySelection, setCategorySelection] = useState({
    laboratoryId: "",
    categoryId: "",
  });

  const [pagination, setPagination] = useState({
    laboratoryId: "",
    count: PAGE_SIZE,
  });

  const selectedEntry = laboratorySlug
    ? laboratories.find(
        (entry) => entry.routeSlug === laboratorySlug
      )
    : laboratories[0];

  const laboratory = selectedEntry?.data;

  // Категория и количество строк относятся к конкретной лаборатории.
  const categoryId =
    laboratory &&
    categorySelection.laboratoryId === laboratory.id
      ? categorySelection.categoryId
      : "";

  const visibleCount =
    laboratory && pagination.laboratoryId === laboratory.id
      ? pagination.count
      : PAGE_SIZE;

  const queryWords = normalizeQuery(query)
    .split(" ")
    .filter(Boolean);

  const filteredTests =
    laboratory?.tests.filter((test) => {
      const matchesCategory =
        !categoryId || test.categoryId === categoryId;

      const text = normalizeQuery(
        `${test.title} ${test.code ?? ""}`
      );

      const matchesQuery = queryWords.every((word) =>
        text.includes(word)
      );

      return matchesCategory && matchesQuery;
    }) ?? [];

  const visibleTests = filteredTests.slice(0, visibleCount);

  const hasFilters =
    query.length > 0 || categoryId.length > 0;

  function changeLaboratory(id: string) {
    const nextEntry = laboratories.find(
      (entry) => entry.data.id === id
    );

    if (!nextEntry || nextEntry.data.id === laboratory?.id) {
      return;
    }

    setCategorySelection({
      laboratoryId: nextEntry.data.id,
      categoryId: "",
    });

    setPagination({
      laboratoryId: nextEntry.data.id,
      count: PAGE_SIZE,
    });

    navigate(
      `/services/lab-tests/prices/${nextEntry.routeSlug}`
    );
  }

  function changeQuery(value: string) {
    setQuery(value);

    setPagination({
      laboratoryId: laboratory?.id ?? "",
      count: PAGE_SIZE,
    });
  }

  function changeCategory(value: string) {
    setCategorySelection({
      laboratoryId: laboratory?.id ?? "",
      categoryId: value,
    });

    setPagination({
      laboratoryId: laboratory?.id ?? "",
      count: PAGE_SIZE,
    });
  }

  function resetFilters() {
    setQuery("");

    setCategorySelection({
      laboratoryId: laboratory?.id ?? "",
      categoryId: "",
    });

    setPagination({
      laboratoryId: laboratory?.id ?? "",
      count: PAGE_SIZE,
    });
  }

  function showMore() {
    if (!laboratory) {
      return;
    }

    setPagination({
      laboratoryId: laboratory.id,
      count: visibleCount + PAGE_SIZE,
    });
  }

  if (!laboratory) {
    return (
      <section
        className={styles.section}
        aria-labelledby={titleId}
      >
        <h2 className={styles.title} id={titleId}>
          Лаборатория не найдена
        </h2>

        <div className={styles.empty}>
          <p>Выберите лабораторию, чтобы посмотреть прайс.</p>
        </div>

        <LaboratoryTabs
          laboratories={laboratoryOptions}
          selectedId=""
          onSelect={changeLaboratory}
        />
      </section>
    );
  }

  return (
    <section
      className={styles.section}
      aria-labelledby={titleId}
    >
      <LaboratoryTabs
        laboratories={laboratoryOptions}
        selectedId={laboratory.id}
        onSelect={changeLaboratory}
      />

      <LaboratoryFilters
        query={query}
        categoryId={categoryId}
        categories={laboratory.categories}
        onQueryChange={changeQuery}
        onCategoryChange={changeCategory}
      />

      <div className={styles.headingRow}>
        <div>
          <h2 className={styles.title} id={titleId}>
            Исследования и стоимость
          </h2>

          <p className={styles.laboratoryName}>
            {laboratory.title}
          </p>
        </div>

        {hasFilters && (
          <button
            className={styles.resetButton}
            type="button"
            onClick={resetFilters}
          >
            Сбросить фильтры
          </button>
        )}
      </div>

      <p className={styles.resultStatus} role="status">
        {hasFilters
          ? `Найдено исследований: ${filteredTests.length}`
          : `Всего исследований: ${laboratory.tests.length}`}
      </p>

      {visibleTests.length > 0 ? (
        <LaboratoryPriceTable
          laboratoryTitle={laboratory.title}
          tests={visibleTests}
          categories={laboratory.categories}
          totalCount={filteredTests.length}
          onShowMore={showMore}
        />
      ) : (
        <div className={styles.empty}>
          <p>
            {laboratory.tests.length === 0
              ? "Прайс этой лаборатории пока не добавлен."
              : "По вашему запросу исследования не найдены."}
          </p>

          {hasFilters && (
            <button
              className={styles.resetButton}
              type="button"
              onClick={resetFilters}
            >
              Сбросить фильтры
            </button>
          )}
        </div>
      )}

      <p className={styles.priceNote}>
        Актуальную стоимость, условия сдачи анализов и стоимость
        взятия биоматериала уточняйте у администратора центра.
      </p>
    </section>
  );
}