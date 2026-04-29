import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', service: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <h1 className={styles.title}>
            LET'S <span className="text-outline">TALK</span>
          </h1>
          <p className={styles.subtitle}>
            Ready to build something <span className="brush-text" style={{ fontSize: '1.5rem', margin: '0 5px' }}>Jhakkas</span> together? 
            Reach out to us and let's start the conversation.
          </p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Information */}
          <div className={styles.infoContainer}>
            <motion.a 
              href="mailto:jhakkaslab@gmail.com" 
              className={styles.infoCard}
              variants={itemVariants}
            >
              <div className={styles.iconWrapper}>
                <FaEnvelope />
              </div>
              <div className={styles.infoContent}>
                <h3>Email Us</h3>
                <p>jhakkaslab@gmail.com</p>
              </div>
            </motion.a>

            <motion.a 
              href="https://wa.me/917852932353" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoCard}
              variants={itemVariants}
            >
              <div className={styles.iconWrapper}>
                <FaWhatsapp />
              </div>
              <div className={styles.infoContent}>
                <h3>WhatsApp Integration</h3>
                <p>Instant Support & Inquiries</p>
              </div>
            </motion.a>

            <motion.div 
              className={styles.infoCard}
              variants={itemVariants}
            >
              <div className={styles.iconWrapper}>
                <FaMapMarkerAlt />
              </div>
              <div className={styles.infoContent}>
                <h3>Visit Us</h3>
                <p>Bhubaneswar, Odisha<br/>India</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            className={styles.formContainer}
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input 
                  type="text" 
                  name="name"
                  id="name"
                  className={styles.input} 
                  placeholder=" " 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
                <label htmlFor="name" className={styles.label}>Your Name</label>
              </div>

              <div className={styles.formGroup}>
                <input 
                  type="email" 
                  name="email"
                  id="email"
                  className={styles.input} 
                  placeholder=" " 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                <label htmlFor="email" className={styles.label}>Your Email</label>
              </div>

              <div className={styles.formGroup}>
                <input 
                  type="text" 
                  name="service"
                  id="service"
                  className={styles.input} 
                  placeholder=" " 
                  value={formData.service}
                  onChange={handleChange}
                />
                <label htmlFor="service" className={styles.label}>Service of Interest (Optional)</label>
              </div>

              <div className={styles.formGroup}>
                <textarea 
                  name="message"
                  id="message"
                  className={styles.textarea} 
                  placeholder=" " 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                ></textarea>
                <label htmlFor="message" className={styles.label}>Tell us about your project</label>
              </div>

              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : (
                  <>
                    Send Message <FaPaperPlane style={{ fontSize: '0.9rem' }} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
