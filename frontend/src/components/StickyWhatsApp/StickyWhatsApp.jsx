import { FiMessageCircle } from 'react-icons/fi';
import styles from './StickyWhatsApp.module.css';

const StickyWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/1234567890" 
      target="_blank" 
      rel="noreferrer" 
      className={styles.whatsappBtn}
      aria-label="Chat with us on WhatsApp"
    >
      <div className={styles.iconWrapper}>
        <FiMessageCircle size={28} />
      </div>
      <div className={styles.tooltip}>Chat with us!</div>
    </a>
  );
};

export default StickyWhatsApp;
