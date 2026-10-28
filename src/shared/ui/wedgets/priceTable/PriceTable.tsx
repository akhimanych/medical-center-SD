import { useId } from "react";

import styles from "./priceTable.module.css";

type PriceItem = {
  id: string;
  title: string;
  price: number;
};

type PriceTableProps = {
  items: PriceItem[];
  title?: string;
};

export function PriceTable({
  items,
  title = "Стоимость консультации или услуги",
}: PriceTableProps) {
  const titleId = useId();

  return (
    <section className={styles.section} aria-labelledby={titleId}>
      <div className={styles.container}>
        <h2 className={styles.title} id={titleId}>
          {title}
        </h2>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <p>Позиции прайса не найдены.</p>
          </div>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <caption className={styles.visuallyHidden}>
                {title}
              </caption>

              <thead>
                <tr>
                  <th scope="col">Наименование услуги</th>
                  <th scope="col" className={styles.priceColumn}>
                    Стоимость
                  </th>
                </tr>
              </thead>

              <tbody>
                {items.map((item) => (
                  <tr className={styles.serviceRow} key={item.id}>
                    <td className={styles.serviceName}>{item.title}</td>
                    <td className={styles.priceColumn}>
                      {item.price.toLocaleString("ru-RU")} ₽
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}