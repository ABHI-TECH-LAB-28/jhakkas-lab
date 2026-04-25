import { Link } from 'react-router-dom';
import { FiInstagram, FiTwitter, FiFacebook, FiMessageCircle } from 'react-icons/fi';
import styles from './Footer.module.css';

const Footer = () => {
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

        <div className={styles.linksGrid}>
          <div className={styles.linksColumn}>
            <h3 className={styles.heading}>Services</h3>
            <ul>
              <li><Link to="/services">Website Design</Link></li>
              <li><Link to="/services">Logo Branding</Link></li>
              <li><Link to="/services">Guitar Painting</Link></li>
              <li><Link to="/services">Murals & Art</Link></li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h3 className={styles.heading}>Shop</h3>
            <ul>
              <li><Link to="/shop">New Drops</Link></li>
              <li><Link to="/shop">Digital Assets</Link></li>
              <li><Link to="/shop">Custom Gear</Link></li>
              <li><Link to="/shop">Accessories</Link></li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h3 className={styles.heading}>Support</h3>
            <ul>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/contact">Get in Touch</Link></li>
              <li><Link to="/custom-order">Custom Inquiry</Link></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className={styles.contactSection}>
            <h3 className={styles.heading}>Visit Us</h3>
            <p>Bhubaneswar, Odisha</p>
            <p>hello@jhakkaslab.com</p>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" className={styles.whatsappBtn}>
              <FiMessageCircle size={20} /> Instant Support
            </a>
          </div>
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
