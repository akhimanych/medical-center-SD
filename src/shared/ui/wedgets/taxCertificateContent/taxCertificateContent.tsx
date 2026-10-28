import { useId, useState } from "react";
import type { FormEvent } from "react";
import styles from "./taxCertificateContent.module.css";

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  maxLength?: number;
  numeric?: boolean;
};
function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
  pattern,
  maxLength,
  numeric,
}: FieldProps) {
  return (
    <label className={styles.field}>
      <span>
        {label}
        {required ? " *" : ""}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        maxLength={maxLength}
        inputMode={numeric ? "numeric" : undefined}
      />
    </label>
  );
}
function PersonFields({
  prefix,
  taxpayer = false,
}: {
  prefix: string;
  taxpayer?: boolean;
}) {
  const [kind, setKind] = useState("inn");
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>
        {taxpayer ? "Данные налогоплательщика" : "Данные пациента"}
      </legend>
      {taxpayer && (
        <p className={styles.sectionHint}>
          Человек, оплативший медицинские услуги
        </p>
      )}
      {!taxpayer && (
        <fieldset className={styles.relationship}>
          <legend>Кем приходится пациент? *</legend>
          <div className={styles.radioRow}>
            {[
              ["spouse", "Супруг(а)"],
              ["child", "Сын / дочь"],
              ["parent", "Мать / отец"],
            ].map(([value, label]) => (
              <label key={value} className={styles.radioLabel}>
                <input
                  type="radio"
                  name={`${prefix}-relationship`}
                  value={value}
                  required
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}
      <div className={styles.fields}>
        <label className={styles.field}>
          <span>Документ для идентификации *</span>
          <select
            name={`${prefix}-documentKind`}
            value={kind}
            onChange={(e) => setKind(e.target.value)}
          >
            <option value="inn">ИНН</option>
            <option value="other">
              Другой документ, удостоверяющий личность
            </option>
          </select>
        </label>
        {kind === "inn" ? (
          <Field
            key="inn"
            label={taxpayer ? "ИНН налогоплательщика" : "ИНН пациента"}
            name={`${prefix}-inn`}
            numeric
            pattern="[0-9]{12}"
            maxLength={12}
            placeholder="12 цифр"
          />
        ) : (
          <div key="other" className={styles.documentFields}>
            <Field
              label="Наименование документа"
              name={`${prefix}-documentName`}
              placeholder="Введите наименование документа"
              maxLength={150}
            />
            <div className={styles.twoColumns}>
              <Field
                label="Серия"
                name={`${prefix}-documentSeries`}
                placeholder="Если указана в документе"
                required={false}
                maxLength={30}
              />
              <Field
                label="Номер"
                name={`${prefix}-documentNumber`}
                placeholder="Номер документа"
                maxLength={50}
              />
            </div>
            <Field
              label="Дата выдачи документа"
              name={`${prefix}-documentIssueDate`}
              type="date"
            />
          </div>
        )}
        <Field
          label={taxpayer ? "ФИО налогоплательщика" : "ФИО пациента"}
          name={`${prefix}-fullName`}
          placeholder="Фамилия, имя, отчество"
          maxLength={200}
        />
        <div className={taxpayer ? styles.twoColumns : undefined}>
          <Field
            label={taxpayer ? "Дата рождения" : "Дата рождения пациента"}
            name={`${prefix}-birthDate`}
            type="date"
          />
          {taxpayer && (
            <Field
              label="Налоговый период (год)"
              name="taxYear"
              numeric
              pattern="[0-9]{4}"
              maxLength={4}
              placeholder="Укажите год оплаты"
            />
          )}
        </div>
        {taxpayer && (
          <Field
            label="Номер телефона"
            name="phone"
            type="tel"
            placeholder="+7 (___) ___-__-__"
            maxLength={30}
          />
        )}
      </div>
    </fieldset>
  );
}
export function TaxCertificateContent() {
  const [recipient, setRecipient] = useState("self");
  const [validationStarted, setValidationStarted] = useState(false);
  const [showPreviewNotice, setShowPreviewNotice] = useState(false);
  const id = useId();
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setValidationStarted(true);
    setShowPreviewNotice(false);
    if (!form.checkValidity()) {
      form
        .querySelector<
          HTMLInputElement | HTMLSelectElement
        >("input:invalid, select:invalid")
        ?.focus();
      return;
    }
    setShowPreviewNotice(true);
  }
  return (
    <div className={styles.layout}>
      <section className={styles.formCard} aria-labelledby={`${id}-title`}>
        <h2 className={styles.title} id={`${id}-title`}>
          Заявление на выдачу справки
        </h2>
        <p className={styles.intro}>
          Укажите, кому были оказаны услуги, и заполните данные для подготовки
          справки.
        </p>
        <div className={styles.previewBadge}>
          Предпросмотр формы · отправка пока не подключена
        </div>
        <form
          noValidate
          data-validation-started={validationStarted ? "true" : "false"}
          onSubmit={handleSubmit}
          onChange={() => setShowPreviewNotice(false)}
        >
          <fieldset className={styles.recipient}>
            <legend>Кому оказаны медицинские услуги?</legend>
            <div className={styles.segmented}>
              {[
                ["self", "Мне"],
                ["relative", "Родственнику"],
              ].map(([value, label]) => (
                <label key={value} className={styles.segment}>
                  <input
                    type="radio"
                    name="recipient"
                    value={value}
                    checked={recipient === value}
                    onChange={() => setRecipient(value)}
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <PersonFields prefix="taxpayer" taxpayer />
          {recipient === "relative" && (
            <div className={styles.patientSection}>
              <PersonFields prefix="patient" />
            </div>
          )}
          <div className={styles.consents}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" name="sendToFns" />
              <span>
                Прошу направить справку в личный кабинет налогоплательщика ФНС
                России
              </span>
            </label>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" name="personalDataConsent" required />
              <span>
                Даю согласие на обработку персональных данных для подготовки
                справки *
              </span>
            </label>
            <p className={styles.legalHint}>
              Текст согласия и политику обработки персональных данных добавим
              перед запуском формы.
            </p>
          </div>
          {validationStarted && (
            <p className={styles.validationHint} role="alert">
              Проверьте обязательные поля, выделенные красным. ИНН должен
              содержать 12 цифр, год — 4 цифры.
            </p>
          )}
          <div className={styles.formFooter}>
            <p className={styles.requiredHint}>* Обязательные поля</p>
            <button className={styles.submitButton} type="submit">
              Отправить заявление
            </button>
          </div>
          <p className={styles.result} role="status" aria-live="polite">
            {showPreviewNotice
              ? "Поля заполнены. Это демонстрационная форма: заявление не отправлено. Подключение отправки будет добавлено позже."
              : ""}
          </p>
        </form>
      </section>
      <aside className={styles.helpCard} aria-labelledby={`${id}-help`}>
        <div className={styles.helpHeading}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 11v6M12 7v1" />
          </svg>
          <h2 id={`${id}-help`}>Перед заполнением</h2>
        </div>
        <ol className={styles.helpList}>
          <li>Выберите, кому были оказаны медицинские услуги.</li>
          <li>Укажите данные человека, оплатившего лечение.</li>
          <li>
            Для налогоплательщика и пациента можно выбрать разные документы.
          </li>
          <li>При выборе другого документа укажите его реквизиты.</li>
          <li>
            Проверьте ФИО, реквизиты документа и номер телефона перед отправкой.
          </li>
        </ol>
        <p className={styles.helpNote}>
          Если услуги оказаны вам, отдельный блок данных пациента заполнять не
          нужно.
        </p>
      </aside>
    </div>
  );
}
