import { useId } from "react";

import type { LaboratoryCategory } from "@/shared/Types/laboratory";

import styles from "../laboratoryPrices.module.css";

type LaboratoryFiltersProps = {
  query: string;
  categoryId: string;
  categories: LaboratoryCategory[];
  onQueryChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
};

export function LaboratoryFilters({
  query,
  categoryId,
  categories,
  onQueryChange,
  onCategoryChange,
}: LaboratoryFiltersProps) {
  const searchId = useId();
  const categorySelectId = useId();

  return (
    <div className={styles.filters}>
      <div className={styles.searchField}>
        <label className={styles.label} htmlFor={searchId}>
          Поиск анализа
        </label>

        <div className={styles.inputWrapper}>
          <svg
            className={styles.searchIcon}
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            focusable="false"
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

          <input
            className={styles.input}
            id={searchId}
            type="search"
            name="analysis"
            placeholder="Поиск по названию или коду анализа"
            value={query}
            onChange={(event) => {
              onQueryChange(event.target.value);
            }}
          />
        </div>
      </div>

      <div className={styles.categoryField}>
        <label
          className={styles.label}
          htmlFor={categorySelectId}
        >
          Категория
        </label>

        <select
          className={styles.select}
          id={categorySelectId}
          value={categoryId}
          onChange={(event) => {
            onCategoryChange(event.target.value);
          }}
        >
          <option value="">Все категории</option>

          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}