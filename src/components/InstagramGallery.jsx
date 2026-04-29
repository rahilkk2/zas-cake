import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { FaInstagram as Instagram } from 'react-icons/fa';
import './InstagramGallery.css';

const InstagramGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    '/instagram/img shop1.jpeg',
    '/instagram/img shop2.jpeg',
    '/instagram/img shop 3.jpeg',
    '/instagram/img shop 4.jpeg'
  ];

  return (
    <section className="instagram-gallery section-padding" id="gallery">
      <div className="container">
        <h2 className="section-title">
          <Instagram size={36} className="mr-3 text-pink-italic" /> 
          Follow Us On Instagram
        </h2>
        
        <div className="gallery-grid">
          {images.map((img, index) => (
            <motion.div 
              key={index} 
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`Instagram ${index + 1}`} className="gallery-image" />
              <div className="gallery-overlay">
                <Instagram size={32} className="overlay-icon" />
              </div>
            </motion.div>
          ))}
          
          <div className="gallery-cta">
            <div className="cta-content glass-panel">
              <Instagram size={40} className="mb-3 text-pink-italic" />
              <h4 className="mb-2">@zascake8</h4>
              <button className="btn btn-primary btn-sm mt-3 w-full">Follow Us</button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              <X size={32} />
            </button>
            <motion.img 
              src={selectedImage} 
              alt="Enlarged" 
              className="lightbox-image"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InstagramGallery;
