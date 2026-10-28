import styles from "../laboratoryPrices.module.css";

type LaboratoryOption = {
  id: string;
  title: string;
};

type LaboratoryTabsProps = {
  laboratories: LaboratoryOption[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export function LaboratoryTabs({
  laboratories,
  selectedId,
  onSelect,
}: LaboratoryTabsProps) {
  return (
    <div
      className={styles.tabs}
      role="group"
      aria-label="Выбор лаборатории"
    >
      {laboratories.map((laboratory) => {
        const isSelected = laboratory.id === selectedId;

        return (
          <button
            className={`${styles.tabButton} ${
              isSelected ? styles.tabButtonActive : ""
            }`}
            key={laboratory.id}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onSelect(laboratory.id)}
          >
            {laboratory.title}
          </button>
        );
      })}
    </div>
  );
}