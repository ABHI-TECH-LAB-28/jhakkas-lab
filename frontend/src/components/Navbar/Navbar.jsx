import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiShoppingCart, FiSearch, FiUser } from 'react-icons/fi';
import CartDrawer from '../CartDrawer/CartDrawer';
import { useCart } from '../../context/CartContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { getCartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lang, setLang] = useState('EN');
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
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Shop', path: '/shop' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Custom Order', path: '/custom-order' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        
        <Link to="/" className={styles.logoWrapper}>
          <img src="/logo.svg" alt="Jhakkas Lab Logo" className={styles.logoImage} />
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
          {/* Language Switcher */}
          <button 
            className={styles.langSwitch}
            onClick={() => setLang(lang === 'EN' ? 'ଓଡ଼ି' : 'EN')}
          >
            {lang}
          </button>

          <div className={styles.searchBar}>
            <FiSearch className={styles.searchIcon} />
            <input type="text" placeholder="Search products..." className={styles.searchInput} />
          </div>

          <button className={styles.cartIcon} onClick={() => setIsCartOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <FiShoppingCart size={24} />
            {getCartCount() > 0 && (
              <span className={styles.cartBadge}>{getCartCount()}</span>
            )}
          </button>

          <Link to="/account" className={styles.accountIcon}>
            <FiUser size={24} />
          </Link>
          
          <button className={styles.mobileToggle} onClick={toggleMenu}>
            <FiMenu size={28} />
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
              <FiX size={36} />
            </button>
            <div className={styles.mobileNavLinks}>
              {[{name: 'Home', path: '/'}, ...navLinks, {name: 'About', path: '/about'}, {name: 'Contact', path: '/contact'}].map((link, i) => (
                <motion.div 
                  key={link.name}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
    </nav>
  );
};

export default Navbar;
