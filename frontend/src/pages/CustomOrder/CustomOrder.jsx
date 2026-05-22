import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiZap, FiAward, FiClock, FiSmile, FiFileText, FiCheck, 
  FiArrowRight, FiHelpCircle, FiMessageSquare, FiSend, FiStar, FiChevronRight, FiPercent
} from 'react-icons/fi';
import styles from './CustomOrder.module.css';

// SVG Icons matching Screen 4 Mockup
const CursorIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
    <path d="M13 13l6 6" />
  </svg>
);

const CrownIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
    <path d="M3 20h18" strokeLinecap="round" />
  </svg>
);

const RocketIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
    <path d="M14 9l-5 5" />
    <path d="M9 14l-5 5a2 2 0 0 0 2 2l5-4" />
    <path d="M12 2A15.3 15.3 0 0 1 22 12l-4 4-6-6-4-4Z" />
  </svg>
);

const BlueprintIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-yellow)' }}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const WA_NUMBER = '919827850842';

const PRICING_PLANS = [
  {
    id: 'basic',
    name: 'BASIC',
    subtitle: 'For Starters & Individuals',
    price: '₹ 999',
    period: '/ project',
    icon: <CursorIcon />,
    features: [
      '1 Logo Design',
      '2 Social Media Posts',
      '1 Poster Design',
      '2 Revisions',
      '3 Days Delivery',
      'Basic Support'
    ],
    buttonText: 'CHOOSE PLAN',
    isPopular: false
  },
  {
    id: 'standard',
    name: 'STANDARD',
    subtitle: 'For Growing Businesses',
    price: '₹ 4,999',
    period: '/ project',
    icon: <FiStar size={24} style={{ fill: 'currentColor' }} />,
    features: [
      'Logo Design',
      '8 Social Media Posts',
      '3 Poster Designs',
      'Brand Identity (Basic)',
      '5 Revisions',
      '5 Days Delivery',
      'Priority Support'
    ],
    buttonText: 'CHOOSE PLAN',
    isPopular: true
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    subtitle: 'For Serious Brands',
    price: '₹ 14,999',
    period: '/ project',
    icon: <CrownIcon />,
    features: [
      'Logo Design (Premium)',
      '15 Social Media Posts',
      '5 Poster Designs',
      'Brand Identity (Complete)',
      'Packaging Design',
      'Unlimited Revisions',
      '7 Days Delivery',
      'Priority Support',
      'Source Files'
    ],
    buttonText: 'CHOOSE PLAN',
    isPopular: false
  },
  {
    id: 'enterprise',
    name: 'ENTERPRISE',
    subtitle: 'For Large Businesses',
    price: '₹ 24,999+',
    period: '/ project',
    icon: <RocketIcon />,
    features: [
      'Everything in Premium',
      'Website Design (Up to 5 Pages)',
      'Custom Illustrations',
      'Motion Graphics (Basic)',
      'Digital Marketing Kit',
      'Dedicated Account Manager',
      'Premium Support',
      'Custom Add-ons'
    ],
    buttonText: 'CONTACT US',
    isPopular: false
  }
];

const SERVICE_PRICING = [
  { name: 'LOGO DESIGN', price: '₹999', label: 'Starting at', icon: '🎨' },
  { name: 'SOCIAL MEDIA POST', price: '₹199 / Post', label: 'Starting at', icon: '📱' },
  { name: 'POSTER DESIGN', price: '₹499', label: 'Starting at', icon: '🖼️' },
  { name: 'BANNER DESIGN', price: '₹699', label: 'Starting at', icon: '🏁' },
  { name: 'WEBSITE DESIGN', price: '₹4,999', label: 'Starting at', icon: '💻' },
  { name: 'T-SHIRT PRINTING', price: '₹499', label: 'Starting at', icon: '👕' },
  { name: 'PACKAGING DESIGN', price: '₹2,999', label: 'Starting at', icon: '📦' },
  { name: 'PORTRAIT ART', price: '₹999', label: 'Starting at', icon: '🖌️' }
];

const PACKAGE_DEALS = [
  {
    id: 'starter-pkg',
    name: 'STARTER PACKAGE',
    price: '₹1,499',
    period: '/ package',
    theme: 'green',
    bullets: [
      'Logo Design',
      '2 Social Media Posts',
      '1 Basic Poster'
    ],
    buttonText: 'CHOOSE'
  },
  {
    id: 'business-pkg',
    name: 'BUSINESS PACKAGE',
    price: '₹9,999',
    period: '/ package',
    theme: 'blue',
    bullets: [
      'Logo + Brand Identity',
      '10 Social Media Posts',
      '3 Poster Designs',
      'Business Website (Basic)'
    ],
    buttonText: 'CHOOSE'
  },
  {
    id: 'brand-launch-pkg',
    name: 'BRAND LAUNCH PACKAGE',
    price: '₹24,999',
    period: '/ package',
    theme: 'purple',
    badge: 'BEST VALUE',
    bullets: [
      'Complete Branding',
      'Website (Up to 5 Pages)',
      '15 Social Media Posts',
      'Packaging + Marketing Kit'
    ],
    buttonText: 'CHOOSE'
  }
];

