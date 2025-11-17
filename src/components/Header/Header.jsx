import { useEffect, useState, useMemo } from 'react';
import { useTranslation } from "react-i18next";
import './Header.css';


import courtScheduleImg from '../../assets/Header_assets/courtSheduleMenuIMG.jpg';
import padelWarmupImg from '../../assets/Header_assets/padelWarmupMenuIMG.png';
import padelRecoveryImg from '../../assets/Header_assets/padelRecoveryMenuIMG.jpg';
import padelTrainingsImg from '../../assets/Header_assets/padelTrainingsMenuIMG.png';
import padelKidsImg from '../../assets/Header_assets/padelKidsMenuIMG.png';
import gymRecoveryImg from '../../assets/Header_assets/gymRecoveryMenuIMG.png';
import trainingScheduleImg from '../../assets/Header_assets/trainingSheduleMenuIMG.jpg';

const socialLinksIcons = {
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.5 3.5h9a4 4 0 014 4v9a4 4 0 01-4 4h-9a4 4 0 01-4-4v-9a4 4 0 014-4zm0 1.5a2.5 2.5 0 00-2.5 2.5v9a2.5 2.5 0 002.5 2.5h9a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0016.5 5zM12 8.5a3.5 3.5 0 11-3.5 3.5A3.5 3.5 0 0112 8.5zm0 1.5a2 2 0 102 2 2 2 0 00-2-2zm5.75-3.25a.75.75 0 11-.75.75.75.75 0 01.75-.75z" />
    </svg>
  ),
  facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.5 9H15V6.5h-1.5a3 3 0 00-3 3V11H9v2.5h1.5V21h3v-7.5H15L15.5 11H13.5v-1.5A1 1 0 0114.5 8H15V6.5h-1.5A3 3 0 0010.5 9V11H9v2.5h1.5V21h3v-7.5H15L15.5 11H13.5z" />
    </svg>
  ),
  youtube: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.25 7.02A2.75 2.75 0 0018.3 5.1C16.6 4.8 12 4.8 12 4.8s-4.6 0-6.3.3a2.75 2.75 0 00-1.95 1.92A28.2 28.2 0 003.5 12a28.2 28.2 0 00.25 4.98 2.75 2.75 0 001.95 1.92c1.7.3 6.3.3 6.3.3s4.6 0 6.3-.3a2.75 2.75 0 001.95-1.92A28.2 28.2 0 0020.5 12a28.2 28.2 0 00-.25-4.98zM10.5 15.15v-6.3L15.75 12z" />
    </svg>
  ),
  tiktok: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16.75 7.3a4.13 4.13 0 01-1.54-3.15h-2.34v10.43a2.44 2.44 0 01-4.87.34 2.44 2.44 0 012.44-2.44 2.38 2.38 0 01.75.13V9.93a4.74 4.74 0 00-.75-.06 4.94 4.94 0 104.94 4.93v-5a6.66 6.66 0 003.28 1V8.35a4.2 4.2 0 01-1.91-1.05z" />
    </svg>
  ),
};

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [hoveredDesktopItem, setHoveredDesktopItem] = useState(null);

  const socialLinks = useMemo(() => [
    {
      id: 'instagram',
      label: t('social.instagram'),
      href: '#',
      icon: socialLinksIcons.instagram,
    },
    {
      id: 'facebook',
      label: t('social.facebook'),
      href: '#',
      icon: socialLinksIcons.facebook,
    },
    {
      id: 'youtube',
      label: t('social.youtube'),
      href: '#',
      icon: socialLinksIcons.youtube,
    },
    {
      id: 'tiktok',
      label: t('social.tiktok'),
      href: '#',
      icon: socialLinksIcons.tiktok,
    },
  ], [t]);

  const navItems = useMemo(() => [
    {
      id: 'padel',
      label: t('header.nav.padel'),
      href: '#',
      hasChevron: true,
      submenu: [
        {
          id: 'courts',
          label: t('header.nav.padelSubmenu.courtsSchedule'),
          href: '#',
          description: t('header.nav.padelSubmenu.courtsScheduleDesc'),
          image: courtScheduleImg,
        },
        {
          id: 'warmup',
          label: t('header.nav.padelSubmenu.padelWarmup'),
          href: '#',
          description: t('header.nav.padelSubmenu.padelWarmupDesc'),
          image: padelWarmupImg,
        },
        {
          id: 'recovery',
          label: t('header.nav.padelSubmenu.padelRecovery'),
          href: '#',
          description: t('header.nav.padelSubmenu.padelRecoveryDesc'),
          image: padelRecoveryImg,
        },
        {
          id: 'trainings',
          label: t('header.nav.padelSubmenu.padelTrainings'),
          href: '#',
          description: t('header.nav.padelSubmenu.padelTrainingsDesc'),
          image: padelTrainingsImg,
        },
        {
          id: 'kids',
          label: t('header.nav.padelSubmenu.padelKids'),
          href: '#',
          description: t('header.nav.padelSubmenu.padelKidsDesc'),
          image: padelKidsImg,
        },
      ],
    },
    {
      id: 'gym',
      label: t('header.nav.gym'),
      href: '#',
      hasChevron: true,
      submenu: [
        {
          id: 'schedule',
          label: t('header.nav.gymSubmenu.trainingsSchedule'),
          href: '#',
          description: t('header.nav.gymSubmenu.trainingsScheduleDesc'),
          image: trainingScheduleImg,
        },
        {
          id: 'recovery',
          label: t('header.nav.gymSubmenu.gymRecovery'),
          href: '#',
          description: t('header.nav.gymSubmenu.gymRecoveryDesc'),
          image: gymRecoveryImg,
        },
      ],
    },
    { id: 'cafe', label: t('header.nav.cafe'), href: '#', hasChevron: false },
    { id: 'shop', label: t('header.nav.shop'), href: '#', hasChevron: false },
    { id: 'membership', label: t('header.nav.membership'), href: '#', hasChevron: false },
  ], [t]);

  // Обновляем activeSubmenu при изменении языка
  useEffect(() => {
    if (activeSubmenu) {
      const updatedItem = navItems.find(item => item.id === activeSubmenu.id);
      if (updatedItem && updatedItem.submenu) {
        setActiveSubmenu(updatedItem);
      }
    }
  }, [i18n.language, navItems]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('body-locked');
    } else {
      document.body.classList.remove('body-locked');
    }
    return () => {
      document.body.classList.remove('body-locked');
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      setActiveSubmenu(null);
    }, 300);
  };

  const handleNavItemEnter = (item) => {
    if (item.hasChevron && item.submenu?.length) {
      setHoveredDesktopItem(item);
    } else {
      setHoveredDesktopItem(null);
    }
  };

  const handleDesktopNavLeave = () => {
    setHoveredDesktopItem(null);
  };

  const handlePrimaryItemClick = (event, item) => {
    if (item.hasChevron && item.submenu?.length) {
      event.preventDefault();
      setActiveSubmenu(item);
      return;
    }

    closeMenu();
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <header className="header">
        <div className="header-container">
          <a href="#" className="logo" aria-label={t('header.ariaLabels.logo')}></a>

          <div className="desktop-nav-wrapper" onMouseLeave={handleDesktopNavLeave}>
            <nav className="desktop-nav">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onMouseEnter={() => handleNavItemEnter(item)}
                  onFocus={() => handleNavItemEnter(item)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {hoveredDesktopItem?.submenu?.length ? (
              <div
                className="desktop-submenu-panel"
                onMouseEnter={() => handleNavItemEnter(hoveredDesktopItem)}
              >
                <div className="desktop-submenu-grid">
                  {hoveredDesktopItem.submenu.map((item) => (
                    <a key={item.id} href={item.href} className="desktop-submenu-card">
                      <div className="desktop-submenu-card-image" style= {{backgroundImage: `url(${item.image})`}} />
                      <div className="desktop-submenu-card-content">
                        <h4>{item.label}</h4>
                        <p>{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <button className="login-btn login-btn-desktop">
            {t('header.login')}
          </button>

          <button
            onClick={() => {
              setHoveredDesktopItem(null);
              setIsOpen(true);
            }}
            className={isOpen ? 'hidden-mobile-menu-btn' : 'mobile-menu-btn'}
            aria-label={t('header.ariaLabels.openMenu')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {isOpen && (
        <div className={`sidebar-overlay ${isClosing ? 'sidebar-closing' : ''}`} onClick={closeMenu}>
          <div
            className={`sidebar ${isClosing ? 'sidebar-closing' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sidebar-top">
              <button onClick={closeMenu} className="sidebar-close-btn" aria-label={t('header.ariaLabels.closeMenu')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <a href="#" className="sidebar-logo" aria-label={t('header.ariaLabels.logo')}></a>
            </div>

            <nav className="sidebar-menu">
              {activeSubmenu ? (
                <>
                  <button
                    type="button"
                    className="sidebar-back-btn"
                    onClick={() => setActiveSubmenu(null)}
                  >
                    <span aria-hidden="true">←</span>
                    <span>{t('header.back')}</span>
                  </button>
                  {activeSubmenu.submenu.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      className="sidebar-menu-item"
                      onClick={closeMenu}
                    >
                      <span>{item.label}</span>
                    </a>
                  ))}
                </>
              ) : (
                navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="sidebar-menu-item"
                    onClick={(event) => handlePrimaryItemClick(event, item)}
                  >
                    <span>{item.label}</span>
                    {item.hasChevron && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                    )}
                  </a>
                ))
              )}
            </nav>

            <div className="sidebar-footer">
              <div className="sidebar-contact">
                <a href={`mailto:${t('header.contact.email')}`}>{t('header.contact.email')}</a>
                <a href={`tel:${t('header.contact.phone').replace(/\s/g, '')}`}>{t('header.contact.phone')}</a>
                <span>{t('header.contact.address')}</span>
              </div>

              <div className="sidebar-social">
                {socialLinks.map((item) => (
                  <a key={item.id} href={item.href} aria-label={item.label}>
                    {item.icon}
                  </a>
                ))}
              </div>
              <div className="sidebar-languages">
                  <button
                    type="button"
                    className={i18n.language === "en" ? "active-lang" : ""}
                    onClick={() => changeLanguage("en")}
                  >
                    {t('header.languages.en')}
                  </button>
                  <button
                    type="button"
                    className={i18n.language === "ua" ? "active-lang" : ""}
                    onClick={() => changeLanguage("ua")}
                  >
                    {t('header.languages.ua')}
                  </button>
                  <button
                    type="button"
                    className={i18n.language === "ru" ? "active-lang" : ""}
                    onClick={() => changeLanguage("ru")}
                  >
                    {t('header.languages.ru')}
                  </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
