import './DayPassSection.css';
import { useTranslation } from "react-i18next";

function DayPassSection() {
    const { t } = useTranslation();
    return(
    <section>
        <h2>{t("dayPassSection.title")}</h2>
        <h1>{t("dayPassSection.beatPass")}</h1>
        <div>
            <div>
                <h3>{t("dayPassSection.card1.title")}</h3>
                <p>{t("dayPassSection.card1.description")}</p>
                <button>{t("dayPassSection.card1.button")}</button>
            </div>
            <div>
                <h3><span>{t("dayPassSection.card2.title")}</span></h3>
                <ul>
                    <li>{t("dayPassSection.card2.features.item1")}</li>
                    <li>{t("dayPassSection.card2.features.item2")}</li>
                    <li>{t("dayPassSection.card2.features.item3")}</li>
                    <li>{t("dayPassSection.card2.features.item4")}</li>
                </ul>
            </div>
        </div>
    </section>
    )
}

export default DayPassSection;