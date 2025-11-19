import './ServicesSection.css';
import { useTranslation } from "react-i18next";

function ServicesSection() {
    const { t } = useTranslation();
    return(
        <section className="services-section">
            <div className="services-section-item img1">
                <h4>{t('servicesSection.padel.title')}</h4>
                <div>
                    <h3>{t('servicesSection.padel.title')}</h3>
                    <p>{t('servicesSection.padel.description')}</p>
                    <button>
                        {t('servicesSection.padel.button')}
                        
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10 9L15 4L20 9" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4 20H11C12.0609 20 13.0783 19.5786 13.8284 18.8284C14.5786 18.0783 15 17.0609 15 16V4" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                </div>
            </div>
            <div className="services-section-item img2">
                <h4>{t('servicesSection.gym.title')}</h4>
                <div>
                    <h3>{t('servicesSection.gym.title')}</h3>
                    <p>{t('servicesSection.gym.description')}</p>
                    <button>
                        {t('servicesSection.gym.button')}
                        
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10 9L15 4L20 9" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4 20H11C12.0609 20 13.0783 19.5786 13.8284 18.8284C14.5786 18.0783 15 17.0609 15 16V4" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                </div>
            </div>
            <div className="services-section-item img3">
                <h4>{t('servicesSection.cafe.title')}</h4>
                <div>
                    <h3>{t('servicesSection.cafe.title')}</h3>
                    <p>{t('servicesSection.cafe.description')}</p>
                    <button>
                        {t('servicesSection.cafe.button')}
                        
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10 9L15 4L20 9" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4 20H11C12.0609 20 13.0783 19.5786 13.8284 18.8284C14.5786 18.0783 15 17.0609 15 16V4" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                </div>
            </div>
            <div className="services-section-item img4">
                <h4>{t('servicesSection.shop.title')}</h4>
                <div>
                    <h3>{t('servicesSection.shop.title')}</h3>
                    <p>{t('servicesSection.shop.description')}</p>
                    <button>
                        {t('servicesSection.shop.button')}
                        
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10 9L15 4L20 9" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4 20H11C12.0609 20 13.0783 19.5786 13.8284 18.8284C14.5786 18.0783 15 17.0609 15 16V4" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection;