import { motion } from 'framer-motion';
import { Clock, Calendar, Gift } from 'lucide-react';
import './Offers.css';

const Offers = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="offers section-padding" id="offers">
      <div className="container">
        <h2 className="section-title">Our Exclusive Offers</h2>
        
        <motion.div 
          className="offers-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1: Monthly Dhamaka */}
          <motion.div className="offer-card glass-panel" variants={cardVariants} whileHover="hover">
            <div className="offer-content">
              <span className="offer-badge"><Calendar size={14} className="mr-1"/> EVERY MONTH</span>
              <div className="dhamaka-dates">
                <span className="date-circle">5</span>
                <span className="date-circle">15</span>
                <span className="date-circle">25</span>
              </div>
              <h3 className="offer-title">Any Half Kg Cake</h3>
              <div className="offer-price">₹220 <span>Only</span></div>
              <button className="btn btn-outline btn-sm mt-4">Order Now</button>
            </div>
            <div className="offer-image-container">
              <img src="/products/cake 1.jpeg" alt="Monthly Offer Cake" className="offer-image" />
            </div>
            <div className="glow-border"></div>
          </motion.div>

          {/* Card 2: Happy Hours */}
          <motion.div className="offer-card glass-panel" variants={cardVariants} whileHover="hover">
            <div className="offer-content">
              <span className="offer-badge"><Clock size={14} className="mr-1"/> AFTER 11 PM</span>
              <h3 className="offer-title-large text-pink-italic">Happy<br/>Hours</h3>
              <p className="offer-desc">Any Display Cake</p>
              <div className="offer-highlight">15% OFF</div>
              <button className="btn btn-primary btn-sm mt-4">Order Now</button>
            </div>
            <div className="offer-image-container">
              <img src="/products/cake 2.jpeg" alt="Happy Hours Cake" className="offer-image" />
            </div>
            <div className="glow-border"></div>
          </motion.div>

          {/* Card 3: Daily Offer */}
          <motion.div className="offer-card glass-panel" variants={cardVariants} whileHover="hover">
            <div className="offer-content">
              <span className="offer-badge"><Gift size={14} className="mr-1"/> EVERYDAY ALWAYS</span>
              <h3 className="offer-title-med">Buy 2 Pastries</h3>
              <div className="offer-huge text-pink-italic">GET 1 FREE</div>
              <button className="btn btn-primary btn-sm mt-4">Explore Pastries</button>
            </div>
            <div className="offer-image-container">
              <img src="/products/pastry 1.jpeg" alt="Free Pastry Offer" className="offer-image" />
            </div>
            <div className="glow-border"></div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Offers;
