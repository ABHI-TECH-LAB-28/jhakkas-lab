import { Link, useLocation } from 'react-router-dom';import { useState, useEffect } from 'react';import { motion, AnimatePresence } from 'framer-motion';import { FiMenu, FiX, FiShoppingCart, FiSearch, FiUser } from 'react-icons/fi';import CartDrawer from '../CartDrawer/CartDrawer';import { useCart } from '../../context/CartContext';import { useLanguage } from '../../context/LanguageContext';import styles from './Navbar.module.css';

const Navbar = () => {const { getCartCount } = useCart();const { language, setLanguage, t } = useLanguage();const [isOpen, setIsOpen] = useState(false);const [scrolled, setScrolled] = useState(false);const [isCartOpen, setIsCartOpen] = useState(false);const [showBackToTop, setShowBackToTop] = useState(false);const location = useLocation();

const toggleMenu = () => setIsOpen(!isOpen);

useEffect(() => {