const CustomOrder = () => {
  const [jhakkuImg, setJhakkuImg] = useState('/images/jhakku_hero.png');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    requirements: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  const openInquiryModal = (plan) => {
    setSelectedPlan(plan);
    setFormData({
      name: '',
      whatsapp: '',
      email: '',
      requirements: ''
    });
    setSubmitted(false);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const title = selectedPlan.name;
    const price = selectedPlan.price;
    const period = selectedPlan.period || '';
    
    const message = `Hi Jhakkas Lab! I'm interested in ordering the *${title}* (${price}${period}).

*My Details*:
- Name: ${formData.name}
- WhatsApp: ${formData.whatsapp}
${formData.email ? `- Email: ${formData.email}\n` : ''}
*Project Requirements*:
${formData.requirements}`;

    const encodedMessage = encodeURIComponent(message);
    const link = `https://wa.me/${WA_NUMBER}?text=${encodedMessage}`;
    
    setWhatsappLink(link);
    setSubmitted(true);
    
    // Automatically redirect in a few seconds or when they click the button
    setTimeout(() => {
      window.open(link, '_blank');
    }, 1500);
  };

  return (
    <div className={styles.pricingPage}>
      <div className="container">
        
        {/* Top Header Section */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.titleContainer}>
              <h1 className={styles.mainTitle}>
                OUR <span className="brush-text">PRICING</span>
              </h1>
            </div>
            <p className={styles.subtitle}>
              Transparent pricing. Premium quality. Choose the plan that suits your needs.
            </p>
            
            {/* 3 Badges under subtitle */}
            <div className={styles.badgeRow}>
              <div className={styles.badgeItem}>
                <div className={styles.badgeIcon}><FiAward /></div>
                <span>100% Quality Work</span>
              </div>
              <div className={styles.badgeItem}>
                <div className={styles.badgeIcon}><FiClock /></div>
                <span>On-Time Delivery</span>
              </div>
              <div className={styles.badgeItem}>
                <div className={styles.badgeIcon}><FiSmile /></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Jhakku Character peeking in center */}
          <div className={styles.jhakkuContainer}>
            <div className={styles.splatterGlow} />
            <img 
              src={jhakkuImg} 
              alt="Jhakku Mascot" 
              className={styles.jhakkuMascot}
              onError={() => setJhakkuImg('/jhakku.png')}
            />
          </div>

          {/* Custom Plan Block on Right */}
          <div className={styles.headerRight}>
            <div className={styles.customQuoteBox}>
              <div className={styles.customQuoteHeader}>
                <BlueprintIcon />
                <h3>NEED CUSTOM PLAN?</h3>
              </div>
              <p>Tell us your requirements and we'll create a perfect plan for you!</p>
              <button 
                onClick={() => openInquiryModal({ name: 'Custom Order', price: 'Custom Quote' })}
                className={styles.quoteBtn}
              >
                GET CUSTOM QUOTE <FiArrowRight />
              </button>
            </div>
          </div>
        </header>

        {/* 4 Pricing Cards Grid */}
        <div className={styles.pricingGrid}>
          {PRICING_PLANS.map((plan) => (
            <motion.div 
              key={plan.id}
              className={`${styles.planCard} ${plan.isPopular ? styles.popularCard : ''}`}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(255,214,0,0.15)' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {plan.isPopular && (
                <div className={styles.popularBadge}>
                  <FiStar style={{ fill: '#050505', color: '#050505' }} /> MOST POPULAR
                </div>
              )}
              
              <div className={styles.planHeader}>
                <div className={styles.planIconWrapper}>
                  {plan.icon}
                </div>
                <h2 className={styles.planName}>{plan.name}</h2>
                <p className={styles.planSubtitle}>{plan.subtitle}</p>
              </div>

              <div className={styles.planPriceContainer}>
                <span className={styles.planPrice}>{plan.price}</span>
                <span className={styles.planPeriod}>{plan.period}</span>
              </div>

              <ul className={styles.planFeatures}>
                {plan.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <span className={styles.checkIcon}><FiCheck /></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`${styles.planBtn} ${plan.isPopular ? styles.popularBtn : ''}`}
                onClick={() => openInquiryModal(plan)}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Service Wise Pricing Section */}
        <section className={styles.serviceWiseSection}>
          <div className={styles.sectionDivider}>
            <span className={styles.dividerLine} />
            <h2 className={styles.dividerTitle}>SERVICE WISE PRICING</h2>
            <span className={styles.dividerLine} />
          </div>

          <div className={styles.serviceGrid}>
            {SERVICE_PRICING.map((service, index) => (
              <motion.div 
                key={index} 
                className={styles.serviceItemCard}
                whileHover={{ scale: 1.03, borderColor: 'var(--color-yellow)' }}
              >
                <div className={styles.serviceIconContainer}>
                  <span className={styles.serviceEmoji}>{service.icon}</span>
                </div>
                <div className={styles.serviceDetails}>
                  <h4 className={styles.serviceName}>{service.name}</h4>
                  <p className={styles.servicePriceLabel}>
                    {service.label} <span className={styles.servicePriceVal}>{service.price}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Package Deals Section */}
        <section className={styles.packageDealsSection}>
          <div className={styles.packagesHeader}>
            <div className={styles.giftIconContainer}>
              <span className={styles.giftEmoji}>🎁</span>
            </div>
            <div>
              <h2 className={styles.packagesTitle}>PACKAGE DEALS</h2>
              <p className={styles.packagesSubtitle}>Save More with Exclusive Packages!</p>
            </div>
          </div>

          <div className={styles.packagesGrid}>
            {PACKAGE_DEALS.map((pkg) => (
              <motion.div 
                key={pkg.id}
                className={`${styles.packageCard} ${styles[`theme-${pkg.theme}`]}`}
                whileHover={{ y: -8 }}
              >
                {pkg.badge && (
                  <div className={styles.packageBadge}>{pkg.badge}</div>
                )}
                
                <div className={styles.packageCardHeader}>
                  <h3 className={styles.packageName}>{pkg.name}</h3>
                </div>

                <ul className={styles.packageBullets}>
                  {pkg.bullets.map((bullet, idx) => (
                    <li key={idx} className={styles.packageBulletItem}>
                      <span className={styles.bulletDot}></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.packageFooter}>
                  <div className={styles.packagePriceBlock}>
                    <span className={styles.pkgPrice}>{pkg.price}</span>
                    <span className={styles.pkgPeriod}>{pkg.period}</span>
                  </div>
                  <button 
                    className={styles.packageBtn}
                    onClick={() => openInquiryModal(pkg)}
                  >
                    {pkg.buttonText}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      {/* Value Footer Info Strip */}
      <div className={styles.infoStripFooter}>
        <div className={`container ${styles.infoStripContainer}`}>
          <div className={styles.infoLeft}>
            <span className={styles.infoIcon}>⚠️</span>
            <p>All prices are inclusive of taxes. | Custom requirements? Contact us for a personalized quote.</p>
          </div>
          <a 
            href={`https://wa.me/${WA_NUMBER}?text=Hi%20Jhakkas%20Lab!%20I%20have%20a%20project%20query.`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.infoRight}
          >
            <span className={styles.whatsappLogo}>💬</span>
            <span>Need Help? Chat with us on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Inquiry / Quote Modal */}
      <AnimatePresence>
        {isModalOpen && selectedPlan && (
          <div className={styles.modalOverlay}>
            <motion.div 
              className={styles.modalContainer}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <button 
                className={styles.closeModalBtn}
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>

              {!submitted ? (
                <>
                  <div className={styles.modalHeader}>
                    <h2>START YOUR PROJECT</h2>
                    <p className={styles.selectedPlanTag}>
                      Selected: <strong>{selectedPlan.name}</strong> ({selectedPlan.price})
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className={styles.modalForm}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Your Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Enter your name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="whatsapp">WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        id="whatsapp" 
                        name="whatsapp" 
                        placeholder="WhatsApp Number (with country code)" 
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address (Optional)</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="requirements">Project Brief & Details *</label>
                      <textarea 
                        id="requirements" 
                        name="requirements" 
                        rows="4" 
                        placeholder="Describe your design needs, style preferences, colors, sizes, or custom requests..."
                        value={formData.requirements}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <button type="submit" className={styles.submitRequestBtn}>
                      SUBMIT REQUEST & CHAT <FiArrowRight />
                    </button>
                  </form>
                </>
              ) : (
                <motion.div 
                  className={styles.successScreen}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className={styles.successIconWrapper}>
                    <FiCheck size={40} />
                  </div>
                  <h2>REQUEST RECEIVED!</h2>
                  <p>Our lead designer will contact you shortly to lock in your order details.</p>
                  <p className={styles.successSub}>Redirecting you to WhatsApp to start chat...</p>
                  
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.manualRedirectBtn}
                  >
                    CHAT NOW ON WHATSAPP <FiArrowRight />
                  </a>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default CustomOrder;
