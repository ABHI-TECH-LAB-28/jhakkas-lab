import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Services.module.css';

const testimonials = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Startup Founder",
    text: "Jhakkas Lab completely transformed our brand. The street-art edge they gave our logo is exactly what we needed to stand out in a boring market.",
    avatar: "https://i.pravatar.cc/150?u=arjun"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Artist",
    text: "The quality of the custom hoodies is insane. The print hasn't faded after months of washes. These guys know their craft.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 3,
    name: "Rahul Khanna",
    role: "E-comm Owner",
    text: "Professional, fast, and incredibly creative. The website they built for us increased our conversion by 40%. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?u=rahul"
  }
];

const faqs = [
  {
    question: "What is the timeline for a custom logo design?",
    answer: "Typically, a full brand identity project takes 2-3 weeks. This includes discovery, initial sketches, and two rounds of revisions."
  },
  {
    question: "Do you ship your merch internationally?",
    answer: "Yes! We ship our custom apparel and prints worldwide. Shipping times vary by location but usually take 7-14 business days."
  },
  {
    question: "Can I request a custom size for a mural or painting?",
    answer: "Absolutely. We specialize in custom dimensions for both physical murals and digital art. Contact us for a specific quote."
  }
];

const services = [
  {
    id: 'digital',
    icon: 'DIG',
    title: 'Digital Domination',
    desc: 'High-end websites and immersive digital experiences that capture the street-art soul.',
    features: ['Custom Web Design', 'E-commerce Solutions', 'Performance Tuning', 'SEO Strategy']
  },
  {
    id: 'merch',
    icon: 'MER',
    title: 'Custom Merch',
    desc: 'We turn your brand into wearable culture. From design to high-quality production.',
    features: ['Streetwear Design', 'Screen Printing', 'Embroidery', 'Direct to Garment']
  },
  {
    id: 'branding',
    icon: 'BRA',
    title: 'Brand Identity',
    desc: 'Bold, gritty, and unforgettable logos and brand systems that make a mark.',
    features: ['Logo Design', 'Typography', 'Color Systems', 'Brand Guidelines']
  },
  {
    id: 'art',
    icon: 'ART',
    title: 'Street Art',
    desc: 'Physical murals and digital art installations for offices, events, and galleries.',
    features: ['Graffiti Murals', 'Digital Art', 'Motion Graphics', 'Event Visuals']
  }
];

