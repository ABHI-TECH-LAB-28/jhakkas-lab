import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiStar, FiFilter, FiChevronRight, FiShoppingBag, FiTruck, FiShield, FiPercent, FiGift, FiRefreshCw, FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { products, waLink } from '../../data/products';
import { useCart } from '../../context/CartContext';
import styles from './Shop.module.css';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Popular' },
  { value: 'price-low', label: 'Price: Low → High' },
  { value: 'price-high', label: 'Price: High → Low' },
  { value: 'rating', label: 'Top Rated' }
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSubcat, setSelectedSubcat] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  
  const { addToCart } = useCart();

  // Categories sidebar configuration with dynamic counts
  const sidebarCategories = useMemo(() => [
    { id: 'all', label: 'All Products', count: products.length },
    { id: 'apparel', label: 'Apparel & Merch', count: products.filter(p => p.category === 'apparel' || p.category === 'printing').length },
    { id: 'gifts', label: 'Personalized Gifts', count: products.filter(p => p.category === 'gifts').length },
    { id: 'stickers', label: 'Stickers & Prints', count: products.filter(p => p.category === 'stickers').length },
    { id: 'art', label: 'Art Products', count: products.filter(p => p.category === 'art').length },
    { id: 'decor', label: 'Home Decor', count: products.filter(p => p.category === 'decor').length },
    { id: 'handicraft', label: 'Accessories', count: products.filter(p => p.category === 'handicraft').length },
    { id: 'custom', label: 'Custom Orders', count: products.filter(p => p.category === 'branding' || p.category === 'website' || p.category === 'events').length }
  ], []);

  // Visual subcategory pills at the top
  const subcatPills = [
    { id: 'tshirt', label: 'T-Shirts', emoji: '👕' },
    { id: 'hoodie', label: 'Hoodies', emoji: '🧥' },
    { id: 'mug', label: 'Mugs', emoji: '🍺' },
    { id: 'sticker', label: 'Stickers', emoji: '📦' },
    { id: 'keychain', label: 'Keychains', emoji: '🔑' },
    { id: 'poster', label: 'Posters', emoji: '🖼️' },
    { id: 'cap', label: 'Caps', emoji: '🧢' },
    { id: 'tote', label: 'Tote Bags', emoji: '👜' }
  ];

  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Sidebar Category Filter
    if (activeCategory !== 'all') {
      if (activeCategory === 'apparel') {
        list = list.filter(p => p.category === 'apparel' || p.category === 'printing');
      } else if (activeCategory === 'custom') {
        list = list.filter(p => p.category === 'branding' || p.category === 'website' || p.category === 'events');
      } else {
        list = list.filter(p => p.category === activeCategory);
      }
    }

    // Subcategory visual pills filter
    if (selectedSubcat) {
      list = list.filter(p => {
        const title = p.title.toLowerCase();
        switch (selectedSubcat) {
          case 'tshirt': return title.includes('t-shirt') || title.includes('tee');
          case 'hoodie': return title.includes('hoodie');
          case 'mug': return title.includes('mug');
          case 'sticker': return title.includes('sticker');
          case 'keychain': return title.includes('keychain');
          case 'poster': return title.includes('poster');
          case 'cap': return title.includes('cap');
          case 'tote': return title.includes('tote');
          default: return true;
        }
      });
    }

    // Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.subcat?.toLowerCase().includes(q) ||
        p.desc?.toLowerCase().includes(q)
      );
    }

    // Sorting
    switch (sortBy) {
      case 'price-low': return list.sort((a, b) => a.price - b.price);
      case 'price-high': return list.sort((a, b) => b.price - a.price);
      case 'rating': return list.sort((a, b) => b.rating - a.rating);
      default: return list.sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0));
    }
  }, [activeCategory, selectedSubcat, searchQuery, sortBy]);

  const handleSubcatClick = (id) => {
    setSelectedSubcat(prev => prev === id ? null : id);
  };

  return (
    <div className={styles.shopPage}>
      
      {/* ── SHOP HEADER SECTION ── */}
      <section className={styles.shopHero}>
        <div className={`container ${styles.headerGrid}`}>
          <div className={styles.headerLeft}>
            <h1 className={styles.mainTitle}>OUR PRODUCTS</h1>
            <span className={styles.brushTagline}>Creative products, custom made just for you! 🔥</span>
          </div>
          
          <div className={styles.headerRight}>
            <div className={styles.mascotSplatterFrame}>
              <div className={styles.yellowSplatterBg} />
              
              {/* Values strip */}
              <div className={styles.headerValuesStack}>
                <div className={styles.headerValueItem}>
                  <span className={styles.valueIcon}><FiShield /></span>
                  <span className={styles.valueText}>Premium Quality</span>
                </div>
                <div className={styles.headerValueItem}>
                  <span className={styles.valueIcon}><FiStar /></span>
                  <span className={styles.valueText}>Custom Made</span>
                </div>
                <div className={styles.headerValueItem}>
                  <span className={styles.valueIcon}><FiPercent /></span>
                  <span className={styles.valueText}>Affordable Prices</span>
                </div>
                <div className={styles.headerValueItem}>
                  <span className={styles.valueIcon}><FiTruck /></span>
                  <span className={styles.valueText}>Fast Delivery</span>
                </div>
              </div>
              
              <img 
                src="/images/jhakku_hero.png" 
                alt="Jhakku Mascot Pointing" 
                className={styles.pointingMascotImg}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/jhakku.png';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTROLS / SEARCH & FILTER BAR ── */}
      <div className={styles.controlsBar}>
        <div className="container">
          <div className={styles.controlsInner}>
            <div className={styles.searchWrap}>
              <FiSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className={styles.searchInput}
                id="shop-search"
              />
            </div>
            
            <div className={styles.sortWrap}>
              <span className={styles.sortLabel}>Sort By:</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className={styles.sortSelect}
                id="shop-sort"
              >
                {SORT_OPTIONS.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN SHOP LAYOUT (SIDEBAR + CONTENT GRID) ── */}
      <section className={styles.mainLayoutSection}>
        <div className={`container ${styles.layoutGrid}`}>
          
          {/* LEFT COLUMN: SIDEBAR */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
              <FiFilter size={14} />
              <span>CATEGORIES</span>
            </div>
            
            <div className={styles.categoriesList}>
              {sidebarCategories.map(cat => (
                <button
                  key={cat.id}
                  className={`${styles.categoryBtn} ${activeCategory === cat.id ? styles.activeCategoryBtn : ''}`}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSelectedSubcat(null); // Reset subcat when category changes
                  }}
                >
                  <span className={styles.catLabel}>{cat.label}</span>
                  <span className={styles.catCount}>{cat.count}</span>
                </button>
              ))}
            </div>

            {/* PLACE CUSTOM ORDER CTA BANNER */}
            <div className={styles.customOrderBanner}>
              <div className={styles.customOrderBannerContent}>
                <div className={styles.customMascotPeeking}>
                  <img 
                    src="/images/panda_peeking.png" 
                    alt="Panda Peeking" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/jhakku.png';
                    }}
                  />
                </div>
                <h3>Custom Order?</h3>
                <p>We make it just for you!</p>
                <Link to="/custom-order" className={styles.customOrderBtn}>
                  PLACE CUSTOM ORDER <span className={styles.arrowIcon}>→</span>
                </Link>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: MAIN CONTENT AREA */}
          <main className={styles.contentArea}>
            
            {/* SUB-CATEGORY VISUAL PILLS */}
            <div className={styles.pillsWrapper}>
              <div className={styles.pillsInner}>
                {subcatPills.map(pill => (
                  <button
                    key={pill.id}
                    className={`${styles.subcatPill} ${selectedSubcat === pill.id ? styles.subcatPillActive : ''}`}
                    onClick={() => handleSubcatClick(pill.id)}
                  >
                    <span className={styles.pillEmoji}>{pill.emoji}</span>
                    <span className={styles.pillLabel}>{pill.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.resultsRow}>
              <h2 className={styles.trendingHeading}>Trending Products</h2>
              <span className={styles.resultsCount}>
                {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>

            <AnimatePresence mode="popLayout">
              {filteredProducts.length === 0 ? (
                <motion.div
                  key="empty"
                  className={styles.emptyState}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <span>😔</span>
                  <p>No products found in this category. Try a different search or filter.</p>
                </motion.div>
              ) : (
                <motion.div key="grid" className={styles.productGrid} layout>
                  {filteredProducts.map((product, idx) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      idx={idx} 
                      addToCart={addToCart} 
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </main>

        </div>
      </section>

      {/* ── VALUES FOOTER BANNER ── */}
      <footer className={styles.valuesFooter}>
        <div className="container">
          <div className={styles.valuesFooterGrid}>
            <div className={styles.valueFooterItem}>
              <span className={styles.valueFooterIcon}><FiShield /></span>
              <div className={styles.valueFooterText}>
                <h4>100% Premium Quality</h4>
                <p>Guaranteed</p>
              </div>
            </div>
            
            <div className={styles.valueFooterItem}>
              <span className={styles.valueFooterIcon}><FiStar /></span>
              <div className={styles.valueFooterText}>
                <h4>Custom Made</h4>
                <p>For You</p>
              </div>
            </div>

            <div className={styles.valueFooterItem}>
              <span className={styles.valueFooterIcon}><FiCheck /></span>
              <div className={styles.valueFooterText}>
                <h4>Secure Payment</h4>
                <p>100% Safe</p>
              </div>
            </div>

            <div className={styles.valueFooterItem}>
              <span className={styles.valueFooterIcon}><FiRefreshCw /></span>
              <div className={styles.valueFooterText}>
                <h4>Easy Returns</h4>
                <p>Hassle Free</p>
              </div>
            </div>

            <div className={styles.valueFooterItem}>
              <span className={styles.valueFooterIcon}><FiTruck /></span>
              <div className={styles.valueFooterText}>
                <h4>Fast Delivery</h4>
                <p>Across Odisha</p>
              </div>
            </div>

            <div className={styles.valueFooterItem}>
              <span className={styles.valueFooterIcon}><FiGift /></span>
              <div className={styles.valueFooterText}>
                <h4>24/7 Customer</h4>
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

const ProductCard = ({ product, idx, addToCart }) => {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes?.[0] || 'Standard', 1);
  };

  return (
    <motion.div
      layout
      className={styles.productCard}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: Math.min(idx * 0.03, 0.3) }}
      id={`product-card-${product.id}`}
    >
      {/* Image Wrap */}
      <Link to={`/product/${product.id}`} className={styles.cardImgWrap}>
        <img src={product.img} alt={product.title} className={styles.cardImg} loading="lazy" />

        {product.badge && (
          <span className={styles.badgeLabel} style={{
            backgroundColor: 
              product.badge === 'BEST SELLER' ? '#FDBD00' :
              product.badge === 'NEW' ? '#4caf50' :
              product.badge === 'POPULAR' ? '#2196f3' :
              product.badge === 'TRENDING' ? '#e91e63' :
              product.badge === 'HOT' ? '#ff5722' : '#9c27b0'
          }}>{product.badge}</span>
        )}

        <div className={styles.imgOverlay}>
          <span>View Details <FiChevronRight size={14} /></span>
        </div>
      </Link>

      {/* Info Body */}
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{product.title}</h3>
        
        {/* Rating */}
        <div className={styles.ratingRow}>
          <FiStar className={styles.starIcon} />
          <span className={styles.ratingVal}>{product.rating}</span>
          <span className={styles.ratingCount}>({product.reviews})</span>
        </div>

        {/* Price and Cart Action */}
        <div className={styles.priceAndCartRow}>
          <div className={styles.priceBlock}>
            <span className={styles.price}>₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className={styles.originalPrice}>₹{product.originalPrice.toLocaleString('en-IN')}</span>
            )}
          </div>
          
          <button 
            onClick={handleCartClick} 
            className={styles.addToCartBtn}
            title="Add to Cart"
          >
            <FiShoppingBag size={15} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Shop;

