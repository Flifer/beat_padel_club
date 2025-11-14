import heroBanner from '../../assets/HeroSection_assets/HeroSectionBanner.png';
import './HeroSection.css';

const serviceHighlights = [
  {
    eyebrow: 'Padel',
    title: 'Training Schedule',
    description: 'Build your rhythm',
  },
  {
    eyebrow: 'Wellness',
    title: 'Gym Recovery',
    description: 'Massage & restore',
  },
];

const facilityStats = [
  { value: '7/7', label: 'Open' },
  { value: '4', label: 'Zones' },
  { value: '150+', label: 'Classes monthly' },
  { value: '2 000+', label: 'Active members' },
];

function HeroSection() {
  return (
    <section
      className="hero"
      style={{ '--hero-background': `url(${heroBanner})` }}
    >
      <div className="hero__inner">

        <div className="hero__layout">
          <div className="hero__copy">
            <p className="hero__eyebrow">Premium club experience</p>
            <h1 className="hero__title">
              The Space
              <br />
              That Moves You
            </h1>
            <p className="hero__description">
              Premium padel & gym club built for motion, balance, and flow.
            </p>

            <div className="hero__actions" role="group" aria-label="Hero actions">
              <button type="button" className="hero__btn hero__btn--primary">
                Join The Club
              </button>
              <button type="button" className="hero__btn hero__btn--ghost">
                Book A Court
              </button>
            </div>
          </div>

          <dl className="hero__stats">
            {facilityStats.map(({ value, label }) => (
              <div className="hero-chip" key={label}>
                <dt className="hero-chip__value">{value}</dt>
                <dd className="hero-chip__label">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
