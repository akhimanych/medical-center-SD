import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Link, useLocation } from "react-router";

import { FamilyDoctorLogoIcon } from "@/shared/ui/icons/logo";
import { AboutMenu } from "@/shared/ui/wedgets/aboutMenu";
import { PatientsMenu } from "@/shared/ui/wedgets/patientsMenu";
import { MobileMenu } from "@/shared/ui/wedgets/header/mobileMenu/mobileMenu";
import { VkIcon } from "@/shared/ui/icons/vkIcon/";

import styles from "./header.module.css";

const VK_GROUP_URL = "https://vk.ru/famdoc";
const navigation = [
  { label: "Услуги", href: "/services" },
  { label: "Врачи", href: "/doctors" },
  { label: "О нас", href: "/about" },
  { label: "Пациентам", href: "/patients" },
  { label: "Контакты", href: "/contacts" },
];
type OpenMenu = "about" | "patients" | null;

function Chevron({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const aboutButtonRef = useRef<HTMLButtonElement>(null);
  const patientsButtonRef = useRef<HTMLButtonElement>(null);
  const aboutMenuId = useId();
  const patientsMenuId = useId();
  const mobileMenuId = useId();
  const location = useLocation();

  const closeMenus = useCallback(() => {
    setOpenMenu(null);
    setIsMobileOpen(false);
  }, []);

  useEffect(() => {
    closeMenus();
  }, [location.pathname, location.search, location.hash, closeMenus]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1100px)");
    function handleResize() {
      closeMenus();
    }
    media.addEventListener("change", handleResize);
    return () => media.removeEventListener("change", handleResize);
  }, [closeMenus]);

  useEffect(() => {
    if (!openMenu) return;
    function handlePointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
        setOpenMenu(null);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpenMenu(null);
      if (openMenu === "about") aboutButtonRef.current?.focus();
      else patientsButtonRef.current?.focus();
    }
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openMenu]);

  function toggleMenu(menu: Exclude<OpenMenu, null>) {
    setOpenMenu((current) => (current === menu ? null : menu));
  }

  return (
    <>
      <header
        className={styles.header}
        ref={headerRef}
        onBlur={(event) => {
          if (
            !(event.relatedTarget instanceof Node) ||
            !event.currentTarget.contains(event.relatedTarget)
          ) {
            setOpenMenu(null);
          }
        }}
      >
        <div className={styles.container}>
          <Link
            className={styles.logo}
            to="/"
            onClick={closeMenus}
            aria-label="Семейный доктор — перейти на главную страницу"
          >
            <FamilyDoctorLogoIcon
              className={styles.logoIcon}
              width={260}
              height={73.5}
            />
          </Link>

          <button
            className={styles.mobileToggle}
            type="button"
            aria-label="Открыть навигацию"
            aria-haspopup="dialog"
            aria-expanded={isMobileOpen}
            aria-controls={mobileMenuId}
            onClick={() => {
              setOpenMenu(null);
              setIsMobileOpen(true);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <nav className={styles.navigation} aria-label="Основная навигация">
            <ul className={styles.navigationList}>
              {navigation.map((item) => (
                <li className={styles.navigationItem} key={item.href}>
                  {item.href === "/about" ? (
                    <>
                      <button
                        className={`${styles.navigationLink} ${openMenu === "about" ? styles.navigationLinkActive : ""}`}
                        ref={aboutButtonRef}
                        type="button"
                        aria-expanded={openMenu === "about"}
                        aria-controls={aboutMenuId}
                        onClick={() => toggleMenu("about")}
                      >
                        О нас <Chevron isOpen={openMenu === "about"} />
                      </button>
                      <AboutMenu
                        id={aboutMenuId}
                        isOpen={openMenu === "about"}
                        onNavigate={closeMenus}
                      />
                    </>
                  ) : item.href === "/patients" ? (
                    <>
                      <button
                        className={`${styles.navigationLink} ${openMenu === "patients" ? styles.navigationLinkActive : ""}`}
                        ref={patientsButtonRef}
                        type="button"
                        aria-expanded={openMenu === "patients"}
                        aria-controls={patientsMenuId}
                        onClick={() => toggleMenu("patients")}
                      >
                        Пациентам <Chevron isOpen={openMenu === "patients"} />
                      </button>
                      <PatientsMenu
                        id={patientsMenuId}
                        isOpen={openMenu === "patients"}
                        onNavigate={closeMenus}
                      />
                    </>
                  ) : (
                    <Link
                      className={styles.navigationLink}
                      to={item.href}
                      onClick={closeMenus}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <a
            className={styles.vkLink}
            href={VK_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Семейный доктор во ВКонтакте — открыть в новой вкладке"
            title="Мы во ВКонтакте"
            onClick={closeMenus}
          >
            <VkIcon className={styles.vkIcon} />
          </a>
        </div>
      </header>
      <MobileMenu
        id={mobileMenuId}
        isOpen={isMobileOpen}
        onClose={closeMenus}
        vkUrl={VK_GROUP_URL}
      />
    </>
  );
}
