import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            BORN TO BE<br />
            <span>JHAKKAS.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}
          >
            We are a creative agency from the heart of Odisha, blending street art culture with high-end digital design.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyGrid}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={styles.storyImage}
            >
              <img src="https://images.unsplash.com/photo-1541462608141-ad614a77585a?auto=format&fit=crop&w=800&q=80" alt="Jhakkas Lab Studio" />
            </motion.div>
            <div className={styles.storyContent}>
              <h2 className="text-outline">OUR ORIGIN</h2>
              <p>
                Jhakkas Lab started in a small room in Bhubaneswar with a single spray can and a laptop. 
                Our mission was simple: to bring the grit and energy of the streets into the professional design world.
              </p>
              <p>
                Today, we are Odisha's leading creative hub for those who dare to be different. 
                From massive city murals to sleek e-commerce empires, we build things that can't be ignored.
              </p>
              
              <div className={styles.valuesGrid}>
                <div className={styles.valueCard}>
                  <h3>BOLD</h3>
                  <p>We don't do boring. If it's not "Jhakkas", it's not us.</p>
                </div>
                <div className={styles.valueCard}>
                  <h3>LOCAL</h3>
                  <p>Proudly Odia. We build for our community first.</p>
                </div>
                <div className={styles.valueCard}>
                  <h3>REAL</h3>
                  <p>No corporate jargon. Just raw talent and hard work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Odisha Pride Section */}
      <section className={styles.odishaPride}>
        <div className="container">
          <span>MADE IN ODISHA</span>
          <h2>AMARA PRIDE. AMARA ART.</h2>
          <div className={styles.statsSection}>
            <div className={styles.statItem}>
              <h4>50+</h4>
              <p>PROJECTS COMPLETED</p>
            </div>
            <div className={styles.statItem}>
              <h4>12</h4>
              <p>CITY MURALS</p>
            </div>
            <div className={styles.statItem}>
              <h4>100%</h4>
              <p>JHAKKAS VIBES</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
        <h2 style={{ marginBottom: '2rem' }}>READY TO JOIN THE REVOLUTION?</h2>
        <button 
          style={{ 
            backgroundColor: 'var(--color-yellow)', 
            color: '#000', 
            padding: '1.2rem 4rem', 
            borderRadius: '50px', 
            fontWeight: '950',
            border: 'none',
            fontSize: '1.1rem',
            cursor: 'pointer'
          }}
          onClick={() => window.location.href = '/contact'}
        >
          WORK WITH US
        </button>
      </section>
    </div>
  );
};

export default About;
