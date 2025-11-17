import './DayPassSection.css';
import { useTranslation } from "react-i18next";

function DayPassSection() {
    const { t } = useTranslation();
    return(
    <section className="day-pass-section">
        <h2>{t("dayPassSection.title")}</h2>
        <div className="day-pass-section-container">
            <div className="day-pass-section-card">
                <h3>{t("dayPassSection.card1.title")}</h3>
                <p>{t("dayPassSection.card1.description")}</p>
                <button>{t("dayPassSection.card1.button")}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_2036_337)">
                    <path d="M19.9668 12.467C22.8778 9.55596 23.3497 5.30822 21.0209 2.97935C18.692 0.650484 14.4443 1.12239 11.5333 4.03338C8.62228 6.94437 8.15037 11.1921 10.4792 13.521C12.8081 15.8499 17.0559 15.3779 19.9668 12.467Z" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.03061 16.7193L2.46978 19.2801C2.17689 19.573 2.17689 20.0479 2.46978 20.3408L3.65905 21.53C3.95194 21.8229 4.42682 21.8229 4.71971 21.53L7.28054 18.9692C7.57343 18.6763 7.57343 18.2014 7.28054 17.9085L6.09127 16.7193C5.79838 16.4264 5.32351 16.4264 5.03061 16.7193Z" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.6853 17.3147L10.4794 13.5206" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18 1.54688V13.9669" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.5 2.53308V14.9531" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.0332 6H22.4532" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.04688 10.5H21.4669" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2036_337">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </button>
            </div>
            <div className="day-pass-section-card">
                <h3>{t("dayPassSection.card2.title")}</h3>
                <ul>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75Z" stroke="#FFFBF5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.6296 12.7238C21.391 12.7411 21.2433 12.75 21.0001 12.75C15.6151 12.75 11.25 8.385 11.25 3C11.25 2.74828 11.2594 2.59266 11.2782 2.34375M2.32739 11.2762C2.32739 11.2762 2.75817 11.25 3.00005 11.25C8.38505 11.25 12.75 15.615 12.75 21C12.75 21.2522 12.7215 21.6562 12.7215 21.6562" stroke="#FFFBF5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        {t("dayPassSection.card2.features.item1")}
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M17.5959 12.768C17.9711 13.1432 18.4799 13.3539 19.0104 13.3539C19.5409 13.3539 20.0498 13.1432 20.4249 12.768C20.8 12.3929 21.0108 11.884 21.0108 11.3535C21.0108 10.823 20.8 10.3142 20.4249 9.93901L18.6569 8.17201C19.032 8.54702 19.5408 8.75765 20.0713 8.75756C20.3339 8.75751 20.594 8.70573 20.8366 8.60518C21.0793 8.50462 21.2997 8.35726 21.4854 8.17151C21.6711 7.98575 21.8184 7.76524 21.9188 7.52257C22.0193 7.27989 22.071 7.0198 22.071 6.75715C22.0709 6.4945 22.0191 6.23443 21.9186 5.99179C21.818 5.74915 21.6707 5.5287 21.4849 5.34301L18.6569 2.51501C18.2819 2.13986 17.7732 1.92905 17.2428 1.92896C16.7123 1.92886 16.2035 2.13949 15.8284 2.51451C15.4533 2.88952 15.2424 3.39821 15.2423 3.92865C15.2423 4.4591 15.4529 4.96786 15.8279 5.34301L14.0609 3.57501C13.8751 3.38925 13.6546 3.2419 13.4119 3.14137C13.1692 3.04084 12.9091 2.9891 12.6464 2.9891C12.3837 2.9891 12.1236 3.04084 11.8809 3.14137C11.6382 3.2419 11.4177 3.38925 11.2319 3.57501C11.0461 3.76076 10.8988 3.98128 10.7983 4.22398C10.6977 4.46669 10.646 4.72681 10.646 4.98951C10.646 5.2522 10.6977 5.51233 10.7983 5.75503C10.8988 5.99773 11.0461 6.21825 11.2319 6.40401L17.5959 12.768Z" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.5 21.5L3.9 20.1" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.1001 3.9L21.5001 2.5" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.34301 21.485C5.71802 21.8602 6.22671 22.071 6.75715 22.0711C7.0198 22.0711 7.27989 22.0194 7.52257 21.919C7.76524 21.8185 7.98575 21.6712 8.17151 21.4855C8.35726 21.2998 8.50462 21.0794 8.60518 20.8367C8.70573 20.5941 8.75751 20.334 8.75756 20.0714C8.7576 19.8087 8.70592 19.5486 8.60545 19.306C8.50498 19.0633 8.3577 18.8428 8.17201 18.657L9.93901 20.425C10.3142 20.8002 10.823 21.0109 11.3535 21.0109C11.884 21.0109 12.3929 20.8002 12.768 20.425C13.1432 20.0499 13.3539 19.5411 13.3539 19.0105C13.3539 18.48 13.1432 17.9712 12.768 17.596L6.40401 11.232C6.21825 11.0463 5.99773 10.8989 5.75503 10.7984C5.51233 10.6979 5.2522 10.6461 4.98951 10.6461C4.72681 10.6461 4.46669 10.6979 4.22398 10.7984C3.98128 10.8989 3.76076 11.0463 3.57501 11.232C3.38925 11.4178 3.2419 11.6383 3.14137 11.881C3.04084 12.1237 2.9891 12.3838 2.9891 12.6465C2.9891 12.9092 3.04084 13.1693 3.14137 13.412C3.2419 13.6547 3.38925 13.8753 3.57501 14.061L5.34301 15.828C4.96786 15.453 4.4591 15.2424 3.92865 15.2425C3.39821 15.2426 2.88952 15.4534 2.51451 15.8285C2.13949 16.2037 1.92886 16.7124 1.92896 17.2429C1.92905 17.7733 2.13986 18.282 2.51501 18.657L5.34301 21.485Z" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.6001 14.4L14.4001 9.59998" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        
                        {t("dayPassSection.card2.features.item2")}
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M2 6C2.6 6.5 3.2 7 4.5 7C7 7 7 5 9.5 5C12.1 5 11.9 7 14.5 7C17 7 17 5 19.5 5C20.8 5 21.4 5.5 22 6" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 12C2.6 12.5 3.2 13 4.5 13C7 13 7 11 9.5 11C12.1 11 11.9 13 14.5 13C17 13 17 11 19.5 11C20.8 11 21.4 11.5 22 12" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 18C2.6 18.5 3.2 19 4.5 19C7 19 7 17 9.5 17C12.1 17 11.9 19 14.5 19C17 19 17 17 19.5 17C20.8 17 21.4 17.5 22 18" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        {t("dayPassSection.card2.features.item3")}
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M2 21C2 19.6081 2.36317 18.2402 3.05363 17.0316C3.74409 15.823 4.73794 14.8155 5.93699 14.1086C7.13604 13.4016 8.49879 13.0198 9.89059 13.0007C11.2824 12.9817 12.6551 13.3261 13.873 14" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17 17L22 22" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 17L17 22" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        {t("dayPassSection.card2.features.item4")}
                    </li>
                </ul>
            </div>
        </div>
    </section>
    )
}

export default DayPassSection;