import { Link } from 'react-router-dom';
import { FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brandSection}>
          <img src="/footer-logo.png" alt="Jhakkas Lab" className={styles.footerLogo} />
          <p className={styles.tagline}>Banega Jhakkas</p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon}><FiInstagram size={24} /></a>
            <a href="#" className={styles.socialIcon}><FiTwitter size={24} /></a>
            <a href="#" className={styles.socialIcon}><FiFacebook size={24} /></a>
          </div>
        </div>

        <div className={styles.linksColumn}>
          <h3 className={styles.heading}>{t('services')}</h3>
          <ul>
            <li><Link to="/services">{t('websiteDesign')}</Link></li>
            <li><Link to="/services">{t('logoBranding')}</Link></li>
            <li><Link to="/services">{t('guitarPainting')}</Link></li>
            <li><Link to="/services">{t('muralsArt')}</Link></li>
          </ul>
        </div>

        <div className={styles.linksColumn}>
          <h3 className={styles.heading}>{t('shop')}</h3>
          <ul>
            <li><Link to="/shop">{t('newDrops')}</Link></li>
            <li><Link to="/shop">{t('digitalAssets')}</Link></li>
            <li><Link to="/shop">{t('customGear')}</Link></li>
            <li><Link to="/shop">{t('accessories')}</Link></li>
          </ul>
        </div>

        <div className={styles.linksColumn}>
          <h3 className={styles.heading}>{t('support')}</h3>
          <ul>
            <li><Link to="/about">{t('ourStory')}</Link></li>
            <li><Link to="/contact">{t('getInTouch')}</Link></li>
            <li><Link to="/custom-order">{t('customInquiry')}</Link></li>
            <li><a href="#">{t('faq')}</a></li>
          </ul>
        </div>

        <div className={styles.contactSection}>
          <h3 className={styles.heading}>{t('visitUs')}</h3>
          <p>Bhubaneswar, Odisha</p>
          <p>hello@jhakkaslab.com</p>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Jhakkas Lab. All rights reserved.</p>
        <div className={styles.trustBadges}>
          <span>100% Secure Checkout</span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" alt="Visa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" alt="Mastercard" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/200px-UPI-Logo-vector.svg.png" alt="UPI" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
