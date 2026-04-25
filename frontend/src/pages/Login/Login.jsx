import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    login({ name: 'Amit Behera', email });
    navigate('/account');
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h1>WELCOME BACK</h1>
        <p>Login to manage your Jhakkas projects.</p>
        
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Email Address</label>
            <input 
              type="email" 
              required 
              placeholder="hello@jhakkas.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input 
              type="password" 
              required 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.loginBtn}>LOGIN</button>
        </form>
        
        <div className={styles.footer}>
          <span>New to Jhakkas Lab?</span>
          <button className={styles.linkBtn}>Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
