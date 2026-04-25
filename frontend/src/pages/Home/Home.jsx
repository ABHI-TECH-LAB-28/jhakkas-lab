import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Parallax elements for background
  const yBrush1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const yBrush2 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const yStar = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Flowing colors and position for the bottom gradient orb
  const orbY = useTransform(scrollYProgress, [0.5, 1], [200, -200]);
  const orbOpacity = useTransform(scrollYProgress, [0.5, 0.8, 1], [0, 0.8, 1]);
  const orbScale = useTransform(scrollYProgress, [0.5, 1], [0.5, 1.5]);

  return (
    <div className={styles.home} ref={containerRef}>
      
      {/* Animated Colorful Flow Orb */}
      <motion.div 
        className={styles.colorfulOrb}
        style={{
          y: orbY,
          opacity: orbOpacity,
          scale: orbScale
        }}
      />
      
      {/* --- BACKGROUND DECORATIONS --- */}
      <motion.div className={styles.bgBrush1} style={{ y: yBrush1 }}>
        <svg width="300" height="100" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 50 Q 50 10, 150 50 T 290 50" stroke="var(--color-yellow)" strokeWidth="15" strokeLinecap="round" opacity="0.1" />
          <path d="M20 60 Q 60 20, 160 60 T 280 40" stroke="var(--color-yellow)" strokeWidth="8" strokeLinecap="round" opacity="0.1" />
        </svg>
      </motion.div>

      <motion.div className={styles.bgBrush2} style={{ y: yBrush2 }}>
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 150 C 50 50, 150 50, 150 150" stroke="rgba(255,255,255,0.05)" strokeWidth="40" strokeLinecap="round" />
        </svg>
      </motion.div>

      <motion.div className={styles.bgStar} style={{ y: yStar }}>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0 L 60 40 L 100 50 L 60 60 L 50 100 L 40 60 L 0 50 L 40 40 Z" fill="var(--color-yellow)" opacity="0.05" />
        </svg>
      </motion.div>
      
      {/* --- HERO SECTION --- */}
      <section className={styles.hero}>
        <motion.div 
          className={styles.heroTextContainer}
          style={{ y: y1 }}
        >
          <h1 className={styles.heroTitle} data-text="WE BUILD CULTURE">
            WE BUILD<br/>
            <span className={styles.accentText}>CULTURE</span>
          </h1>
          
          <div className={styles.heroBottom}>
            <p className={styles.heroDescription}>
              We merge street-art aesthetics with premium digital design. Elevating brands through bold identities, immersive websites, and custom merchandise.
            </p>
            <div className={styles.heroCtas}>
              <Link to="/services" className={styles.btnPrimary}>OUR ARSENAL</Link>
              <Link to="/contact" className={styles.btnOutline}>START A PROJECT</Link>
            </div>
          </div>
        </motion.div>

        {/* Spinning Badge */}
        <motion.div 
          className={styles.spinningBadge}
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" width="150" height="150">
            <defs>
              <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text fontSize="11" fill="var(--color-yellow)" letterSpacing="2">
              <textPath href="#circle">
                BANEGA JHAKKAS CREATIVE AGENCY • 
              </textPath>
            </text>
          </svg>
        </motion.div>
      </section>

      {/* --- MARQUEE SECTION --- */}
      <section className={styles.marqueeSection}>
        <div className={styles.marqueeContainer}>
          <motion.div 
            className={styles.marqueeInner}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className={styles.marqueeContent}>
              <span>WEB DESIGN</span><span className={styles.star}>★</span>
              <span>BRANDING</span><span className={styles.star}>★</span>
              <span>CUSTOM APPAREL</span><span className={styles.star}>★</span>
              <span>STREET ART</span><span className={styles.star}>★</span>
              <span>WEB DESIGN</span><span className={styles.star}>★</span>
              <span>BRANDING</span><span className={styles.star}>★</span>
              <span>CUSTOM APPAREL</span><span className={styles.star}>★</span>
              <span>STREET ART</span><span className={styles.star}>★</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className={styles.servicesSection}>
        <div className={`container ${styles.servicesContainer}`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What We Do</h2>
            <p className={styles.sectionSubtitle}>From pixels to threads, we craft experiences that leave a mark.</p>
          </div>
          
          <div className={styles.bentoGrid}>
            {/* Spotlight Tile */}
            <motion.div 
              className={`${styles.bentoTile} ${styles.tileLarge}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className={styles.tileContent}>
                <span className={styles.tileNumber}>01</span>
                <h3>Digital Domination</h3>
                <p>We don't just build websites; we build digital fortresses. Immersive, lightning-fast, and designed to crush the competition.</p>
                <div className={styles.tileBadge}>PREMIUM</div>
              </div>
            </motion.div>

            {/* Branding Tile */}
            <motion.div 
              className={`${styles.bentoTile} ${styles.tileMedium}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className={styles.tileContent}>
                <span className={styles.tileNumber}>02</span>
                <h3>Visual Identity</h3>
                <p>Street-art grit meets corporate precision.</p>
              </div>
            </motion.div>

            {/* Merch Tile */}
            <motion.div 
              className={`${styles.bentoTile} ${styles.tileTall}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className={styles.tileContent}>
                <span className={styles.tileNumber}>03</span>
                <h3>Custom Merch</h3>
                <p>Wear the culture. We handle everything from design to high-quality print production for your brand.</p>
                <div className={styles.merchPreview}>
                  <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80" alt="T-Shirt" />
                </div>
              </div>
            </motion.div>

            {/* Art Tile */}
            <motion.div 
              className={`${styles.bentoTile} ${styles.tileSmall}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className={styles.tileContent}>
                <span className={styles.tileNumber}>04</span>
                <h3>Street Art</h3>
                <p>Murals and physical installations.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- RECENT WORK SHOWCASE (AGENCY PORTFOLIO) --- */}
      <section className={styles.portfolioSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Recent Drops & Deployments</h2>
            <p className={styles.sectionSubtitle}>A glimpse into our creative laboratory.</p>
          </div>
          
          <div className={styles.portfolioGrid}>
            {[
              { title: "Neon Nights Brand Identity", tag: "Branding", img: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=800&q=80" },
              { title: "Urban Streetwear E-Commerce", tag: "Web Design", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80" },
              { title: "Cyber Punk Festival", tag: "Posters & Merch", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" }
            ].map((work, idx) => (
              <motion.div 
                key={idx}
                className={styles.portfolioCard}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className={styles.portfolioImageWrapper}>
                  <img src={work.img} alt={work.title} className={styles.portfolioImage} />
                  <div className={styles.portfolioOverlay}>
                    <span>View Project</span>
                  </div>
                </div>
                <div className={styles.portfolioDetails}>
                  <h4>{work.title}</h4>
                  <span className={styles.portfolioTag}>{work.tag}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SHOP CATEGORIES (E-COMMERCE) --- */}
      <section className={styles.categoriesSection}>
        <div className={`container ${styles.categoriesContainer}`}>
          {[
            { title: "Apparel", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80" },
            { title: "Street Art", img: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&w=600&q=80" },
            { title: "Accessories", img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=600&q=80" }
          ].map((cat, idx) => (
            <motion.div 
              key={idx}
              className={styles.categoryCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <img src={cat.img} alt={cat.title} />
              <div className={styles.categoryOverlay}>
                <h3>{cat.title}</h3>
                <Link to={`/shop?category=${cat.title.toLowerCase()}`} className={styles.btnOutlineSmall}>Shop Now</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FEATURED PRODUCTS (E-COMMERCE) --- */}
      <section className={styles.productsSection}>
        <div className={`container ${styles.productsContainer}`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Drops</h2>
            <p className={styles.sectionSubtitle}>Exclusive merch and limited edition prints.</p>
          </div>
          
          <div className={styles.productsGrid}>
            {[
              { id: 1, title: "Classic Logo Tee", price: "₹999", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80" },
              { id: 2, title: "Street Art Hoodie", price: "₹1999", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80" },
              { id: 3, title: "Cyberpunk Poster", price: "₹499", img: "https://images.unsplash.com/photo-1583734551194-279326b014c2?auto=format&fit=crop&w=600&q=80" },
              { id: 4, title: "Custom Snapback", price: "₹799", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80" }
            ].map((prod, idx) => (
              <motion.div 
                key={idx}
                className={styles.productCard}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link to={`/product/${prod.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                  <div className={styles.productImageWrapper}>
                    <img src={prod.img} alt={prod.title} className={styles.productImage} />
                    <div className={styles.productOverlay}>
                      <span className={styles.btnAddToCart}>View Details</span>
                    </div>
                  </div>
                  <div className={styles.productDetails}>
                    <h4 className={styles.productName}>{prod.title}</h4>
                    <span className={styles.productPrice}>{prod.price}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className={styles.viewAllWrapper}>
            <Link to="/shop" className={styles.btnOutline}>View Full Shop</Link>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS (PROCESS) --- */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <p className={styles.sectionSubtitle}>From idea to reality in three simple steps.</p>
          </div>
          <div className={styles.processGrid}>
            {[
              { step: '01', title: 'Drop the Idea', desc: 'Tell us your vision. We take custom orders for digital design or physical merch.' },
              { step: '02', title: 'We Cook', desc: 'Our creative team gets to work, crafting premium, street-art inspired designs.' },
              { step: '03', title: 'Jhakkas Delivery', desc: 'We launch your site or ship your custom gear straight to your door.' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className={styles.processCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className={styles.stepNumber}>{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WORD ON THE STREET (TESTIMONIALS) --- */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Word on the Street</h2>
            <p className={styles.sectionSubtitle}>Don't just take our word for it.</p>
          </div>
          <div className={styles.testimonialsGrid}>
            {[
              { name: "Rahul S.", role: "Startup Founder", text: "Jhakkas Lab completely transformed our brand identity. The website they built is converting like crazy. Absolute legends." },
              { name: "Priya M.", role: "Streetwear Brand Owner", text: "Ordered a batch of custom tees for my pop-up shop. The print quality is insane and the designs are truly unique." },
              { name: "Vikram D.", role: "Creative Director", text: "They don't just design; they build culture. Best creative agency I've ever worked with." }
            ].map((review, i) => (
              <motion.div 
                key={i} 
                className={styles.testimonialCard}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.stars}>★★★★★</div>
                <p className={styles.reviewText}>"{review.text}"</p>
                <div className={styles.reviewerInfo}>
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className={styles.faqSection}>
        <div className={`container ${styles.faqContainer}`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Got Questions?</h2>
            <p className={styles.sectionSubtitle}>We've got answers.</p>
          </div>
          <div className={styles.faqList}>
            {[
              { q: "Do you ship internationally?", a: "Yes! We ship our custom merch and street-art apparel worldwide. Shipping costs are calculated at checkout." },
              { q: "How long do custom design projects take?", a: "It depends on the scope. A custom logo takes about 1 week, while a full website build can take 3-4 weeks." },
              { q: "Can I return physical products?", a: "Since most of our merch is custom-made or limited edition drops, we only accept returns if the item is defective." },
              { q: "What is your process for website design?", a: "We start with a discovery call, move into UI/UX wireframing, and once approved, we build it in React/Next.js." }
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER SECTION --- */}
      <section className={styles.newsletterSection}>
        <div className="container">
          <motion.div 
            className={styles.newsletterBox}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Stay in the Loop</h2>
            <p>Subscribe for exclusive drops, secret discounts, and creative inspiration. No spam, ever.</p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className={styles.btnPrimary}>Subscribe</button>
            </form>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.faqItem} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.faqQuestion}>
        <h3>{faq.q}</h3>
        <span className={isOpen ? styles.faqIconOpen : styles.faqIcon}>+</span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={styles.faqAnswerWrapper}
          >
            <p className={styles.faqAnswer}>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
