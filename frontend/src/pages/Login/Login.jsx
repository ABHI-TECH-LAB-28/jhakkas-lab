import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Login.module.css';

const Login = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, register, loading, error } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let success = false;
    if (isLoginView) {
      success = await login(email, password);
    } else {
      success = await register(name, email, password);
    }
    if (success) {
      navigate('/account');
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h1>{isLoginView ? t('welcomeBack') : t('joinCrew')}</h1>
        <p>{isLoginView ? t('loginToAccount') : t('startCreativeJourney')}</p>
        
        {error && (
          <div className={styles.errorAlert}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {!isLoginView && (
            <div className={styles.inputGroup}>
              <label>{t('fullName')}</label>
              <input 
                type="text" 
                required 
                placeholder={t('enterName')}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className={styles.inputGroup}>
            <label>{t('emailAddress')}</label>
            <input 
              type="email" 
              required 
              placeholder="hello@jhakkas.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>{t('password')}</label>
            <input 
              type="password" 
              required 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.loginBtn} disabled={loading}>
            {loading ? t('processing') : (isLoginView ? t('login') : t('createAccount'))}
          </button>
        </form>
        
        <div className={styles.footer}>
          <span>{isLoginView ? t('dontHaveAccount') : t('alreadyHaveAccount')}</span>
          <button 
            type="button"
            className={styles.linkBtn}
            onClick={() => setIsLoginView(!isLoginView)}
          >
            {isLoginView ? t('createAccount') : t('login')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
