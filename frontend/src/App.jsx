import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Shop from './pages/Shop/Shop';
import Portfolio from './pages/Portfolio/Portfolio';
import CustomOrder from './pages/CustomOrder/CustomOrder';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || 
          e.target.tagName.toLowerCase() === 'button' ||
          e.target.closest('a') ||
          e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <LanguageProvider>
      <CartProvider>
        <div 
          className={`custom-cursor ${isHovering ? 'hovering' : ''}`} 
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/custom-order" element={<CustomOrder />} />
            <Route path="/account" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
