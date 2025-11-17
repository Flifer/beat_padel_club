import './DayPassSection.css';
import { useTranslation } from "react-i18next";

function DayPassSection() {
    const { t } = useTranslation();
    return(
    <section>
        <h2>{t("dayPassSection.title")}</h2>
        <div>
            <div>
                <h3></h3>
                <p></p>
                <button></button>
            </div>
            <div>
                <h3><span></span></h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    </section>
    )
}

export default DayPassSection;