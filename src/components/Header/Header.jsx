import { useState } from 'react';
import './Header.css';

const navItems = [
  { id: 'padel', label: 'Padel', href: '#', hasChevron: true },
  { id: 'gym', label: 'Gym', href: '#', hasChevron: true },
  { id: 'cafe', label: 'Café', href: '#', hasChevron: false },
  { id: 'shop', label: 'Shop', href: '#', hasChevron: false },
  { id: 'membership', label: 'Membership', href: '#', hasChevron: false },
  { id: 'about', label: 'About', href: '#', hasChevron: false },
];

const socialLinks = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.5 3.5h9a4 4 0 014 4v9a4 4 0 01-4 4h-9a4 4 0 01-4-4v-9a4 4 0 014-4zm0 1.5a2.5 2.5 0 00-2.5 2.5v9a2.5 2.5 0 002.5 2.5h9a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0016.5 5zM12 8.5a3.5 3.5 0 11-3.5 3.5A3.5 3.5 0 0112 8.5zm0 1.5a2 2 0 102 2 2 2 0 00-2-2zm5.75-3.25a.75.75 0 11-.75.75.75.75 0 01.75-.75z" />
      </svg>
    ),
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 9H15V6.5h-1.5a3 3 0 00-3 3V11H9v2.5h1.5V21h3v-7.5H15L15.5 11H13.5v-1.5A1 1 0 0114.5 8H15V6.5h-1.5A3 3 0 0010.5 9V11H9v2.5h1.5V21h3v-7.5H15L15.5 11H13.5z" />
      </svg>
    ),
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.25 7.02A2.75 2.75 0 0018.3 5.1C16.6 4.8 12 4.8 12 4.8s-4.6 0-6.3.3a2.75 2.75 0 00-1.95 1.92A28.2 28.2 0 003.5 12a28.2 28.2 0 00.25 4.98 2.75 2.75 0 001.95 1.92c1.7.3 6.3.3 6.3.3s4.6 0 6.3-.3a2.75 2.75 0 001.95-1.92A28.2 28.2 0 0020.5 12a28.2 28.2 0 00-.25-4.98zM10.5 15.15v-6.3L15.75 12z" />
      </svg>
    ),
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16.75 7.3a4.13 4.13 0 01-1.54-3.15h-2.34v10.43a2.44 2.44 0 01-4.87.34 2.44 2.44 0 012.44-2.44 2.38 2.38 0 01.75.13V9.93a4.74 4.74 0 00-.75-.06 4.94 4.94 0 104.94 4.93v-5a6.66 6.66 0 003.28 1V8.35a4.2 4.2 0 01-1.91-1.05z" />
      </svg>
    ),
  },
];

const languages = ['English', 'Українська', 'Російська'];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <a href="#" className="logo" aria-label="Beat Padel Club"></a>

          <nav className="desktop-nav">
            {navItems.map((item) => (
              <a key={item.id} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <button className="login-btn login-btn-desktop">
            Log in
          </button>

          <button
            onClick={() => setIsOpen(true)}
            className={isOpen ? 'hidden-mobile-menu-btn' : 'mobile-menu-btn'}
            aria-label="Открыть меню"
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
              <button onClick={closeMenu} className="sidebar-close-btn" aria-label="Закрыть меню">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <a href="#" className="sidebar-logo" aria-label="Beat Padel Club"></a>
            </div>

            <nav className="sidebar-menu">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="sidebar-menu-item"
                  onClick={closeMenu}
                >
                  <span>{item.label}</span>
                  {item.hasChevron && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  )}
                </a>
              ))}
            </nav>

            <div className="sidebar-footer">
              <div className="sidebar-contact">
                <a href="mailto:info@beat.com">info@beat.com</a>
                <a href="tel:+38090090900">+380 090 909 090</a>
                <span>Deribasivska str., Odessa, Ukraine</span>
              </div>

              <div className="sidebar-social">
                {socialLinks.map((item) => (
                  <a key={item.id} href={item.href} aria-label={item.label}>
                    {item.icon}
                  </a>
                ))}
              </div>

              <div className="sidebar-languages">
                {languages.map((language) => (
                  <button key={language} type="button">
                    {language}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
