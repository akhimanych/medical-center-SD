import { useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router";
import { VkIcon } from "@/shared/ui/icons/vkIcon/vkIcon";
import styles from "./mobileMenu.module.css";

type MobileMenuProps = {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  vkUrl: string;
};
type Section = "about" | "patients" | null;

const aboutLinks = [
  { title: "О медицинском центре", href: "/about" },
  { title: "Руководство", href: "/management" },
  { title: "Партнёры", href: "/partners" },
  { title: "Фотогалерея", href: "/about/gallery" },
];
const documentLinks = [
  { title: "Лицензии", href: "/licenses" },
  { title: "Документы центра", href: "/documents" },
  { title: "Контролирующие органы", href: "/supervisory-authorities" },
];
const patientsLinks = [
  { title: "Частые вопросы", href: "/patients/faq" },
  { title: "Страховые компании", href: "/patients/insurance" },
  { title: "Заказать справку", href: "/tax-deduction" },
];
const FNS_INSTRUCTION_URL = encodeURI("/documents/instruktsiya po otslezhivaniyu spravki v lk fns.pdf");

function Arrow({ down = false, open = false }: { down?: boolean; open?: boolean }) {
  return (
    <svg className={`${styles.arrow} ${open ? styles.arrowOpen : ""}`} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d={down ? "m6 9 6 6 6-6" : "M5 12h14m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MobileMenu({ id, isOpen, onClose, vkUrl }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const aboutId = useId();
  const patientsId = useId();
  const [expanded, setExpanded] = useState<Section>(null);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!isOpen) {
      if (dialog.open) dialog.close();
      setExpanded(null);
      return;
    }

    const bodyOverflow = document.body.style.overflow;
    const rootOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    if (!dialog.open) dialog.showModal();
    closeButtonRef.current?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = rootOverflow;
      if (dialog.open) dialog.close();
    };
  }, [isOpen]);

  function toggle(section: Exclude<Section, null>) {
    setExpanded((current) => current === section ? null : section);
  }
  const rowClass = ({ isActive }: { isActive: boolean }) => `${styles.rowLink} ${isActive ? styles.active : ""}`;
  const subClass = ({ isActive }: { isActive: boolean }) => `${styles.subLink} ${isActive ? styles.subActive : ""}`;

  if (typeof document === "undefined") return null;

  return createPortal(
    <dialog
      className={styles.dialog}
      ref={dialogRef}
      id={id}
      aria-labelledby={titleId}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
      }}
    >
      <div className={styles.content}>
        <div className={styles.headingRow}>
          <div>
            <p className={styles.brand}>Семейный доктор</p>
            <h2 className={styles.title} id={titleId}>Навигация</h2>
          </div>
          <button className={styles.closeButton} ref={closeButtonRef} type="button" onClick={onClose} aria-label="Закрыть навигацию">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
              <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className={styles.navigation} aria-label="Мобильная навигация">
          <ul className={styles.list}>
            <li className={styles.item}>
              <NavLink to="/services" className={rowClass} onClick={onClose}><span>Услуги</span><Arrow /></NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="/doctors" className={rowClass} onClick={onClose}><span>Врачи</span><Arrow /></NavLink>
            </li>
            <li className={styles.item}>
              <button className={`${styles.rowButton} ${expanded === "about" ? styles.expanded : ""}`} type="button" aria-expanded={expanded === "about"} aria-controls={aboutId} onClick={() => toggle("about")}>
                <span>О нас</span><Arrow down open={expanded === "about"} />
              </button>
              <div className={styles.submenu} id={aboutId} hidden={expanded !== "about"}>
                <p className={styles.groupLabel}>О центре</p>
                <ul className={styles.subList}>
                  {aboutLinks.map((link) => <li key={link.href}><NavLink to={link.href} end className={subClass} onClick={onClose}>{link.title}</NavLink></li>)}
                </ul>
                <p className={styles.groupLabel}>Документы и сведения</p>
                <ul className={styles.subList}>
                  {documentLinks.map((link) => <li key={link.href}><NavLink to={link.href} className={subClass} onClick={onClose}>{link.title}</NavLink></li>)}
                </ul>
              </div>
            </li>
            <li className={styles.item}>
              <button className={`${styles.rowButton} ${expanded === "patients" ? styles.expanded : ""}`} type="button" aria-expanded={expanded === "patients"} aria-controls={patientsId} onClick={() => toggle("patients")}>
                <span>Пациентам</span><Arrow down open={expanded === "patients"} />
              </button>
              <div className={styles.submenu} id={patientsId} hidden={expanded !== "patients"}>
                <ul className={styles.subList}>
                  {patientsLinks.map((link) => <li key={link.href}><NavLink to={link.href} className={subClass} onClick={onClose}>{link.title}</NavLink></li>)}
                  <li><a className={styles.subLink} href={FNS_INSTRUCTION_URL} target="_blank" rel="noopener noreferrer" onClick={onClose}>Найти справку в личном кабинете ФНС <span aria-hidden="true">↗</span></a></li>
                </ul>
              </div>
            </li>
            <li className={styles.item}>
              <NavLink to="/contacts" className={rowClass} onClick={onClose}><span>Контакты</span><Arrow /></NavLink>
            </li>
          </ul>
        </nav>

        <div className={styles.bottom}>
          <section className={styles.contactCard} aria-label="Контакты медицинского центра">
            <p className={styles.contactLabel}>Связаться с центром</p>
            <a className={styles.phone} href="tel:+78184548080">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="m7 3 3 5-2 2a15 15 0 0 0 6 6l2-2 5 3-1 3c-.3.8-1.1 1.2-2 1C10 20 4 14 3 6c-.2-.9.2-1.7 1-2l3-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
              +7 (818) 454-80-80
            </a>
            <a className={styles.secondPhone} href="tel:+79502500333">+7 (950) 250-03-33</a>
            <p className={styles.address}>Северодвинск, Железнодорожная, 34</p>
            <p className={styles.hours}>ПН–ПТ: 8:00–20:00 · СБ: 8:00–18:00</p>
          </section>
          <a className={styles.vkLink} href={vkUrl} target="_blank" rel="noopener noreferrer" onClick={onClose} aria-label="Мы во ВКонтакте — открыть в новой вкладке">
            <VkIcon className={styles.vkIcon} /><span>Мы во ВКонтакте</span><span className={styles.externalArrow} aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </dialog>,
    document.body,
  );
}