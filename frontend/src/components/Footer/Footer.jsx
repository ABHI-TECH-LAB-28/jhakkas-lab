import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiYoutube, FiMessageSquare, FiSend } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import Logo from '../Navbar/Logo';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useLanguage();

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        
        {/* 1. Brand Section */}
        <div className={styles.brandSection}>
          <div className={styles.logoWrapper}>
            <Logo className={styles.footerLogo} />
          </div>
          <p className={styles.tagline}>
            We are a creative studio offering design, printing, custom art and unique products that make you stand out.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram"><FiInstagram size={18} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook"><FiFacebook size={18} /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Youtube"><FiYoutube size={18} /></a>
            <a href="https://wa.me/919827850842" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp"><FiMessageSquare size={18} /></a>
          </div>
        </div>

        {/* 2. Quick Links Column */}
        <div className={styles.linksColumn}>
          <h3 className={styles.heading}>{t('quickLinks')}</h3>
          <ul>
            <li><Link to="/">{t('home')}</Link></li>
            <li><Link to="/services">{t('services')}</Link></li>
            <li><Link to="/shop">{t('products')}</Link></li>
            <li><Link to="/portfolio">{t('portfolio')}</Link></li>
            <li><Link to="/custom-order">{t('pricing')}</Link></li>
          </ul>
        </div>

        {/* 3. Company Column */}
        <div className={styles.linksColumn}>
          <h3 className={styles.heading}>{t('company')}</h3>
          <ul>
            <li><Link to="/about">{t('aboutUs')}</Link></li>
            <li><Link to="/about#process">{t('ourProcess')}</Link></li>
            <li><Link to="/about#faq">{t('faq')}</Link></li>
            <li><a href="#blog">{t('blog')}</a></li>
            <li><a href="#careers">{t('careers')}</a></li>
          </ul>
        </div>

        {/* 4. Help Column */}
        <div className={styles.linksColumn}>
          <h3 className={styles.heading}>{t('help')}</h3>
          <ul>
            <li><Link to="/contact">{t('contactUs')}</Link></li>
            <li><Link to="/profile#orders">{t('trackOrder')}</Link></li>
            <li><a href="#shipping">{t('shippingInfo')}</a></li>
            <li><a href="#returns">{t('returnsRefunds')}</a></li>
            <li><a href="#terms">{t('termsConditions')}</a></li>
          </ul>
        </div>

        {/* 5. Newsletter Column */}
        <div className={styles.newsletterSection}>
          <h3 className={styles.heading}>{t('newsletter')}</h3>
          <p className={styles.newsletterDesc}>
            Subscribe to get updates on our latest products, offers and creative tips.
          </p>
          <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className={styles.newsletterInput}
              required
            />
            <button type="submit" className={styles.newsletterSubmitBtn} aria-label="Subscribe">
              <FiSend />
            </button>
          </form>
        </div>

      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomBarContainer}`}>
          <p className={styles.copyright}>&copy; 2024 - {new Date().getFullYear()} Jhakkas Lab. All Rights Reserved.</p>
          <p className={styles.madeIn}>
            Made with <span className={styles.heart}>❤️</span> in Odisha
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
