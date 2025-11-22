import './MembershipSection.css';
import { useTranslation } from "react-i18next";

function MembershipSection() {
    const { t } = useTranslation();
    return(
        <section className="membership-section">
            <div className="membership-section-title-card">
                <h2 className="membership-section-title-card-text">{t('membershipSection.title')}</h2>
                <button className="membership-section-title-card-button">{t('membershipSection.button')} 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13 5H19V11" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19 5L5 19" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className="membership-section-cards-container">
                <div className="membership-section-card family-card">
                    <h4 className="membership-section-card-subtitle">{t('membershipSection.card1.subtitle')}</h4>
                    <h3 className="membership-section-card-title">{t('membershipSection.card1.title')}</h3>
                    <button className="membership-section-card-button">{t('membershipSection.card1.button')} 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 8L22 12L18 16" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 12H22" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div className="membership-section-card corporate-card">
                    <h4 className="membership-section-card-subtitle">{t('membershipSection.card2.subtitle')}</h4>
                    <h3 className="membership-section-card-title">{t('membershipSection.card2.title')}</h3>
                    <button className="membership-section-card-button">{t('membershipSection.card2.button')} 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 8L22 12L18 16" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 12H22" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default MembershipSection;