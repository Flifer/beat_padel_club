import './HeroSection.css';

const clubStats = [
    {
        id: 'openDays',
        statNumber: '7/7',
        statLabel: 'Open'
    },
    {
        id: 'zones',
        statNumber: '4',
        statLabel: 'Zones'
    },
    {
        id: 'classes',
        statNumber: '150+',
        statLabel: 'Classes monthly'
    },
    {
        id: 'members',
        statNumber: '2 000+',
        statLabel: 'Active members'
    },

]
function HeroSection() {
    return(
        <section className='heroSection'>
            <div className='heroSectionContainer'>
                <div className='clubStatsContainer'>
                    {clubStats.map((item) => (
                    <div className='clubStat'>
                        <span className='clubStatNumber' key={item.id+"Number"}>{item.statNumber}</span>
                        <span className='clubStatLabel' key={item.id+"Label"}>{item.statLabel}</span>
                    </div>
                    ))}
                </div>
                <div className='heroSectionContent'>
                    <h1 className='heroSectionTitle'>The Space<br/>That Moves You</h1>
                    <h2 className='heroSectionSubtitle'>Premium padel & gym club built for motion, balance, and flow. </h2>
                    <button className='heroSectionBtn ClubBtn'>Join the Club</button>
                    <button className='heroSectionBtn BookBtn'>Book A Court  
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M18 8L22 12L18 16" stroke="#FFFBF5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 12H22" stroke="#FFFBF5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;