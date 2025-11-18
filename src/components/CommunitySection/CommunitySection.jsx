import './CommunitySection.css';
import { useTranslation } from "react-i18next";

function CommunitySection() {
    const { t } = useTranslation();
    return(
        <section className="community-section">
            <div className="community-section-title">
                <h2>{t("communitySection.title")}</h2>
                <div className="community-section-title-img-container">
                    <div className='community-section-img1'></div>
                    <div className='community-section-img2'></div>
                    <div className='community-section-img3'></div>
                </div>
            </div>

            <div className="community-section-description">
                <h3>{t("communitySection.description")}</h3>
                <div className="community-section-description-img-container"></div>
                <div className="community-section-description-stats-container">
                    <div className="community-section-description-stats-item">
                        <h4>{t("communitySection.stats.rating.value")}</h4>
                        <p>{t("communitySection.stats.rating.label")}</p> 
                    </div>
                    <div className="community-section-description-stats-item">
                        <h4>{t("communitySection.stats.sessions.value")}</h4>
                        <p>{t("communitySection.stats.sessions.label")}</p>
                        
                    </div>
                    <div className="community-section-description-stats-item">
                        <h4>{t("communitySection.stats.areas.value")}</h4>
                        <p>{t("communitySection.stats.areas.label")}</p>
                    </div>
                    <div className="community-section-description-stats-item">
                        <h4>{t("communitySection.stats.hours.value")}</h4>
                        <p>{t("communitySection.stats.hours.label")}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CommunitySection;