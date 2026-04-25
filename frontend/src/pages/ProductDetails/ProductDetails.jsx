import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import styles from './ProductDetails.module.css';

import { products as productsData } from '../../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const foundProduct = productsData.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.img);
      if (foundProduct.sizes.length > 0) {
        setSelectedSize(foundProduct.sizes[0]);
      }
      if (foundProduct.colors && foundProduct.colors.length > 0) {
        setSelectedColor(foundProduct.colors[0]);
      }
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, selectedSize);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }
  };

  if (!product) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.productPage}>
      <div className="container">
        
        <button className={styles.backBtn} onClick={() => navigate('/shop')}>
          &larr; Back to Shop
        </button>

        <div className={styles.productLayout}>
          {/* Left: Image Gallery */}
          <motion.div 
            className={styles.imageColumn}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.mainImageWrapper}>
              <img src={selectedImage} alt={product.title} className={styles.mainImage} />
            </div>
            {product.gallery && product.gallery.length > 1 && (
              <div className={styles.gallery}>
                {product.gallery.map((img, index) => (
                  <div 
                    key={index} 
                    className={`${styles.galleryThumb} ${selectedImage === img ? styles.activeThumb : ''}`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img} alt={`${product.title} view ${index + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right: Product Info */}
          <motion.div 
            className={styles.infoColumn}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.infoHead}>
              <span className={styles.category}>{product.category}</span>
              <div className={styles.rating}>
                <span className={styles.stars}>{product.rating} ★</span>
                <span className={styles.reviews}>{product.reviews} ratings</span>
              </div>
            </div>

            <h1 className={styles.title}>{product.title}</h1>
            
            <div className={styles.priceContainer}>
              <p className={styles.price}>₹{product.price}</p>
              {product.originalPrice && (
                <p className={styles.originalPrice}>₹{product.originalPrice}</p>
              )}
              {product.originalPrice && (
                <span className={styles.discount}>
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>
            
            <div className={styles.divider}></div>
            
            <p className={styles.description}>{product.desc}</p>

            {/* Color Selector */}
            {product.colors && (
              <div className={styles.variantSection}>
                <h3>Color</h3>
                <div className={styles.colorGrid}>
                  {product.colors.map(color => (
                    <button 
                      key={color}
                      className={`${styles.colorBtn} ${selectedColor === color ? styles.activeColor : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            <div className={styles.variantSection}>
              <h3>Size</h3>
              <div className={styles.sizeGrid}>
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    className={`${styles.sizeBtn} ${selectedSize === size ? styles.activeSize : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className={styles.actionSection}>
              <div className={styles.quantityPicker}>
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)}>+</button>
              </div>
              
              <button 
                className={`${styles.addToCartBtn} ${isAdded ? styles.added : ''}`}
                onClick={handleAddToCart}
              >
                {isAdded ? 'Added to Cart ✓' : 'Add to Cart'}
              </button>
            </div>

            {/* Shipping Info */}
            <div className={styles.shippingInfo}>
              <p>📦 <strong>Free shipping</strong> on orders over ₹2000</p>
              <p>🔄 <strong>14-day</strong> hassle-free returns</p>
              <p>🛡️ <strong>Secure checkout</strong> with 256-bit encryption</p>
            </div>

            {/* Stock Status */}
            <div className={styles.stockStatus}>
              <div className={styles.stockDot}></div>
              <span>Only 5 left in stock - order soon!</span>
            </div>
            
          </motion.div>
        </div>

        {/* Related Products */}
        <div className={styles.relatedSection}>
          <h2 className={styles.sectionTitle}>You Might Also Like</h2>
          <div className={styles.relatedGrid}>
            {productsData.filter(p => p.id !== product.id).slice(0, 3).map(p => (
              <div key={p.id} className={styles.relatedCard} onClick={() => navigate(`/product/${p.id}`)}>
                <img src={p.img} alt={p.title} />
                <h4>{p.title}</h4>
                <p>₹{p.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className={styles.reviewsSection}>
          <h2 className={styles.sectionTitle}>Customer Reviews</h2>
          <div className={styles.reviewsStats}>
            <div className={styles.statsMain}>
              <h3>{product.rating}</h3>
              <div className={styles.stars}>★★★★★</div>
              <p>Based on {product.reviews} ratings</p>
            </div>
          </div>
          <div className={styles.reviewList}>
            <div className={styles.reviewItem}>
              <div className={styles.reviewHead}>
                <strong>Amit S.</strong>
                <span className={styles.stars}>★★★★★</span>
              </div>
              <p>"Excellent quality! The print is very sharp and the material feels premium. Definitely worth the price."</p>
            </div>
            <div className={styles.reviewItem}>
              <div className={styles.reviewHead}>
                <strong>Priya P.</strong>
                <span className={styles.stars}>★★★★☆</span>
              </div>
              <p>"Love the design. Shipping was fast to Bhubaneswar. The fit is slightly large but looks great."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
