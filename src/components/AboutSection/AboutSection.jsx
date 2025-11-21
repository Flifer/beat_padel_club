import './AboutSection.css';
import { useTranslation } from "react-i18next";

function AboutSection() {
    const { t } = useTranslation();
    return(
        <section className="about-section">
            <h3>{t('aboutSection.subtitle')}</h3>
            <h2>{t('aboutSection.title')}</h2>
            <div className='about-section-content'>
                <div className='about-section-content-banner'></div>
                <div className='about-section-content-text'>
                    <div className='about-section-content-text-paragraphs'>
                        <p>{t('aboutSection.paragraph1')}</p>
                        <p>{t('aboutSection.paragraph2')}</p>
                        <p>{t('aboutSection.paragraph3')}</p>
                    </div>
                    <div className='about-section-content-img-container'>
                        <div className='about-section-content-img'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;