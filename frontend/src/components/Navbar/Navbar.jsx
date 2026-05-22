import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMenu,
  FiX,
  FiShoppingCart,
  FiSearch,
  FiUser,
} from 'react-icons/fi';

import CartDrawer from '../CartDrawer/CartDrawer';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../context/LanguageContext';

import styles from './Navbar.module.css';

const Navbar = () => {
  const { getCartCount } = useCart();
  const { language, setLanguage, t } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('services'), path: '/services' },
    { name: t('shop'), path: '/shop' },
    { name: t('portfolio'), path: '/portfolio' },
    { name: t('customOrder'), path: '/custom-order' },
  ];

  return (
    <>
      <nav
        className={`${styles.navbar} ${
          scrolled ? styles.scrolled : ''
        }`}
      >
        <div className={styles.navContainer}>
          
          {/* LOGO */}
          <Link to="/" className={styles.logoWrapper}>
            <img
              src="/logo.svg"
              alt="Jhakkas Lab"
              className={styles.logoImage}
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className={styles.desktopMenu}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`${styles.navLink} ${
                    location.pathname === link.path
                      ? styles.active
                      : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* ACTIONS */}
          <div className={styles.actions}>

            {/* LANGUAGE */}
            <button
              className={styles.langSwitch}
              onClick={() =>
                setLanguage(language === 'EN' ? 'OR' : 'EN')
              }
            >
              {language === 'EN' ? 'ଓଡ଼ିଆ' : 'EN'}
            </button>

            {/* SEARCH */}
            <div className={styles.searchBar}>
              <FiSearch className={styles.searchIcon} />

              <input
                type="text"
                placeholder="Search designs..."
                className={styles.searchInput}
              />
            </div>

            {/* CART */}
            <button
              className={styles.iconButton}
              onClick={() => setIsCartOpen(true)}
            >
              <FiShoppingCart size={20} />

              {getCartCount() > 0 && (
                <span className={styles.cartBadge}>
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* ACCOUNT */}
            <Link to="/account" className={styles.iconButton}>
              <FiUser size={20} />
            </Link>

            {/* MOBILE MENU */}
            <button
              className={styles.mobileToggle}
              onClick={() => setIsOpen(true)}
            >
              <FiMenu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{
              opacity: 0,
              clipPath: 'circle(0% at 100% 0)',
            }}
            animate={{
              opacity: 1,
              clipPath: 'circle(150% at 100% 0)',
            }}
            exit={{
              opacity: 0,
              clipPath: 'circle(0% at 100% 0)',
            }}
            transition={{
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <button
              className={styles.closeToggle}
              onClick={() => setIsOpen(false)}
            >
              <FiX size={34} />
            </button>

            <div className={styles.mobileLinks}>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + index * 0.08,
                  }}
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

            {/* PANDA DECOR */}
            <img
              src="/panda.png"
              alt="Jhakku Panda"
              className={styles.mobilePanda}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
};

export default Navbar;
