import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ThemeSwitcher.module.css';

const themes = [
  { name: 'Jhakkas Yellow', color: '#FFD600' },
  { name: 'Cyber Pink', color: '#FF007A' },
  { name: 'Electric Blue', color: '#00F0FF' },
  { name: 'Acid Lime', color: '#BCFF00' }
];

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(themes[0]);

  const changeTheme = (theme) => {
    setActiveTheme(theme);
    document.documentElement.style.setProperty('--color-yellow', theme.color);
    setIsOpen(false);
  };

  return (
    <div className={styles.switcherWrapper}>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            className={styles.themeMenu}
          >
            {themes.map((t) => (
              <button 
                key={t.name}
                className={styles.themeOption}
                onClick={() => changeTheme(t)}
                style={{ '--theme-color': t.color }}
              >
                <span className={styles.colorDot} style={{ backgroundColor: t.color }}></span>
                {t.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      <button 
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: activeTheme.color }}
      >
        <span className={styles.triggerIcon}>🎨</span>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
