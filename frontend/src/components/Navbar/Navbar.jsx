import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiShoppingCart, FiUser } from 'react-icons/fi';
import CartDrawer from '../CartDrawer/CartDrawer';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../context/LanguageContext';
import Logo from './Logo';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { getCartCount } = useCart();
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PRODUCTS', path: '/shop' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'PRICING', path: '/custom-order' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        
        <Link to="/" className={styles.logoWrapper}>
          <Logo className={styles.logoSvg} />
        </Link>
        
        {/* Desktop Menu */}
        <ul className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          {/* Subtle Language Toggle */}
          <button 
            className={styles.langSwitch}
            onClick={() => setLanguage(language === 'EN' ? 'OR' : 'EN')}
          >
            {language === 'EN' ? 'ଓଡ଼ିଆ' : 'EN'}
          </button>

          {/* Cart Icon */}
          <button className={styles.cartIcon} onClick={() => setIsCartOpen(true)}>
            <FiShoppingCart size={20} />
            <span className={styles.cartBadge}>{getCartCount()}</span>
          </button>

          {/* Profile Icon */}
          <Link to="/account" className={styles.accountIcon}>
            <FiUser size={20} />
          </Link>

          {/* ORDER NOW Button */}
          <Link to="/custom-order" className={styles.orderNowBtn}>
            ORDER NOW <span className={styles.btnArrow}>→</span>
          </Link>
          
          <button className={styles.mobileToggle} onClick={toggleMenu}>
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className={styles.backToTop}
            onClick={scrollToTop}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className={styles.mobileMenu}
          >
            <button className={styles.closeToggle} onClick={toggleMenu}>
              <FiX size={32} />
            </button>
            <div className={styles.mobileNavLinks}>
              {navLinks.map((link, i) => (
                <motion.div 
                  key={link.name}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={styles.mobileNavLink}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + navLinks.length * 0.05 }}
                className={styles.mobileActions}
              >
                <Link to="/custom-order" className={styles.orderNowBtn} onClick={() => setIsOpen(false)}>
                  ORDER NOW
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
    </nav>
  );
};

export default Navbar;
