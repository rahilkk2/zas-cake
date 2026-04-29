import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Special Combo', href: '#combo' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo">
          <img src="/logo.png" alt="Zas Cake Logo" />
        </a>

        {/* Desktop Menu */}
        <ul className="navbar-links desktop-only">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="nav-link">{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="navbar-actions">
          <button className="btn btn-primary order-btn desktop-only">
            <ShoppingBag size={18} className="mr-2" />
            Order Now
          </button>
          
          <button 
            className="mobile-menu-btn mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <ul className="mobile-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <button className="btn btn-primary w-full mt-4">Order Now</button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
