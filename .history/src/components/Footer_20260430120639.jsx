import { Phone, MapPin, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/logo.png" alt="Zas Cake Logo" className="footer-logo" />
            <p className="footer-desc">
              Your celebrations, our passion.<br />
              We bake happiness in every bite.
            </p>
            <div className="social-links">
              <a href="https://wa.me/917738443411" target="_blank" rel="noreferrer" className="social-icon"><MessageCircle size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-title">QUICK LINKS</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#cakes">Cakes</a></li>
              <li><a href="#offers">Offers</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-title">CONTACT US</h4>
            <ul className="contact-list">
              <li>
                <Phone size={18} className="contact-icon" />
                <span>7738443411</span>
              </li>
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>Shimla Park, Kausa, Mumbra, Thane, Maharashtra 400612</span>
              </li>
            </ul>
            <a href="https://wa.me/917738443411" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm mt-4 whatsapp-btn">
              <MessageCircle size={18} className="mr-2" /> Order on WhatsApp
            </a>
          </div>
          
          <div className="footer-hours">
            <h4 className="footer-title">OPENING HOURS</h4>
            <p>Mon-Sun</p>
            <p>10:30 AM - 1:30 AM</p>
            
            <h3 className="footer-signature text-pink-italic mt-4">Baked <br/>with Love ❤</h3>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Zas Cake. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
