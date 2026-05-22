import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

// ── Safe JSON parser: handles empty / non-JSON responses ──
const safeParseJSON = async (res) => {
  const text = await res.text();
  if (!text || text.trim() === '') {
    return { message: 'Server returned an empty response.' };
  }
  try {
    return JSON.parse(text);
  } catch {
    return { message: text || 'Unexpected server response.' };
  }
};

// ── Local mock login (works even when backend is offline) ──
const MOCK_USERS_KEY = 'jhakkas_mock_users';

const getMockUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(MOCK_USERS_KEY) || '[]');
  } catch { return []; }
};

const saveMockUsers = (users) => {
  localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users));
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('jhakkas_user');
      return saved ? JSON.parse(saved) : null;
    } catch { return null; }
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const persistUser = (userData) => {
    setUser(userData);
    localStorage.setItem('jhakkas_user', JSON.stringify(userData));
  };

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      // ── Try real backend first ──
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 4000);
      
      const res = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        signal: controller.signal,
      });
      clearTimeout(timeout);

      const data = await safeParseJSON(res);
      if (!res.ok) throw new Error(data.message || 'Login failed');
      persistUser(data);
      return true;
    } catch (err) {
      if (err.name === 'AbortError' || err.message.includes('fetch') || err.message.includes('Failed')) {
        // ── Backend offline: try local mock login ──
        const users = getMockUsers();
        const found = users.find(u => u.email === email && u.password === password);
        if (found) {
          const { password: _, ...safeUser } = found;
          persistUser({ ...safeUser, token: 'local_mock_token', isLocal: true });
          return true;
        }
        setError('Backend offline & no local account found. Please register first.');
        return false;
      }
      setError(err.message || 'Login failed. Please try again.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    setLoading(true);
    setError(null);
    try {
      // ── Try real backend first ──
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 4000);

      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
        signal: controller.signal,
      });
      clearTimeout(timeout);

      const data = await safeParseJSON(res);
      if (!res.ok) throw new Error(data.message || 'Registration failed');
      persistUser(data);
      return true;
    } catch (err) {
      if (err.name === 'AbortError' || err.message.includes('fetch') || err.message.includes('Failed')) {
        // ── Backend offline: save locally ──
        const users = getMockUsers();
        if (users.find(u => u.email === email)) {
          setError('An account with this email already exists locally.');
          return false;
        }
        const newUser = { id: Date.now(), name, email, password };
        saveMockUsers([...users, newUser]);
        const { password: _, ...safeUser } = newUser;
        persistUser({ ...safeUser, token: 'local_mock_token', isLocal: true });
        return true;
      }
      setError(err.message || 'Registration failed. Please try again.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('jhakkas_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