const Services = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className={styles.servicesPage}>
      {/* Header */}
      <header className={styles.header}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.localBadge}
          >
            ଆମ ଓଡ଼ିଶା ★ JHAKKAS LAB ★ PURE SWAG
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            OUR<br />
            <span style={{ color: 'var(--color-yellow)' }}>ARSENAL</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Mixing Odia Soul with Global Street-Art Aesthetics. 
            Elevating Odisha's top brands through bold identities, immersive websites, and custom merchandise.
          </motion.p>
        </div>
      </header>

      {/* Services Grid */}
      <section className="container">
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul className={styles.featureList}>
                {service.features.map(f => <li key={f}>{f}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className={styles.processSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>OUR PROCESS</h2>
          <div className={styles.processGrid}>
            <div className={styles.processItem}>
              <div className={styles.stepNumber}>01</div>
              <h4>Discovery</h4>
              <p>We deep dive into your brand culture and goals.</p>
            </div>
            <div className={styles.processItem}>
              <div className={styles.stepNumber}>02</div>
              <h4>Design</h4>
              <p>Gritty street-art soul meets precision design.</p>
            </div>
            <div className={styles.processItem}>
              <div className={styles.stepNumber}>03</div>
              <h4>Develop</h4>
              <p>We build your vision with cutting-edge tech.</p>
            </div>
            <div className={styles.processItem}>
              <div className={styles.stepNumber}>04</div>
              <h4>Deploy</h4>
              <p>Launch your brand into the digital stratosphere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Gallery */}
      <section className={styles.gallerySection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>WORK SAMPLES</h2>
          <div className={styles.workGrid}>
            <div className={styles.workCard}>
              <img src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=600&q=80" alt="Apparel" />
              <div className={styles.workOverlay}>
                <span>APPAREL</span>
                <h4>Premium T-Shirt Print</h4>
              </div>
            </div>
            <div className={styles.workCard}>
              <img src="https://images.unsplash.com/photo-1541462608141-ad614a77585a?auto=format&fit=crop&w=600&q=80" alt="Web Design" />
              <div className={styles.workOverlay}>
                <span>DIGITAL</span>
                <h4>Creative Web Agency UI</h4>
              </div>
            </div>
            <div className={styles.workCard}>
              <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80" alt="Painting" />
              <div className={styles.workOverlay}>
                <span>ART</span>
                <h4>Instrumental Abstract Painting</h4>
              </div>
            </div>
            <div className={styles.workCard}>
              <img src="https://images.unsplash.com/photo-1572375927501-44737fa11c34?auto=format&fit=crop&w=600&q=80" alt="Stickers" />
              <div className={styles.workOverlay}>
                <span>MERCH</span>
                <h4>Die-Cut Sticker Pack</h4>
              </div>
            </div>
            <div className={styles.workCard}>
              <img src="https://images.unsplash.com/photo-1544273677-c433136021d4?auto=format&fit=crop&w=600&q=80" alt="Drawing" />
              <div className={styles.workOverlay}>
                <span>SKETCH</span>
                <h4>Hyper-Realistic Pencil Drawing</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Ticker */}
      <div className={styles.tickerContainer}>
        <div className={styles.ticker}>
          <span>J H A K K A S ★ L A B </span>
          <span>B U I L D I N G ★ C U L T U R E </span>
          <span>S T R E E T ★ A R T </span>
          <span>D I G I T A L ★ D O M I N A T I O N </span>
          <span>J H A K K A S ★ L A B </span>
          <span>B U I L D I N G ★ C U L T U R E </span>
        </div>
      </div>

      {/* Testimonials */}
      <section className={styles.testimonialSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>THE WORD ON THE STREET</h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map((t) => (
              <motion.div 
                key={t.id}
                className={styles.testimonialCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className={styles.quoteIcon}>“</div>
                <p className={styles.testimonialText}>{t.text}</p>
                <div className={styles.testimonialUser}>
                  <img src={t.avatar} alt={t.name} />
                  <div>
                    <h5>{t.name}</h5>
                    <span>{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>FREQUENTLY ASKED</h2>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button 
                  className={styles.faqQuestion}
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  {faq.question}
                  <span className={styles.faqIcon}>{activeFaq === index ? '-' : '+'}</span>
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div 
                      className={styles.faqAnswer}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proudly Odisha */}
      <section className={styles.odishaSection}>
        <div className="container">
          <div className={styles.odishaContent}>
            <div className={styles.odishaText}>
              <span className={styles.tag}>P R O U D L Y ★ O D I S H A</span>
              <h2>BEYOND BOUNDARIES, ROOTED IN ODISHA</h2>
              <p>From the streets of <strong>Bhubaneswar</strong> to the shrines of <strong>Puri</strong>, we are on a mission to paint Odisha with a new digital vibe.</p>
              <div className={styles.cityGrid}>
                <span>Bhubaneswar</span>
                <span>Cuttack</span>
                <span>Puri</span>
                <span>Berhampur</span>
                <span>Rourkela</span>
                <span>Sambalpur</span>
              </div>
            </div>
            <div className={styles.odishaGraphic}>
              <div className={styles.mapCircle}>
                <span className={styles.mapText}>JHAKKAS ODISHA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricingSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>SERVICE PACKAGES</h2>
          <div className={styles.pricingGrid}>
            <div className={styles.priceCard}>
              <h3>STARTER</h3>
              <div className={styles.priceAmount}>₹4,999<span>/project</span></div>
              <ul className={styles.priceFeatures}>
                <li>1 Concept Design</li>
                <li>3 Revisions</li>
                <li>Digital Files (PNG/JPG)</li>
                <li>48hr Delivery</li>
              </ul>
              <Link to="/contact" className={styles.priceBtn}>Get Started</Link>
            </div>
            <div className={`${styles.priceCard} ${styles.featuredPrice}`}>
              <div className={styles.popularBadge}>MOST POPULAR</div>
              <h3>PRO BUNDLE</h3>
              <div className={styles.priceAmount}>₹14,999<span>/project</span></div>
              <ul className={styles.priceFeatures}>
                <li>3 Concept Designs</li>
                <li>Unlimited Revisions</li>
                <li>Source Files (AI/PSD)</li>
                <li>Brand Guidelines</li>
                <li>Social Media Kit</li>
              </ul>
              <Link to="/contact" className={styles.priceBtn}>Go Pro</Link>
            </div>
            <div className={styles.priceCard}>
              <h3>ELITE LAB</h3>
              <div className={styles.priceAmount}>₹49,999<span>/project</span></div>
              <ul className={styles.priceFeatures}>
                <li>Full Brand Strategy</li>
                <li>Website + E-commerce</li>
                <li>Custom Merch Designs</li>
                <li>Monthly Consulting</li>
                <li>VIP Support</li>
              </ul>
              <Link to="/contact" className={styles.priceBtn}>Inquire Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletterSection}>
        <div className="container">
          <div className={styles.newsletterBox}>
            <div className={styles.newsletterContent}>
              <h2>JOIN THE INNER CIRCLE</h2>
              <p>Get notified about secret drops, limited edition art, and exclusive agency insights.</p>
            </div>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">JOIN THE LAB</button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container">
        <div className={styles.ctaSection}>
          <h2>READY TO START?</h2>
          <p style={{ marginBottom: '2.5rem', opacity: 0.7 }}>Let's build something unforgettable together.</p>
          <Link to="/contact" className={styles.primaryBtn}>Launch Project</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
