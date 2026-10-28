import { useId } from "react";
import { IconDocuments } from "@/shared/ui/icons/documentsIcon";
import styles from "./personalDataNotice.module.css";

type PersonalDataNoticeProps = {
  className?: string;
};

export function PersonalDataNotice({ className }: PersonalDataNoticeProps = {}) {
  const titleId = useId();

  return (
    <aside
      className={[styles.notice, className].filter(Boolean).join(" ")}
      aria-labelledby={titleId}
    >
      <span className={styles.iconWrapper} aria-hidden="true">
        <IconDocuments width={24} height={28.8} />
      </span>
      <div className={styles.content}>
        <h2 className={styles.title} id={titleId}>
          Информация о персональных данных
        </h2>
        <p className={styles.text}>
          Персональные данные размещены с письменного согласия медицинского
          работника на распространение неограниченному кругу лиц в соответствии
          с требованиями законодательства РФ
        </p>
      </div>
    </aside>
  );
}