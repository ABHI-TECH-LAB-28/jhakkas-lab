import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Shop.module.css';

import { products } from '../../data/products';

const categories = ["all", "website", "logo", "guitar", "instrument", "drawing"];

const Shop = () => {
  const [dbProducts, setDbProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setDbProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setDbProducts(products);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = dbProducts
    .filter(p => activeCategory === "all" || p.category === activeCategory)
    .filter(p => (p.title || p.name || '').toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // Default featured
    });

  return (
    <div className={styles.shopPage}>
      <header className={styles.shopHeader}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.spotlightCard}
          >
            <div className={styles.spotlightContent}>
              <span className={styles.spotlightBadge}>MOST WANTED 🔥</span>
              <h1>CUSTOM GUITAR MURAL</h1>
              <p>Turn your instrument into a legendary piece of street art. Limited slots available for this month.</p>
              <div className={styles.spotlightPrice}>
                <span className={styles.newPrice}>₹4,499</span>
                <span className={styles.oldPriceSpot}>₹9,999</span>
              </div>
              <Link to="/product/14" className={styles.spotlightBtn}>COP THE DROP</Link>
            </div>
            <div className={styles.spotlightImage}>
              <img src="https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=800&q=80" alt="Featured Guitar" />
              <div className={styles.glowEffect}></div>
            </div>
          </motion.div>
        </div>
      </header>

      <section className={styles.shopContent}>
        <div className="container">
          <div className={styles.shopControls}>
            <div className={styles.filters}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className={styles.searchAndSort}>
              <input 
                type="text" 
                placeholder="Search..." 
                className={styles.shopSearch} 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <select 
                className={styles.sortSelect}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          <motion.div layout className={styles.productGrid}>
            <AnimatePresence>
              {activeCategory === "all" ? (
                categories.filter(c => c !== "all").map(cat => (
                  <div key={cat} className={styles.categorySection}>
                    <h2 className={styles.categoryTitle}>{cat.toUpperCase()} SERVICE</h2>
                    <div className={styles.sectionGrid}>
                      {filteredProducts.filter(p => p.category === cat).map(product => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className={styles.sectionGrid}>
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const ProductCard = ({ product }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
    className={styles.productCard}
  >
    <Link to={`/product/${product._id || product.id}`} className={styles.productLink}>
      <div className={styles.productImageWrapper}>
        <img src={product.img || product.image} alt={product.title || product.name} />
        <div className={styles.categoryBadge}>{product.category}</div>
        {product.originalPrice && (
          <div className={styles.discountBadge}>
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </div>
        )}
        <div className={styles.overlay}>View Drop</div>
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productHeader}>
          <h3>{product.title || product.name}</h3>
          <div className={styles.rating}>
            <span className={styles.star}>★</span>
            <span>{product.rating}</span>
          </div>
        </div>
        <div className={styles.priceRow}>
          <span className={styles.price}>₹{product.price}</span>
          {product.originalPrice && (
            <span className={styles.oldPrice}>₹{product.originalPrice}</span>
          )}
        </div>
      </div>
    </Link>
  </motion.div>
);

export default Shop;
