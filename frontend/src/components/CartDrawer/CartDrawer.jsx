import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import styles from './CartDrawer.module.css';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();
  const { isAuthenticated } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const subtotal = getCartTotal();

  const handleCheckout = () => {
    if (!isAuthenticated) {
      onClose();
      navigate('/login');
    } else {
      // Proceed to checkout page or WhatsApp
      alert("Proceeding to secure checkout...");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer Panel */}
          <motion.div 
            className={styles.drawer}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className={styles.header}>
              <h2>{t('yourCart')} <span className={styles.count}>({getCartCount()})</span></h2>
              <button className={styles.closeBtn} onClick={onClose}>
                <FiX size={24} />
              </button>
            </div>

            <div className={styles.itemsContainer}>
              {cartItems.length === 0 ? (
                <div className={styles.emptyCart}>
                  <p>{t('emptyCart')}</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={`${item.id}-${item.size}`} className={styles.cartItem}>
                    <img src={item.img} alt={item.title} className={styles.itemImage} />
                    <div className={styles.itemDetails}>
                      <h4 className={styles.itemName}>{item.title}</h4>
                      {item.size && <span className={styles.itemSize}>Size: {item.size}</span>}
                      <span className={styles.itemPrice}>₹{item.price}</span>
                      
                      <div className={styles.itemControls}>
                        <div className={styles.quantityControl}>
                          <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}>
                            <FiMinus size={14} />
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}>
                            <FiPlus size={14} />
                          </button>
                        </div>
                        <button 
                          className={styles.removeBtn}
                          onClick={() => removeFromCart(item.id, item.size)}
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className={styles.footer}>
              <div className={styles.subtotalRow}>
                <span>{t('subtotal')}</span>
                <span className={styles.subtotalValue}>₹{subtotal}</span>
              </div>
              <p className={styles.taxesInfo}>Taxes and shipping calculated at checkout.</p>
              
              <div className={styles.trustBadges}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" alt="Visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" alt="Mastercard" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/200px-UPI-Logo-vector.svg.png" alt="UPI" />
              </div>

              <button 
                className={styles.checkoutBtn} 
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
              >
                {isAuthenticated ? t('checkout') : t('loginToCheckout')}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
