import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from './Mascot.module.css';
import pandaVideo from '../../assets/mascot/panda_video.mp4';

const Mascot = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Mouse tracking for "playing" with customer
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const pandaX = useSpring(mouseX, springConfig);
  const pandaY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Move slightly towards mouse
      const x = (clientX - innerWidth + 150) / 15;
      const y = (clientY - innerHeight + 150) / 15;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      className={styles.mascotContainer}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <div className={styles.mascotWrapper}>
        <motion.div
          className={styles.speechBubble}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: isScrolling ? 0 : 1, opacity: isScrolling ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {isScrolling ? "Let's roll!" : "Jhakkas!"}
        </motion.div>

        <motion.div
          className={styles.videoWrapper}
          style={{ x: pandaX, y: pandaY }}
          animate={{
            y: isClicked ? [0, -50, 0] : [0, -15, 0],
            scale: isClicked ? [1, 1.2, 1] : 1
          }}
          transition={{
            y: isClicked ? { duration: 0.5 } : { repeat: Infinity, duration: 3, ease: "easeInOut" },
            scale: { duration: 0.5 }
          }}
          onClick={() => {
            setIsClicked(true);
            setTimeout(() => setIsClicked(false), 500);
          }}
        >
          <video 
            src={pandaVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className={styles.pandaVideo}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Mascot;
