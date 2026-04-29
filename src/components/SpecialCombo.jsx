import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './SpecialCombo.css';

const SpecialCombo = () => {
  return (
    <section className="special-combo section-padding" id="combo">
      <div className="container">
        <motion.div 
          className="combo-banner"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="combo-content">
            <motion.h4 
              className="combo-subtitle"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              LIMITED TIME OFFER
            </motion.h4>
            
            <motion.h2 
              className="combo-title"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Buy 3 Half Kg Cakes <br/>
              <span className="text-pink-italic">→ Get 1 Quarter Kg Cake FREE</span>
            </motion.h2>
            
            <motion.p 
              className="combo-desc"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Make your celebrations bigger and sweeter with our special combo. 
              Perfect for family gatherings and parties!
            </motion.p>
            
            <motion.button 
              className="btn btn-primary pulse-btn"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Claim Offer Now <ArrowRight size={18} className="ml-2" />
            </motion.button>
          </div>
          
          {/* Animated background elements */}
          <div className="combo-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialCombo;
