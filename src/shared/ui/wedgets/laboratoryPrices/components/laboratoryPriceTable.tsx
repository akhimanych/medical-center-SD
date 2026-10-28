import { Fragment } from "react";

import type {
  LaboratoryCategory,
  LaboratoryTest,
} from "@/shared/Types/laboratory";

import styles from "../laboratoryPrices.module.css";

type LaboratoryPriceTableProps = {
  laboratoryTitle: string;
  tests: LaboratoryTest[];
  categories: LaboratoryCategory[];
  totalCount: number;
  onShowMore: () => void;
};

const priceFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export function LaboratoryPriceTable({
  laboratoryTitle,
  tests,
  categories,
  totalCount,
  onShowMore,
}: LaboratoryPriceTableProps) {
  const categoryTitles = new Map(
    categories.map((category) => [category.id, category.title]),
  );

  return (
    <>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <caption className={styles.visuallyHidden}>
            Анализы и цены лаборатории {laboratoryTitle}
          </caption>

          <thead>
            <tr>
              <th className={styles.codeColumn} scope="col">
                Код
              </th>

              <th className={styles.nameColumn} scope="col">
                <span className={styles.desktopHeading}>
                  Наименование исследования
                </span>

                <span className={styles.mobileHeading}>Исследование</span>
              </th>

              <th className={styles.priceColumn} scope="col">
                Стоимость
              </th>
            </tr>
          </thead>

          <tbody>
            {tests.map((test, index) => {
              const showCategory =
                index === 0 || tests[index - 1].categoryId !== test.categoryId;

              const code = test.code?.trim() || "—";

              return (
                <Fragment key={test.id}>
                  {showCategory && (
                    <tr className={styles.categoryRow}>
                      <th className={styles.desktopCategoryCell} colSpan={3}>
                        {categoryTitles.get(test.categoryId) ??
                          "Другие исследования"}
                      </th>

                      <th className={styles.mobileCategoryCell} colSpan={2}>
                        {categoryTitles.get(test.categoryId) ??
                          "Другие исследования"}
                      </th>
                    </tr>
                  )}

                  <tr
                    className={[
                      styles.testRow,
                      index % 2 === 1 ? styles.testRowAlternate : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <td className={`${styles.codeColumn} ${styles.code}`}>
                      {code}
                    </td>

                    <td className={styles.testName}>
                      <span className={styles.testTitle}>{test.title}</span>

                      <span className={styles.mobileCode}>Код: {code}</span>
                    </td>

                    <td className={styles.price}>
                      {test.price === null
                        ? "Уточняйте"
                        : priceFormatter.format(test.price)}
                    </td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.tableFooter}>
        <p className={styles.shownCount}>
          Показано {tests.length} из {totalCount}
        </p>

        {tests.length < totalCount && (
          <button
            className={styles.moreButton}
            type="button"
            onClick={onShowMore}
          >
            Показать ещё
          </button>
        )}
      </div>
    </>
  );
}
