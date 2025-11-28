import './Footer.css';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import logo from '../../assets/logo.png';

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

function Footer() {
    const { t, i18n } = useTranslation();
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const socialLinks = [
        { id: 'instagram', href: '#', icon: socialLinksIcons.instagram, label: t('social.instagram') },
        { id: 'facebook', href: '#', icon: socialLinksIcons.facebook, label: t('social.facebook') },
        { id: 'youtube', href: '#', icon: socialLinksIcons.youtube, label: t('social.youtube') },
        { id: 'tiktok', href: '#', icon: socialLinksIcons.tiktok, label: t('social.tiktok') },
    ];

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        // Handle email submission
    };

    return (
        <footer className='footer'>
            <div className="footer-container">
                {/* Mobile: Join the Beat section at top */}
                <div className="footer-join-mobile">
                    <h3>{t('footer.joinTheBeat.title')}</h3>
                    <p>{t('footer.joinTheBeat.description')}</p>
                    <form onSubmit={handleEmailSubmit} className="footer-email-form">
                        <input 
                            type="email" 
                            placeholder={t('footer.joinTheBeat.emailPlaceholder')}
                            required
                        />
                        <button type="submit" aria-label="Submit email">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </form>
                </div>

                {/* Desktop: Main columns */}
                <div className="footer-main">
                    {/* Get in touch */}
                    <div className="footer-column footer-get-in-touch">
                        <h3>{t('footer.getInTouch.title')}</h3>
                        <div className="footer-social">
                            {socialLinks.map(link => (
                                <a key={link.id} href={link.href} aria-label={link.label}>
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                        <a href={`tel:${t('footer.getInTouch.phone').replace(/\s/g, '')}`} className="footer-contact-link">
                            {t('footer.getInTouch.phone')}
                        </a>
                        <a href={`mailto:${t('footer.getInTouch.email')}`} className="footer-contact-link">
                            {t('footer.getInTouch.email')}
                        </a>
                        <span className="footer-contact-link">{t('footer.getInTouch.location')}</span>
                    </div>

                    {/* Services */}
                    <div className="footer-column footer-column-collapsible">
                        <button 
                            className="footer-column-header footer-collapse-btn"
                            onClick={() => toggleSection('services')}
                            aria-expanded={expandedSections.services}
                        >
                            <h3>{t('footer.services.title')}</h3>
                            <svg 
                                className={`footer-chevron ${expandedSections.services ? 'expanded' : ''}`}
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <path d="M6 9l6 6 6-6"/>
                            </svg>
                        </button>
                        <div className={`footer-column-content ${expandedSections.services ? 'expanded' : ''}`}>
                            <a href="#">{t('footer.services.padel')}</a>
                            <a href="#">{t('footer.services.gym')}</a>
                            <a href="#">{t('footer.services.cafe')}</a>
                            <a href="#">{t('footer.services.shop')}</a>
                        </div>
                    </div>

                    {/* Club */}
                    <div className="footer-column footer-column-collapsible">
                        <button 
                            className="footer-column-header footer-collapse-btn"
                            onClick={() => toggleSection('club')}
                            aria-expanded={expandedSections.club}
                        >
                            <h3>{t('footer.club.title')}</h3>
                            <svg 
                                className={`footer-chevron ${expandedSections.club ? 'expanded' : ''}`}
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <path d="M6 9l6 6 6-6"/>
                            </svg>
                        </button>
                        <div className={`footer-column-content ${expandedSections.club ? 'expanded' : ''}`}>
                            <a href="#">{t('footer.club.about')}</a>
                            <a href="#">{t('footer.club.membership')}</a>
                            <a href="#">{t('footer.club.events')}</a>
                        </div>
                    </div>

                    {/* Help & Info */}
                    <div className="footer-column footer-column-collapsible">
                        <button 
                            className="footer-column-header footer-collapse-btn"
                            onClick={() => toggleSection('helpInfo')}
                            aria-expanded={expandedSections.helpInfo}
                        >
                            <h3>{t('footer.helpInfo.title')}</h3>
                            <svg 
                                className={`footer-chevron ${expandedSections.helpInfo ? 'expanded' : ''}`}
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <path d="M6 9l6 6 6-6"/>
                            </svg>
                        </button>
                        <div className={`footer-column-content ${expandedSections.helpInfo ? 'expanded' : ''}`}>
                            <a href="#">{t('footer.helpInfo.contact')}</a>
                            <a href="#">{t('footer.helpInfo.refund')}</a>
                            <a href="#">{t('footer.helpInfo.partnerships')}</a>
                            <a href="#">{t('footer.helpInfo.careers')}</a>
                        </div>
                    </div>

                    {/* Join the Beat - Desktop */}
                    <div className="footer-column footer-join-desktop">
                        <h3>{t('footer.joinTheBeat.title')}</h3>
                        <p>{t('footer.joinTheBeat.description')}</p>
                        <form onSubmit={handleEmailSubmit} className="footer-email-form">
                            <input 
                                type="email" 
                                placeholder={t('footer.joinTheBeat.emailPlaceholder')}
                                required
                            />
                            <button type="submit" aria-label="Submit email">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Logo */}
                <div className="footer-logo">
                    <img src={logo} alt="Beat Padel Club" />
                </div>

                {/* Bottom section */}
                <div className="footer-bottom">
                    <div className="footer-languages">
                        <button
                            type="button"
                            className={i18n.language === "en" ? "active-lang" : ""}
                            onClick={() => changeLanguage("en")}
                        >
                            {t('header.languages.en')}
                        </button>
                        <span>|</span>
                        <button
                            type="button"
                            className={i18n.language === "ua" ? "active-lang" : ""}
                            onClick={() => changeLanguage("ua")}
                        >
                            {t('header.languages.ua')}
                        </button>
                        <span>|</span>
                        <button
                            type="button"
                            className={i18n.language === "ru" ? "active-lang" : ""}
                            onClick={() => changeLanguage("ru")}
                        >
                            {t('header.languages.ru')}
                        </button>
                    </div>
                    <div className="footer-copyright">
                        <span>{t('footer.copyright')}</span>
                        <div className="footer-legal">
                            <a href="#">{t('footer.privacyPolicy')}</a>
                            <a href="#">{t('footer.termsOfService')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
