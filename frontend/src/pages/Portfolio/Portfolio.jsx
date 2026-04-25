import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Portfolio.module.css';

const portfolioData = [
  {
    id: 1,
    title: "The Urban Tiger Mural",
    client: "Bhubaneswar Smart City",
    category: "mural",
    size: "big",
    impact: "1M+ Views",
    desc: "A massive 50ft mural celebrating Odisha's wildlife at a major city junction.",
    img: "https://images.unsplash.com/photo-1541462608141-ad614a77585a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Odyssey E-comm Web",
    client: "Global Art Store",
    category: "web",
    size: "wide",
    impact: "200% Sales Inc.",
    desc: "A high-conversion digital storefront with a custom street-art aesthetic.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Bhubaneswar Beats Logo",
    client: "Music Festival",
    category: "branding",
    size: "tall",
    impact: "Brand Identity",
    desc: "Vibrant branding for Odisha's biggest indie music festival.",
    img: "https://images.unsplash.com/photo-1583734551194-279326b014c2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Custom Guitar: Neon Soul",
    client: "Private Collector",
    category: "illustration",
    size: "standard",
    impact: "One-of-a-kind",
    desc: "Hand-painted electric guitar with UV-reactive paint for stage performance.",
    img: "https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Neon Streets Mural",
    client: "Tech Hub Cuttack",
    category: "mural",
    size: "wide",
    impact: "Office Revamp",
    desc: "Cyberpunk-inspired interior mural for a modern software office.",
    img: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=800&q=80"
  }
];

const processSteps = [
  { step: "01", title: "IDEATION", desc: "We sit down (over Chai) to understand your vision and local market needs." },
  { step: "02", title: "DESIGN", desc: "Our artists create high-fidelity sketches and digital prototypes for your review." },
  { step: "03", title: "EXECUTION", desc: "The magic happens. Whether it's code or paint, we build with precision." },
  { step: "04", title: "DELIVERY", desc: "We hand over the masterpiece and ensure it's performing perfectly." }
];

const categories = ["all", "mural", "web", "branding", "illustration"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = activeFilter === "all" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeFilter);

  return (
    <div className={styles.portfolioPage}>
      <header className={styles.header}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            OUR<br />
            <span style={{ color: 'var(--color-yellow)' }}>LEGACY</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            From the streets of Odisha to digital screens worldwide. 
            A collection of bold visions and "Jhakkas" executions.
          </motion.p>
        </div>
      </header>

      <section className="container">
        <div className={styles.filters}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.activeBtn : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className={styles.portfolioGrid}>
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`${styles.portfolioItem} ${styles[item.size]}`}
              >
                <img src={item.img} alt={item.title} />
                <div className={styles.overlay}>
                  <div className={styles.overlayTop}>
                    <span>{item.category.toUpperCase()}</span>
                    <span className={styles.impactBadge}>{item.impact}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className={styles.clientName}>Client: {item.client}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Work Process Section */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.processHeader}>
            <span>HOW WE WORK</span>
            <h2>THE JHAKKAS METHOD</h2>
          </div>
          <div className={styles.processGrid}>
            {processSteps.map((s, i) => (
              <div key={i} className={styles.processCard}>
                <div className={styles.stepNum}>{s.step}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Pride CTA */}
      <section className="container" style={{ marginTop: '100px' }}>
        <div style={{ 
          backgroundColor: '#0a0a0a', 
          padding: '4rem', 
          borderRadius: '40px', 
          textAlign: 'center',
          border: '1px solid rgba(255, 214, 0, 0.2)'
        }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>BORN IN ODISHA, BUILT FOR BOLDNESS</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem' }}>We've painted the walls of Bhubaneswar and built the stores of tomorrow. Ready to join the legacy?</p>
          <button className={styles.filterBtn} style={{ padding: '1rem 3rem' }} onClick={() => window.location.href = '/custom-order'}>START YOUR PROJECT</button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
