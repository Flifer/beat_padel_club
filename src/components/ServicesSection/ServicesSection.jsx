import './ServicesSection.css';
import { useTranslation } from "react-i18next";

function ServicesSection() {
    const { t } = useTranslation();
    return(
        <section className="services-section">
            <div>
                <h4>{t('servicesSection.padel.title')}</h4>
                <div>
                    <h3>{t('servicesSection.padel.title')}</h3>
                    <p>{t('servicesSection.padel.description')}</p>
                    <button>{t('servicesSection.padel.button')}</button>
                </div>
            </div>
            <div>
                <h4>{t('servicesSection.gym.title')}</h4>
                <div>
                    <h3>{t('servicesSection.gym.title')}</h3>
                    <p>{t('servicesSection.gym.description')}</p>
                    <button>{t('servicesSection.gym.button')}</button>
                </div>
            </div>
            <div>
                <h4>{t('servicesSection.cafe.title')}</h4>
                <div>
                    <h3>{t('servicesSection.cafe.title')}</h3>
                    <p>{t('servicesSection.cafe.description')}</p>
                    <button>{t('servicesSection.cafe.button')}</button>
                </div>
            </div>
            <div>
                <h4>{t('servicesSection.shop.title')}</h4>
                <div>
                    <h3>{t('servicesSection.shop.title')}</h3>
                    <p>{t('servicesSection.shop.description')}</p>
                    <button>{t('servicesSection.shop.button')}</button>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection;