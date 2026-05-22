import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowRight, FiArrowLeft, FiShoppingCart, FiStar, FiCheck, FiInfo, FiTag
} from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import styles from './Home.module.css';

// SVG Icons for Services
const GraphicDesignIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    <path d="M12 8L16 12L12 16" />
    <path d="M8 12H16" />
  </svg>
);

const WebDigitalIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

const PrintingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </svg>
);

const CustomArtIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.7975 2.47466 15.4839 3.3054 16.949C3.7661 17.7615 3.49137 18.7946 2.7662 19.4216C2.26189 19.8576 2.05269 20.5284 2.22638 21.1718C2.39999 21.8152 2.92383 22.3023 3.57868 22.4287C4.9458 22.6926 6.30537 22.0911 7.05098 20.9324C7.57502 20.1182 8.60157 19.8055 9.47543 20.2017C10.2796 20.5663 11.134 20.7612 12.0194 20.7612C12.013 20.7612 12.0065 20.7612 12 20.7612V22Z" />
    <circle cx="7.5" cy="10.5" r="1.5" />
    <circle cx="11.5" cy="7.5" r="1.5" />
    <circle cx="16.5" cy="9.5" r="1.5" />
    <circle cx="15.5" cy="14.5" r="1.5" />
  </svg>
);

const ProductsMerchIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const BrandingSolutionsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const PenTipIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    <path d="M12 8L16 12L12 16" />
    <path d="M8 12H16" />
  </svg>
);

// Scroll Counter Component
const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const endVal = parseInt(end);
          if (isNaN(endVal)) return;
          const totalMiliseconds = duration;
          const incrementTime = Math.max(Math.floor(totalMiliseconds / endVal), 25);
          const stepVal = Math.ceil(endVal / (duration / incrementTime));
          
          const timer = setInterval(() => {
            start += stepVal;
            if (start >= endVal) {
              clearInterval(timer);
              setCount(endVal);
            } else {
              setCount(start);
            }
          }, incrementTime);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{count}</span>;
};

const Home = () => {
  const { addToCart } = useCart();
  const [addedIds, setAddedIds] = useState({});
  const productsCarouselRef = useRef(null);
  const [currentReview, setCurrentReview] = useState(0);

  const services = [
    { id: 1, name: 'Graphic Design', desc: 'Logos, Branding, Posters, Social Media Design & More.', icon: <PenTipIcon />, path: '/services' },
    { id: 2, name: 'Website & Digital', desc: 'Websites, UI/UX Design, SEO, Digital Marketing & More.', icon: <WebDigitalIcon />, path: '/services' },
    { id: 3, name: 'Printing Services', desc: 'T-Shirt Printing, Posters, Banners, Stickers, Cards & More.', icon: <PrintingIcon />, path: '/services' },
    { id: 4, name: 'Custom Art & Craft', desc: 'Portraits, Paintings, Handmade Art, Scrap Decor & More.', icon: <CustomArtIcon />, path: '/services' },
    { id: 5, name: 'Products & Merch', desc: 'T-Shirts, Hoodies, Mugs, Keychains, Caps, Posters & More.', icon: <ProductsMerchIcon />, path: '/shop' },
    { id: 6, name: 'Branding Solutions', desc: 'Complete Branding Solutions for Startups & Businesses.', icon: <BrandingSolutionsIcon />, path: '/services' },
  ];

  const popularProducts = [
    { id: 101, title: 'Oversized T-Shirt', price: 699, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80', badge: '₹699' },
    { id: 102, title: 'Hoodie', price: 1299, img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80', badge: '₹1299' },
    { id: 103, title: 'Customized Mug', price: 349, img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80', badge: '₹349' },
    { id: 104, title: 'Anime Stickers', price: 99, img: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=600&q=80', badge: '₹99' },
    { id: 105, title: 'Keychain', price: 199, img: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80', badge: '₹199' },
    { id: 106, title: 'Wall Poster', price: 249, img: 'https://images.unsplash.com/photo-1583734551194-279326b014c2?auto=format&fit=crop&w=600&q=80', badge: '₹249' },
  ];

  const portfolioItems = [
    { id: 201, title: 'Branding Design', img: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80' },
    { id: 202, title: 'Poster Design', img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=600&q=80' },
    { id: 203, title: 'Website Design', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80' },
    { id: 204, title: 'T-Shirt Printing', img: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=600&q=80' },
    { id: 205, title: 'Pencil Portrait', img: 'https://images.unsplash.com/photo-1579783928621-7a13d66a6211?auto=format&fit=crop&w=600&q=80' },
    { id: 206, title: 'Packaging Design', img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80' },
  ];

  const reviews = [
    { 
      id: 301, 
      name: 'Rakesh Sahoo', 
      role: 'Business Owner', 
      rating: 5, 
      text: 'Amazing work! The logo and branding created by Jhakkas Lab gave my business a whole new identity.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
    },
    { 
      id: 302, 
      name: 'Priya Kar', 
      role: 'Content Creator', 
      rating: 5, 
      text: 'Their creative ideas are next level. Social media designs always get me more engagement.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
    },
    { 
      id: 303, 
      name: 'Ankit Mohanty', 
      role: 'Event Organizer', 
      rating: 5, 
      text: 'Super fast service and excellent quality prints. My go-to place for all design and printing needs.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'
    }
  ];

  // Auto rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handlePrevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      category: 'merch'
    }, 'Standard');
    setAddedIds(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => setAddedIds(prev => ({ ...prev, [product.id]: false })), 2000);
  };

  const scrollCarousel = (direction) => {
    if (productsCarouselRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      productsCarouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.homeContainer}>
      
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>
              IDEA AAPKI,<br />
              CREATION HAMARI,<br />
              <span className={styles.heroTitleAccent}>BANEGA JHAKKAS!</span>
            </h1>
            <p className={styles.heroSubtitle}>
              We are a creative studio that combines design, printing, and handmade art to bring your ideas to life.
            </p>
            <div className={styles.heroButtons}>
              <Link to="/services" className={styles.btnPrimary}>
                EXPLORE SERVICES <FiArrowRight className={styles.arrowIcon} />
              </Link>
              <Link to="/portfolio" className={styles.btnSecondary}>
                VIEW PORTFOLIO <span className={styles.eyeIcon}>👁</span>
              </Link>
            </div>
            
            {/* Value Badges */}
            <div className={styles.valueBadgesGrid}>
              <div className={styles.badgeItem}>
                <span className={styles.badgeIcon}>🎨</span>
                <div>
                  <strong>Creative Design</strong>
                  <span>Unique Ideas</span>
                </div>
              </div>
              <div className={styles.badgeItem}>
                <span className={styles.badgeIcon}>🛡️</span>
                <div>
                  <strong>Premium Quality</strong>
                  <span>Top Notch Work</span>
                </div>
              </div>
              <div className={styles.badgeItem}>
                <span className={styles.badgeIcon}>⚡</span>
                <div>
                  <strong>Fast Delivery</strong>
                  <span>On Time, Every Time</span>
                </div>
              </div>
              <div className={styles.badgeItem}>
                <span className={styles.badgeIcon}>📞</span>
                <div>
                  <strong>Customer Support</strong>
                  <span>We're Here For You</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.heroRight}>
            <div className={styles.mascotFrame}>
              <div className={styles.splatterCircle}></div>
              
              {/* Floating Items */}
              <div className={`${styles.floatingItem} ${styles.floatTshirt}`} title="BANEGA JHAKKAS T-Shirt">
                <div className={styles.miniCard}>
                  <span className={styles.miniIcon}>👕</span>
                  <span className={styles.miniLabel}>T-Shirt</span>
                </div>
              </div>
              <div className={`${styles.floatingItem} ${styles.floatMug}`} title="JHAKKAS LAB Mug">
                <div className={styles.miniCard}>
                  <span className={styles.miniIcon}>☕</span>
                  <span className={styles.miniLabel}>Mug</span>
                </div>
              </div>
              <div className={`${styles.floatingItem} ${styles.floatFrame}`} title="CREATE YOUR OWN STORY Frame">
                <div className={styles.miniCard}>
                  <span className={styles.miniIcon}>🖼️</span>
                  <span className={styles.miniLabel}>Frame</span>
                </div>
              </div>
              <div className={`${styles.floatingItem} ${styles.floatPhone}`} title="JHAKKAS LAB Phone Case">
                <div className={styles.miniCard}>
                  <span className={styles.miniIcon}>📱</span>
                  <span className={styles.miniLabel}>Case</span>
                </div>
              </div>

              <img 
                src="/images/jhakku_hero.png" 
                alt="Jhakkas Lab Panda Mascot" 
                className={styles.mascotImg}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/jhakku.png';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionHeaderLeft}>
              <span className={styles.categoryLabel}>WHAT WE DO</span>
              <h2 className={styles.sectionTitle}>OUR SERVICES</h2>
            </div>
            <Link to="/services" className={styles.viewAllBtn}>
              VIEW ALL SERVICES
            </Link>
          </div>
          
          <div className={styles.servicesGrid}>
            {services.map((item) => (
              <div key={item.id} className={styles.serviceCard}>
                <div className={styles.serviceCardIcon}>
                  {item.icon}
                </div>
                <h3 className={styles.serviceCardTitle}>{item.name}</h3>
                <p className={styles.serviceCardDesc}>{item.desc}</p>
                <Link to={item.path} className={styles.exploreLink}>
                  EXPLORE <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. POPULAR PRODUCTS SECTION */}
      <section className={styles.productsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>POPULAR PRODUCTS</h2>
            <div className={styles.headerRightActions}>
              <Link to="/shop" className={styles.viewAllBtn} style={{ marginRight: '1rem' }}>
                VIEW ALL PRODUCTS
              </Link>
              <div className={styles.carouselNav}>
                <button onClick={() => scrollCarousel('left')} className={styles.navArrowBtn} aria-label="Previous Products">
                  <FiArrowLeft />
                </button>
                <button onClick={() => scrollCarousel('right')} className={styles.navArrowBtn} aria-label="Next Products">
                  <FiArrowRight />
                </button>
              </div>
            </div>
          </div>

          <div className={styles.carouselContainer} ref={productsCarouselRef}>
            {popularProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productImgWrapper}>
                  <img src={product.img} alt={product.title} className={styles.productImg} />
                  <span className={styles.priceTag}>{product.badge}</span>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className={`${styles.cartBadgeBtn} ${addedIds[product.id] ? styles.cartAdded : ''}`}
                    title="Add to Cart"
                  >
                    {addedIds[product.id] ? <FiCheck /> : <FiShoppingCart />}
                  </button>
                </div>
                <h3 className={styles.productTitle}>{product.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyLeft}>
              <h2 className={styles.whyTitle}>WHY CHOOSE JHAKKAS LAB?</h2>
              
              <ul className={styles.checklist}>
                <li>
                  <span className={styles.checkIcon}><FiCheck /></span>
                  100% Original & Creative Work
                </li>
                <li>
                  <span className={styles.checkIcon}><FiCheck /></span>
                  Premium Quality Materials
                </li>
                <li>
                  <span className={styles.checkIcon}><FiCheck /></span>
                  Affordable Prices
                </li>
                <li>
                  <span className={styles.checkIcon}><FiCheck /></span>
                  Fast Turnaround Time
                </li>
                <li>
                  <span className={styles.checkIcon}><FiCheck /></span>
                  Dedicated Customer Support
                </li>
              </ul>
              
              <div className={styles.peekingPandaWrapper}>
                <img 
                  src="/images/panda_peeking.png" 
                  alt="Peeking Panda Mascot" 
                  className={styles.peekingPandaImg}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/jhakku.png';
                  }}
                />
              </div>
            </div>
            
            <div className={styles.whyRight}>
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <span className={styles.statIcon}>🤝</span>
                  <strong className={styles.statNumber}>
                    <Counter end={500} />+
                  </strong>
                  <span className={styles.statLabel}>Happy Clients</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statIcon}>🚀</span>
                  <strong className={styles.statNumber}>
                    <Counter end={1500} />+
                  </strong>
                  <span className={styles.statLabel}>Projects Completed</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statIcon}>🛍️</span>
                  <strong className={styles.statNumber}>
                    <Counter end={50} />+
                  </strong>
                  <span className={styles.statLabel}>Products</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statIcon}>⭐</span>
                  <strong className={styles.statNumber}>
                    <Counter end={3} />+
                  </strong>
                  <span className={styles.statLabel}>Years of Creativity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PORTFOLIO SECTION */}
      <section className={styles.portfolioSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionHeaderLeft}>
              <span className={styles.categoryLabel}>OUR WORK SPEAKS</span>
              <h2 className={styles.sectionTitle}>FEATURED PORTFOLIO</h2>
            </div>
            <Link to="/portfolio" className={styles.viewAllBtn}>
              VIEW ALL WORK
            </Link>
          </div>

          <div className={styles.portfolioGrid}>
            {portfolioItems.map((item) => (
              <div key={item.id} className={styles.portfolioCard}>
                <div className={styles.portfolioImgWrapper}>
                  <img src={item.img} alt={item.title} className={styles.portfolioImg} />
                  <div className={styles.portfolioOverlay}>
                    <span>Explore Project</span>
                  </div>
                </div>
                <h3 className={styles.portfolioCardTitle}>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className={styles.reviewsSection}>
        <div className="container">
          <div className={styles.sectionHeader} style={{ justifyContent: 'center' }}>
            <div className={styles.sectionHeaderCenter}>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>CUSTOMER REVIEWS</h2>
            </div>
          </div>

          <div className={styles.reviewsWrapper}>
            <button onClick={handlePrevReview} className={`${styles.navArrowBtn} ${styles.reviewsArrowLeft}`} aria-label="Previous Review">
              <FiArrowLeft />
            </button>
            
            <div className={styles.reviewsCarouselContainer}>
              <AnimatePresence mode="wait">
                <motion.div 
                  key={reviews[currentReview].id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className={styles.reviewCard}
                >
                  <div className={styles.reviewCardLayout}>
                    <div className={styles.reviewAvatarWrapper}>
                      <img 
                        src={reviews[currentReview].avatar} 
                        alt={reviews[currentReview].name} 
                        className={styles.reviewAvatar} 
                      />
                    </div>
                    <div className={styles.reviewInfoContent}>
                      <div className={styles.stars}>
                        {[...Array(reviews[currentReview].rating)].map((_, i) => (
                          <FiStar key={i} className={styles.starIconFilled} />
                        ))}
                      </div>
                      <p className={styles.reviewText}>"{reviews[currentReview].text}"</p>
                      <div className={styles.reviewAuthor}>
                        <strong className={styles.authorName}>{reviews[currentReview].name}</strong>
                        <span className={styles.authorRole}>{reviews[currentReview].role}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button onClick={handleNextReview} className={`${styles.navArrowBtn} ${styles.reviewsArrowRight}`} aria-label="Next Review">
              <FiArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* 7. IDEA CTA BANNER */}
      <section className={styles.ctaBannerSection}>
        <div className="container">
          <div className={styles.ctaBanner}>
            <div className={styles.ctaLeft}>
              <img 
                src="/images/panda_peeking.png" 
                alt="Smiling Panda Face" 
                className={styles.ctaPandaImg}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/jhakku.png';
                }}
              />
              <div className={styles.ctaTexts}>
                <h3 className={styles.ctaTitle}>HAVE AN IDEA IN MIND?</h3>
                <p className={styles.ctaSub}>Let's turn your ideas into reality. We are here to help you create something awesome together!</p>
              </div>
            </div>
            
            <div className={styles.ctaActions}>
              <Link to="/custom-order" className={styles.ctaBtn}>
                START YOUR PROJECT <FiArrowRight />
              </Link>
              <div className={styles.ctaContacts}>
                <a href="https://wa.me/919827850842" target="_blank" rel="noopener noreferrer" className={styles.ctaContactLink}>
                  <span className={styles.whatsappIcon}>💬</span> Chat on WhatsApp
                </a>
                <a href="tel:9827850842" className={styles.ctaContactLink}>
                  <span className={styles.phoneIcon}>📞</span> 9827850842
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
