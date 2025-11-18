import './CommunitySection.css';
import { useTranslation } from "react-i18next";

function CommunitySection() {
    const { t } = useTranslation();
    return(
        <section className="community-section">
            <div>
                <h2>{t("communitySection.title")}</h2>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div>
                <h3>{t("communitySection.description")}</h3>
                <div></div>
                <div>
                    <div>
                        <h4>{t("communitySection.stats.rating.value")}</h4>
                        <p>{t("communitySection.stats.rating.label")}</p> 
                    </div>
                    <div>
                        <h4>{t("communitySection.stats.sessions.value")}</h4>
                        <p>{t("communitySection.stats.sessions.label")}</p>
                        
                    </div>
                    <div>
                        <h4>{t("communitySection.stats.areas.value")}</h4>
                        <p>{t("communitySection.stats.areas.label")}</p>
                    </div>
                    <div>
                        <h4>{t("communitySection.stats.hours.value")}</h4>
                        <p>{t("communitySection.stats.hours.label")}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CommunitySection;