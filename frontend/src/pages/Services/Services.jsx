import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { FiZap } from 'react-icons/fi';
import styles from './Services.module.css';

// Custom icons for top header cards
const LightbulbIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .5 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);

const PenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
);

const RocketIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
    <path d="M14 9 9 14" />
    <path d="M9 14 4 19a2 2 0 0 0 2 2l5-4" />
    <path d="M12 2A15.3 15.3 0 0 1 22 12l-4 4-6-6-4-4Z" />
  </svg>
);

const HeadphoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

// Other Services neon icons SVG path helpers
const VideoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 7l-7 5 7 5V7z" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

const MotionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const ReelIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
    <line x1="7" y1="2" x2="7" y2="22" />
    <line x1="17" y1="2" x2="17" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="2" y1="7" x2="7" y2="7" />
    <line x1="2" y1="17" x2="7" y2="17" />
    <line x1="17" y1="17" x2="22" y2="17" />
    <line x1="17" y1="7" x2="22" y2="7" />
  </svg>
);

const AdIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12c0-2.4 1-4.6 2.6-6.2" />
    <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
    <path d="m17 7-5 5" />
  </svg>
);

const ThumbnailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="M20.4 14.5L16 10 4 20" />
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
);

const InviteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const StartupIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.886H3.88l4.918 3.57L6.887 18.34 12 14.77l5.113 3.57-1.912-5.884 4.918-3.57h-6.208z" />
  </svg>
);

const BusinessIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="10" width="20" height="12" rx="2" />
    <path d="M6 10V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6" />
  </svg>
);

const ConsultationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const WA_NUMBER = '919827850842';
const waLink = (service) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi Jhakkas Lab! 👋 I'm interested in "${service}" services. Please share pricing and options!`)}`;

