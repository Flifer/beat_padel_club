import './ActionCardSection.css';
import { useTranslation } from "react-i18next";

function ActionCardSection() {
    const { t } = useTranslation();
    return(
        <section className="action-card-section">
            <div className="action-card">
                <h3 className='action-card-title'>{t("actionCardSection.card1.title")}</h3>
                <p className='action-card-description'>{t("actionCardSection.card1.description")}</p>
                <button className='action-card-button'>{t("actionCardSection.card1.button")} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_2180_3033)">
    <path d="M19.9668 12.4665C22.8778 9.55547 23.3497 5.30773 21.0209 2.97886C18.692 0.649995 14.4443 1.1219 11.5333 4.03289C8.62228 6.94388 8.15037 11.1916 10.4792 13.5205C12.8081 15.8494 17.0559 15.3775 19.9668 12.4665Z" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.03061 16.7194L2.46978 19.2802C2.17689 19.5731 2.17689 20.048 2.46978 20.3409L3.65905 21.5301C3.95194 21.823 4.42682 21.823 4.71971 21.5301L7.28054 18.9693C7.57343 18.6764 7.57343 18.2015 7.28054 17.9087L6.09127 16.7194C5.79838 16.4265 5.32351 16.4265 5.03061 16.7194Z" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.6853 17.3146L10.4794 13.5205" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18 1.54688V13.9669" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.5 2.5332V14.9532" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.0332 6H22.4532" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.04688 10.5H21.4669" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_2180_3033">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg></button>
            </div>

            <div className="action-card">
                <h3 className='action-card-title'>{t("actionCardSection.card2.title")}</h3>
                <p className='action-card-description'>{t("actionCardSection.card2.description")}</p>
                <button className='action-card-button'>{t("actionCardSection.card2.button")} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M17.5959 12.7678C17.9711 13.1429 18.4799 13.3537 19.0104 13.3537C19.5409 13.3537 20.0498 13.1429 20.4249 12.7678C20.8 12.3926 21.0108 11.8838 21.0108 11.3533C21.0108 10.8227 20.8 10.3139 20.4249 9.93876L18.6569 8.17176C19.032 8.54678 19.5408 8.75741 20.0713 8.75731C20.3339 8.75727 20.594 8.70549 20.8366 8.60493C21.0793 8.50438 21.2997 8.35702 21.4854 8.17126C21.6711 7.98551 21.8184 7.765 21.9188 7.52232C22.0193 7.27965 22.071 7.01956 22.071 6.75691C22.0709 6.49426 22.0191 6.23419 21.9186 5.99155C21.818 5.74891 21.6707 5.52845 21.4849 5.34276L18.6569 2.51476C18.2819 2.13961 17.7732 1.9288 17.2428 1.92871C16.7123 1.92862 16.2035 2.13925 15.8284 2.51426C15.4533 2.88928 15.2424 3.39796 15.2423 3.92841C15.2423 4.45886 15.4529 4.96761 15.8279 5.34276L14.0609 3.57476C13.8751 3.38901 13.6546 3.24166 13.4119 3.14113C13.1692 3.0406 12.9091 2.98886 12.6464 2.98886C12.3837 2.98886 12.1236 3.0406 11.8809 3.14113C11.6382 3.24166 11.4177 3.38901 11.2319 3.57476C11.0461 3.76052 10.8988 3.98104 10.7983 4.22374C10.6977 4.46644 10.646 4.72657 10.646 4.98926C10.646 5.25196 10.6977 5.51208 10.7983 5.75478C10.8988 5.99748 11.0461 6.21801 11.2319 6.40376L17.5959 12.7678Z" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.5 21.4996L3.9 20.0996" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20.1001 3.9L21.5001 2.5" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.34301 21.4854C5.71802 21.8605 6.22671 22.0713 6.75715 22.0714C7.0198 22.0715 7.27989 22.0198 7.52257 21.9193C7.76524 21.8189 7.98575 21.6716 8.17151 21.4859C8.35726 21.3002 8.50462 21.0797 8.60518 20.8371C8.70573 20.5945 8.75751 20.3344 8.75756 20.0717C8.7576 19.8091 8.70592 19.549 8.60545 19.3063C8.50498 19.0637 8.3577 18.8431 8.17201 18.6574L9.93901 20.4254C10.3142 20.8005 10.823 21.0113 11.3535 21.0113C11.884 21.0113 12.3929 20.8005 12.768 20.4254C13.1432 20.0502 13.3539 19.5414 13.3539 19.0109C13.3539 18.4803 13.1432 17.9715 12.768 17.5964L6.40401 11.2324C6.21825 11.0466 5.99773 10.8993 5.75503 10.7988C5.51233 10.6982 5.2522 10.6465 4.98951 10.6465C4.72681 10.6465 4.46669 10.6982 4.22398 10.7988C3.98128 10.8993 3.76076 11.0466 3.57501 11.2324C3.38925 11.4181 3.2419 11.6387 3.14137 11.8814C3.04084 12.1241 2.9891 12.3842 2.9891 12.6469C2.9891 12.9096 3.04084 13.1697 3.14137 13.4124C3.2419 13.6551 3.38925 13.8756 3.57501 14.0614L5.34301 15.8284C4.96786 15.4534 4.4591 15.2427 3.92865 15.2428C3.39821 15.2429 2.88952 15.4537 2.51451 15.8289C2.13949 16.204 1.92886 16.7128 1.92896 17.2432C1.92905 17.7737 2.13986 18.2824 2.51501 18.6574L5.34301 21.4854Z" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.6001 14.3996L14.4001 9.59961" stroke="#FFFBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
            </div>
        </section>
    )
}

export default ActionCardSection;