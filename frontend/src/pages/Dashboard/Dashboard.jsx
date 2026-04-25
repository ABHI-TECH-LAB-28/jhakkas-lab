import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import styles from './Dashboard.module.css';

const orders = [
  { id: '#JK-9821', date: 'Oct 12, 2023', status: 'Delivered', total: '₹1,499', items: 'Minimalist Logo' },
  { id: '#JK-9855', date: 'Oct 24, 2023', status: 'In Progress', total: '₹4,499', items: 'Guitar Mural (Custom)' }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const [isLoginView, setIsLoginView] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [dbOrders, setDbOrders] = useState([]);
  const [dbProjects, setDbProjects] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(true);
  const [projectsLoading, setProjectsLoading] = useState(true);
  
  const { user, login, register, logout, isAuthenticated, loading, error } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && user?.token) {
      const fetchOrders = async () => {
        try {
          const res = await fetch('/api/orders/myorders', {
            headers: { Authorization: `Bearer ${user.token}` },
          });
          const data = await res.json();
          setDbOrders(data.length > 0 ? data : orders);
        } catch (err) {
          console.error('Error fetching orders:', err);
          setDbOrders(orders);
        } finally {
          setOrdersLoading(false);
        }
      };

      const fetchProjects = async () => {
        try {
          const res = await fetch('/api/custom-orders/myprojects', {
            headers: { Authorization: `Bearer ${user.token}` },
          });
          const data = await res.json();
          setDbProjects(data);
        } catch (err) {
          console.error('Error fetching projects:', err);
        } finally {
          setProjectsLoading(false);
        }
      };

      fetchOrders();
      fetchProjects();
    }
  }, [isAuthenticated, user]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    if (isLoginView) {
      await login(formData.email, formData.password);
    } else {
      await register(formData.name, formData.email, formData.password);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.dashboardPage}>
        <div className="container">
          <div className={styles.authWrapper}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className={styles.mascotSide}
            >
              <img src="/jhakku.png" alt="Jhakku" />
              <div className={styles.mascotSplatter}></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className={styles.authCard}
            >
              <h2 className="text-outline" style={{ fontSize: '1rem', marginBottom: '1rem' }}>JHAKKAS LAB</h2>
              <h1>{isLoginView ? 'WELCOME BACK' : 'JOIN THE CREW'}</h1>
              <p>{isLoginView ? 'Login to your account' : 'Start your creative journey'}</p>
              
              {error && <div className={styles.errorAlert}>{error}</div>}

              <form onSubmit={handleAuthSubmit} className={styles.authForm}>
                {!isLoginView && (
                  <div className={styles.inputGroup}>
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                )}
                <div className={styles.inputGroup}>
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    placeholder="hello@jhakkas.com" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Password</label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    required 
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                </div>
                <button type="submit" className={styles.authBtn} disabled={loading}>
                  {loading ? 'PROCESSING...' : (isLoginView ? 'LOGIN' : 'SIGN UP')}
                </button>
              </form>

              <div className={styles.authSwitch}>
                <span>{isLoginView ? "Don't have an account?" : "Already have an account?"}</span>
                <button onClick={() => setIsLoginView(!isLoginView)}>
                  {isLoginView ? 'Sign Up' : 'Login'}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.dashboardPage}>
      <div className="container">
        <header className={styles.header}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span>Welcome back,</span>
            <h1>{user?.name || 'Guest'}</h1>
          </motion.div>
          <button className={styles.logoutBtn} onClick={handleLogout}>Logout</button>
        </header>

        <div className={styles.layout}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <nav>
              <button 
                className={activeTab === 'orders' ? styles.navItemActive : styles.navItem}
                onClick={() => setActiveTab('orders')}
              >
                My Orders
              </button>
              <button 
                className={activeTab === 'projects' ? styles.navItemActive : styles.navItem}
                onClick={() => setActiveTab('projects')}
              >
                Design Projects
              </button>
              <button 
                className={activeTab === 'settings' ? styles.navItemActive : styles.navItem}
                onClick={() => setActiveTab('settings')}
              >
                Settings
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className={styles.mainContent}>
            {activeTab === 'projects' && (
              <section className={styles.ordersSection}>
                <h2>Active Design Projects</h2>
                {projectsLoading ? (
                  <p>Loading your projects...</p>
                ) : dbProjects.length === 0 ? (
                  <div className={styles.emptyProjects}>
                    <p>No active design projects found. Start your first custom creation!</p>
                    <Link to="/custom-order" className={styles.authBtn} style={{ maxWidth: '200px' }}>START PROJECT</Link>
                  </div>
                ) : (
                  dbProjects.map(project => (
                    <div key={project._id} className={styles.projectCard}>
                      <div className={styles.projectInfo}>
                        <h3>{project.projectType}</h3>
                        <span className={styles.statusBadge}>{project.status}</span>
                      </div>
                      <div className={styles.timeline}>
                        <div className={`${styles.timelineStep} ${['Ideation', 'Design', 'Execution', 'Delivery'].indexOf(project.status) >= 0 ? styles.completed : ''} ${project.status === 'Ideation' ? styles.active : ''}`}>
                          <div className={styles.stepDot}></div>
                          <span>Ideation</span>
                        </div>
                        <div className={`${styles.timelineStep} ${['Design', 'Execution', 'Delivery'].indexOf(project.status) >= 0 ? styles.completed : ''} ${project.status === 'Design' ? styles.active : ''}`}>
                          <div className={styles.stepDot}></div>
                          <span>Design</span>
                        </div>
                        <div className={`${styles.timelineStep} ${['Execution', 'Delivery'].indexOf(project.status) >= 0 ? styles.completed : ''} ${project.status === 'Execution' ? styles.active : ''}`}>
                          <div className={styles.stepDot}></div>
                          <span>Execution</span>
                        </div>
                        <div className={`${styles.timelineStep} ${['Delivery'].indexOf(project.status) >= 0 ? styles.completed : ''} ${project.status === 'Delivery' ? styles.active : ''}`}>
                          <div className={styles.stepDot}></div>
                          <span>Delivery</span>
                        </div>
                      </div>
                      <p className={styles.updateText}>Current Update: {project.updateText}</p>
                    </div>
                  ))
                )}
              </section>
            )}

            {activeTab === 'orders' && (
              <section className={styles.ordersSection}>
                <h2>Recent Orders</h2>
                {ordersLoading ? (
                  <p>Loading your orders...</p>
                ) : (
                  <div className={styles.ordersTable}>
                    <div className={styles.tableHeader}>
                      <span>Order ID</span>
                      <span>Date</span>
                      <span>Status</span>
                      <span>Total</span>
                    </div>
                    {dbOrders.map(order => (
                      <div key={order._id || order.id} className={styles.orderRow}>
                        <span className={styles.orderId}>{order._id?.substring(0, 8) || order.id}</span>
                        <span>{order.createdAt ? new Date(order.createdAt).toLocaleDateString() : order.date}</span>
                        <span className={`${styles.status} ${styles[(order.isPaid ? 'Paid' : 'Pending').replace(' ', '')]}`}>
                          {order.isPaid ? 'Paid' : (order.status || 'Pending')}
                        </span>
                        <span className={styles.orderTotal}>₹{order.totalPrice || order.total}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}

            {activeTab === 'settings' && (
              <section className={styles.settingsSection}>
                <h2>Account Settings</h2>
                <div className={styles.settingsCard}>
                  <div className={styles.settingItem}>
                    <label>Display Name</label>
                    <input type="text" defaultValue={user?.name} className={styles.settingInput} />
                  </div>
                  <div className={styles.settingItem}>
                    <label>Email Address</label>
                    <input type="email" defaultValue={user?.email} className={styles.settingInput} />
                  </div>
                  <button className={styles.saveBtn}>SAVE CHANGES</button>
                </div>
              </section>
            )}

            <section className={styles.helpSection}>
              <div className={styles.helpCard}>
                <h3>Need immediate help with your project?</h3>
                <p>Chat directly with our lead artist on WhatsApp.</p>
                <a href="https://wa.me/91XXXXXXXXXX" className={styles.helpBtn}>CHAT NOW</a>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