const Services = () => {
  const exploreCards = [
    {
      title: 'Graphic Design',
      color: '#ff6c02',
      img: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=400&q=80',
      bullets: [
        'Logo & Branding',
        'Posters & Flyers',
        'Social Media Design',
        'Packaging Design'
      ]
    },
    {
      title: 'Website & Digital',
      color: '#40c4ff',
      img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80',
      bullets: [
        'Website Development',
        'UI/UX Design',
        'SEO & Digital Marketing',
        'Social Media Management'
      ]
    },
    {
      title: 'Printing Services',
      color: '#2979ff',
      img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80',
      bullets: [
        'T-Shirt Printing',
        'Poster & Banner Printing',
        'Sticker Printing',
        'Business Card & More'
      ]
    },
    {
      title: 'Custom Art',
      color: '#ff4081',
      img: 'https://images.unsplash.com/photo-1579783928621-7a13d66a6211?auto=format&fit=crop&w=400&q=80',
      bullets: [
        'Pencil Portrait',
        'Digital Art & Anime',
        'Canvas Painting',
        'Guitar Painting'
      ]
    },
    {
      title: 'Handicraft & Decor',
      color: '#ffb300',
      img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80',
      bullets: [
        'Scrap Art & Decor',
        'Hand-painted Bottles',
        'Wall Art & Frames',
        'DIY Handmade Items'
      ]
    },
    {
      title: 'Products & Merch',
      color: '#00e676',
      img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=400&q=80',
      bullets: [
        'T-Shirts, Hoodies, Caps',
        'Mugs & Keychains',
        'Tote Bags & Bottles',
        'Stickers & Posters'
      ]
    },
    {
      title: 'Event & Branding',
      color: '#d500f9',
      img: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=400&q=80',
      bullets: [
        'Event Branding',
        'Invitation Design',
        'Stage & Backdrops',
        'Custom Merchandise'
      ]
    }
  ];

  const otherServices = [
    { name: 'Video Editing', icon: <VideoIcon />, color: '#ff1744' },
    { name: 'Motion Graphics', icon: <MotionIcon />, color: '#d500f9' },
    { name: 'Reel Editing', icon: <ReelIcon />, color: '#651fff' },
    { name: 'Ad Creative', icon: <AdIcon />, color: '#2979ff' },
    { name: 'Thumbnail Design', icon: <ThumbnailIcon />, color: '#00e5ff' },
    { name: 'Menu Design', icon: <MenuIcon />, color: '#00e676' },
    { name: 'Invitation Design', icon: <InviteIcon />, color: '#aeea00' },
    { name: 'Startup Branding', icon: <StartupIcon />, color: '#ffd600' },
    { name: 'Business Branding', icon: <BusinessIcon />, color: '#ff9100' },
    { name: 'Consultation', icon: <ConsultationIcon />, color: '#ff3d00' }
  ];

  return (
    <div className={styles.servicesPage}>
      
      {/* Header Section */}
      <header className={styles.servicesHeader}>
        <div className={`container ${styles.headerGrid}`}>
          <div className={styles.headerLeft}>
            <span className={styles.subTitle}>WHAT WE DO</span>
            <h1 className={styles.mainTitle}>OUR SERVICES</h1>
            <p className={styles.headerDesc}>
              From creative designs to custom products — we turn ideas into visuals, prints, and experiences.
            </p>
          </div>
          
          <div className={styles.headerRight}>
            <div className={styles.mascotSplatterFrame}>
              <div className={styles.yellowSplatterBg} />
              
              {/* Floating Header Badges */}
              <div className={styles.badgesWrapper}>
                <div className={`${styles.glowingHeaderCard} ${styles.badgeCreative}`}>
                  <span className={styles.badgeIcon}><LightbulbIcon /></span>
                  <span className={styles.badgeText}>Creative Ideas</span>
                </div>
                <div className={`${styles.glowingHeaderCard} ${styles.badgeUnique}`}>
                  <span className={styles.badgeIcon}><PenIcon /></span>
                  <span className={styles.badgeText}>Unique Designs</span>
                </div>
                <div className={`${styles.glowingHeaderCard} ${styles.badgePremium}`}>
                  <span className={styles.badgeIcon}><RocketIcon /></span>
                  <span className={styles.badgeText}>Premium Quality</span>
                </div>
                <div className={`${styles.glowingHeaderCard} ${styles.badgeHappy}`}>
                  <span className={styles.badgeIcon}><HeadphoneIcon /></span>
                  <span className={styles.badgeText}>Happy Clients</span>
                </div>
              </div>
              
              <img 
                src="/images/jhakku_hero.png" 
                alt="Jhakku drawing with stylus" 
                className={styles.stylusJhakkuImg}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/jhakku.png';
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Explore Section */}
      <section className={styles.exploreSection}>
        <div className="container">
          <div className={styles.whiteBoxContainer}>
            <div className={styles.whiteBoxHeader}>
              <h2 className={styles.exploreTitle}>EXPLORE ALL SERVICES</h2>
            </div>
            
            <div className={styles.exploreCardsGrid}>
              {exploreCards.map((card, i) => (
                <div key={i} className={styles.exploreCard}>
                  <div className={styles.cardImgWrapper}>
                    <img src={card.img} alt={card.title} className={styles.cardImg} />
                  </div>
                  
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    
                    <ul className={styles.bulletList}>
                      {card.bullets.map((bullet, idx) => (
                        <li key={idx} className={styles.bulletItem}>
                          <span className={styles.bulletCheck} style={{ color: card.color }}>✓</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    
                    <div className={styles.actionRow}>
                      <a 
                        href={waLink(card.title)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.circleArrowBtn} 
                        style={{ backgroundColor: card.color }}
                        title={`Enquire about ${card.title}`}
                      >
                        →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Layout: Other Services (left) + CTA (right) */}
      <section className={styles.bottomSection}>
        <div className="container">
          <div className={styles.bottomGrid}>
            
            {/* Left Block: Other Services */}
            <div className={styles.otherServicesBlock}>
              <div className={styles.otherServicesHeader}>
                <span className={styles.otherSub}>OTHER SERVICES</span>
              </div>
              <div className={styles.otherServicesGrid}>
                {otherServices.map((service, i) => (
                  <a 
                    key={i} 
                    href={waLink(service.name)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.otherServiceCard}
                  >
                    <div 
                      className={styles.otherIconCircle} 
                      style={{ '--neon-color': service.color }}
                    >
                      {service.icon}
                    </div>
                    <span className={styles.otherLabel}>{service.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Block: CTA Card */}
            <div className={styles.ctaCardBlock}>
              <div className={styles.ctaCardInner}>
                <div className={styles.ctaInfo}>
                  <h3 className={styles.ctaHeading}>
                    Let's Create<br />
                    Something Awesome<br />
                    <span className={styles.ctaHeadingYellow}>Together!</span>
                  </h3>
                  <Link to="/custom-order" className={styles.ctaStartBtn}>
                    START YOUR PROJECT <span className={styles.arrowIcon}>→</span>
                  </Link>
                </div>
                
                <div className={styles.ctaRightMascot}>
                  <div className={styles.ctaSplatter} />
                  <img 
                    src="/images/panda_peeking.png" 
                    alt="Jhakku panda peeking" 
                    className={styles.peekingJhakkuImg}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/jhakku.png';
                    }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
