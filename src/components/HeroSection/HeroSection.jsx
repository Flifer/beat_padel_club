import './HeroSection.css';
import { useTranslation } from "react-i18next";
import { useMemo } from 'react';

function HeroSection() {
    const { t } = useTranslation();
    
    const clubStats = useMemo(() => [
        {
            id: 'openDays',
            statNumber: '7/7',
            statLabel: t('heroSection.stats.open')
        },
        {
            id: 'zones',
            statNumber: '4',
            statLabel: t('heroSection.stats.zones')
        },
        {
            id: 'classes',
            statNumber: '150+',
            statLabel: t('heroSection.stats.classesMonthly')
        },
        {
            id: 'members',
            statNumber: '2 000+',
            statLabel: t('heroSection.stats.activeMembers')
        },
    ], [t]);

    return(
        <section className='heroSection'>
            <div className='heroSectionContainer'>
                <div className='clubStatsContainer'>
                    {clubStats.map((item) => (
                    <div className='clubStat' key={item.id}>
                        <span className='clubStatNumber'>{item.statNumber}</span>
                        <span className='clubStatLabel'>{item.statLabel}</span>
                    </div>
                    ))}
                </div>
                <div className='heroSectionContent'>
                    <h1 className='heroSectionTitle' dangerouslySetInnerHTML={{ __html: t('heroSection.title') }}></h1>
                    <h2 className='heroSectionSubtitle'>{t('heroSection.subtitle')}</h2>
                    <button className='heroSectionBtn ClubBtn'>{t('heroSection.joinClub')}</button>
                    <button className='heroSectionBtn BookBtn'>{t('heroSection.bookCourt')}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M18 8L22 12L18 16" stroke="#FFFBF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12H22" stroke="#FFFBF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;