import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CustomOrder.module.css';

const CustomOrder = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    vibe: '',
    description: '',
    budget: '',
    timeline: 'Standard (10-15 days)',
    name: '',
    email: '',
    whatsapp: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.customOrderPage}>
        <div className="container">
          <div className={styles.formContainer}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={styles.success}
            >
              <span className={styles.successIcon}>🎉</span>
              <h1>ORDER RECEIVED!</h1>
              <p>Our lead artist will contact you via WhatsApp within 24 hours to discuss your project.</p>
              <button className={styles.nextBtn} style={{ marginTop: '2rem' }} onClick={() => window.location.href = '/'}>Back to Home</button>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.customOrderPage}>
      <div className="container">
        <header className={styles.header}>
          <h1>START A PROJECT</h1>
          <p>Tell us your vision, and we'll bring the "Jhakkas" touch to it.</p>
        </header>

        <div className={styles.formContainer}>
          {/* Step Indicator */}
          <div className={styles.stepIndicator}>
            {[1, 2, 3, 4].map(s => (
              <div key={s} className={`${styles.stepDot} ${step >= s ? styles.activeDot : ''}`} />
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className={styles.stepContent}
                >
                  <h3 style={{ marginBottom: '2rem' }}>What are we building?</h3>
                  <div className={styles.grid}>
                    {['Logo Design', 'Mural / Graffiti', 'Custom Apparel', 'Painting'].map(type => (
                      <div 
                        key={type}
                        className={`${styles.optionCard} ${formData.type === type ? styles.selectedCard : ''}`}
                        onClick={() => setFormData({...formData, type})}
                      >
                        <span>{type === 'Logo Design' ? '🎯' : type === 'Mural / Graffiti' ? '🎨' : type === 'Custom Apparel' ? '👕' : '🖼️'}</span>
                        <h4>{type}</h4>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className={styles.stepContent}
                >
                  <h3 style={{ marginBottom: '2rem' }}>Choose your vibe</h3>
                  <div className={styles.grid}>
                    {[
                      { name: 'Minimalist', icon: '⚪', desc: 'Clean, simple, professional' },
                      { name: 'Cyberpunk', icon: '🧪', desc: 'Neon, futuristic, edgy' },
                      { name: 'Street Art', icon: '🎨', desc: 'Gritty, bold, graffiti-style' },
                      { name: 'Odia Soul', icon: '🛕', desc: 'Cultural, traditional, localized' }
                    ].map(v => (
                      <div 
                        key={v.name}
                        className={`${styles.optionCard} ${formData.vibe === v.name ? styles.selectedCard : ''}`}
                        onClick={() => setFormData({...formData, vibe: v.name})}
                      >
                        <span style={{ fontSize: '2.5rem' }}>{v.icon}</span>
                        <h4>{v.name}</h4>
                        <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>{v.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className={styles.stepContent}
                >
                  <h3>Tell us more</h3>
                  <div className={styles.inputGroup} style={{ marginTop: '2rem' }}>
                    <label>Project Description</label>
                    <textarea 
                      rows="4" 
                      placeholder="Describe your vision, colors, and specific needs..."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      required
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Timeline Needed</label>
                    <select 
                      value={formData.timeline}
                      onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                      className={styles.selectInput}
                    >
                      <option>Standard (10-15 days)</option>
                      <option>Express (3-5 days) [+₹999]</option>
                      <option>Flexible (20+ days) [-₹499]</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className={styles.stepContent}
                >
                  <h3>How do we reach you?</h3>
                  <div className={styles.inputGroup} style={{ marginTop: '2rem' }}>
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>WhatsApp Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      required
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Live Estimate Box */}
            <div className={styles.estimateBox}>
              <div className={styles.estimateLabel}>Estimated Starting Price</div>
              <div className={styles.estimateValue}>
                ₹{formData.type === 'Logo Design' ? '1499' : formData.type === 'Mural / Graffiti' ? '4499' : formData.type === 'Custom Apparel' ? '999' : '999'}
                <span style={{ fontSize: '0.8rem', color: 'var(--color-yellow)', marginLeft: '10px' }}>*Approx</span>
              </div>
            </div>

            <div className={styles.buttonRow}>
              {step > 1 && <button type="button" className={styles.backBtn} onClick={prevStep}>← Back</button>}
              {step < 4 ? (
                <button 
                  type="button" 
                  className={styles.nextBtn} 
                  onClick={nextStep}
                  disabled={(step === 1 && !formData.type) || (step === 2 && !formData.vibe)}
                >
                  Next Step
                </button>
              ) : (
                <button type="submit" className={styles.nextBtn}>Submit Request</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomOrder;
