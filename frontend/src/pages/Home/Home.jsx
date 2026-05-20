import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';
import { FiArrowRight, FiPackage, FiTruck, FiShield } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Home.module.css';

const Home = () => {
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const [addedIds, setAddedIds] = useState({});

  const featuredProducts = [
    { id: 1, title: 'Oversized Graphic T-Shirt', price: 1499, originalPrice: 2499, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80', category: 'clothing', rating: 4.9, reviews: 142, badge: 'BEST SELLER' },
    { id: 2, title: 'Anime Stickers Pack', price: 299, originalPrice: 499, img: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=600&q=80', category: 'stickers', rating: 4.8, reviews: 87, badge: 'HOT' },
    { id: 3, title: 'Custom Portrait Frame', price: 1999, originalPrice: 3499, img: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80', category: 'drawing', rating: 5.0, reviews: 63, badge: 'LIMITED' },
    { id: 4, title: 'Handmade Scrap Decor', price: 899, originalPrice: 1499, img: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80', category: 'decor', rating: 4.7, reviews: 29, badge: '' },
    { id: 5, title: 'Personalized Gift Box', price: 2499, originalPrice: 3999, img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80', category: 'gifts', rating: 4.9, reviews: 45, badge: 'TRENDING' },
    { id: 6, title: 'Cyberpunk Wall Poster', price: 499, originalPrice: 899, img: 'https://images.unsplash.com/photo-1583734551194-279326b014c2?auto=format&fit=crop&w=600&q=80', category: 'posters', rating: 4.8, reviews: 73, badge: '' },
  ];

  const categories = [
    { title: 'T-Shirts', img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=400&q=80', path: '/shop' },
    { title: 'Portraits', img: 'https://images.unsplash.com/photo-1544273677-c433136021d4?auto=format&fit=crop&w=400&q=80', path: '/shop' },
    { title: 'Stickers', img: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=400&q=80', path: '/shop' },
    { title: 'Posters', img: 'https://images.unsplash.com/photo-1583734551194-279326b014c2?auto=format&fit=crop&w=400&q=80', path: '/shop' },
    { title: 'Gifts', img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=400&q=80', path: '/shop' },
    { title: 'Decor', img: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=400&q=80', path: '/shop' },
    { title: 'Websites', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80', path: '/services' },
    { title: 'Logos', img: 'https://images.unsplash.com/photo-1572044162444-ad60f128bde2?auto=format&fit=crop&w=400&q=80', path: '/services' },
  ];

  const handleAddToCart = (product) => {
    const defaultSize = product.category === 'clothing' ? 'M' : 'Standard';
    addToCart(product, defaultSize);
    setAddedIds(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => setAddedIds(prev => ({ ...prev, [product.id]: false })), 2000);
  };

  return (
    <div className={styles.home} ref={containerRef}>

      {/* ===== HERO BANNER ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={`container ${styles.heroContent}`}>
          <motion.div
            className={styles.heroText}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.heroBadge}>🔥 New Drops Are Here</span>
            <h1 className={styles.heroTitle}>
              {t('heroTitleLine1')}<br />
              <span className={styles.heroTitleAccent}>{t('heroTitleLine2')}</span>
            </h1>
            <p className={styles.heroDesc}>{t('heroDescription')}</p>
            <div className={styles.heroBtns}>
              <Link to="/shop" className={styles.btnShopNow}>
                Shop Now <FiArrowRight />
              </Link>
              <Link to="/custom-order" className={styles.btnCustom}>
                Custom Order
              </Link>
            </div>
          </motion.div>

          {/* Hero Stats */}
          <div className={styles.heroStats}>
            <div className={styles.stat}><strong>500+</strong><span>Happy Customers</span></div>
            <div className={styles.statDivider} />
            <div className={styles.stat}><strong>100%</strong><span>Custom Made</span></div>
            <div className={styles.statDivider} />
            <div className={styles.stat}><strong>4.9★</strong><span>Avg Rating</span></div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className={styles.marqueeStrip}>
          <motion.div
            className={styles.marqueeInner}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          >
            {['FREE SHIPPING ABOVE ₹999', 'CUSTOM DESIGNS', 'STREET ART MERCH', '100% HANDMADE', 'ODIA PRIDE 🔥', 'FREE SHIPPING ABOVE ₹999', 'CUSTOM DESIGNS', 'STREET ART MERCH', '100% HANDMADE', 'ODIA PRIDE 🔥'].map((text, i) => (
              <span key={i}>{text} &nbsp;•&nbsp; </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== TRUST BADGES ===== */}
      <section className={styles.trustSection}>
        <div className={`container ${styles.trustGrid}`}>
          {[
            { icon: <FiTruck />, title: 'Free Delivery', sub: 'On orders above ₹999' },
            { icon: <FiShield />, title: 'Secure Payment', sub: 'UPI, Cards & More' },
            { icon: <FiPackage />, title: 'Easy Returns', sub: '7-day return policy' },
            { icon: <FaStar />, title: '4.9★ Rated', sub: 'By 500+ customers' },
          ].map((item, i) => (
            <div key={i} className={styles.trustBadge}>
              <div className={styles.trustIcon}>{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SHOP BY CATEGORY ===== */}
      <section className={styles.categoriesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>{t('bestSelling')}</h2>
            <Link to="/shop" className={styles.viewAll}>View All <FiArrowRight /></Link>
          </div>
          <div className={styles.categoriesGrid}>
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                className={styles.categoryCard}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link to={cat.path}>
                  <img src={cat.img} alt={cat.title} />
                  <div className={styles.catOverlay}>{cat.title}</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className={styles.productsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>{t('featuredProducts')}</h2>
            <Link to="/shop" className={styles.viewAll}>View All <FiArrowRight /></Link>
          </div>
          <div className={styles.productsGrid}>
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                className={styles.productCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {product.badge && (
                  <span className={styles.productBadge}>{product.badge}</span>
                )}
                <Link to={`/product/${product.id}`} className={styles.productImgWrap}>
                  <img src={product.img} alt={product.title} />
                  <button
                    className={styles.wishlistBtn}
                    onClick={(e) => e.preventDefault()}
                  ><FaHeart /></button>
                </Link>
                <div className={styles.productInfo}>
                  <h3 className={styles.productTitle}>
                    <Link to={`/product/${product.id}`}>{product.title}</Link>
                  </h3>
                  <div className={styles.productRating}>
                    <FaStar className={styles.starIcon} />
                    <span>{product.rating} ({product.reviews})</span>
                  </div>
                  <div className={styles.productPriceRow}>
                    <span className={styles.productPrice}>₹{product.price}</span>
                    <span className={styles.productOriginalPrice}>₹{product.originalPrice}</span>
                    <span className={styles.productDiscount}>
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                    </span>
                  </div>
                  <button
                    className={`${styles.addToCartBtn} ${addedIds[product.id] ? styles.addedBtn : ''}`}
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaShoppingCart />
                    {addedIds[product.id] ? 'Added ✓' : t('addToCart')}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className={styles.howSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <h2>{t('howItWorks')}</h2>
            <p>{t('howItWorksSub')}</p>
          </div>
          <div className={styles.stepsGrid}>
            {[
              { num: '01', icon: '💡', title: t('step1Title'), desc: t('step1Desc') },
              { num: '02', icon: '🎨', title: t('step2Title'), desc: t('step2Desc') },
              { num: '03', icon: '🚀', title: t('step3Title'), desc: t('step3Desc') },
            ].map((step, i) => (
              <motion.div
                key={i}
                className={styles.stepCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className={styles.stepEmoji}>{step.icon}</div>
                <div className={styles.stepNum}>{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className={styles.reviewsSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <h2>{t('wordOnStreet')}</h2>
          </div>
          <div className={styles.reviewsGrid}>
            {[
              { name: 'Rahul S.', role: 'Startup Founder', text: 'Jhakkas Lab transformed our brand identity completely. The website they built is converting like crazy!', rating: 5 },
              { name: 'Priya M.', role: 'Streetwear Brand Owner', text: 'Ordered custom tees for my pop-up. The print quality is insane and designs are truly unique. 10/10!', rating: 5 },
              { name: 'Vikram D.', role: 'Creative Director', text: 'They don\'t just design, they build culture. Best creative studio I\'ve ever worked with.', rating: 5 },
            ].map((r, i) => (
              <motion.div
                key={i}
                className={styles.reviewCard}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.reviewStars}>{'★'.repeat(r.rating)}</div>
                <p>"{r.text}"</p>
                <div className={styles.reviewAuthor}>
                  <strong>{r.name}</strong>
                  <span>{r.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className={styles.newsletterSection}>
        <div className="container">
          <motion.div
            className={styles.newsletterBox}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>{t('stayInLoop')}</h2>
            <p>{t('newsletterSub')}</p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder={t('emailPlaceholder')} required />
              <button type="submit">{t('subscribe')}</button>
            </form>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
