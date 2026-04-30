import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    '/shop/img shop1.jpeg',
    '/shop/img shop2.jpeg',
    '/shop/img shop 3.jpeg',
    '/shop/img shop 4.jpeg'
  ];

  return (
    <section className="gallery section-padding" id="gallery">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">Gallery</h2>
        </div>
        
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
              <img src={img} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
              <div className="gallery-overlay">
                <Search size={32} className="overlay-icon" />
              </div>
            </motion.div>
          ))}
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

export default Gallery;
