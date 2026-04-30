import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      review: "Absolutely loved the chocolate truffle cake! It was incredibly moist and the delivery was right on time. Will definitely order again.",
      rating: 5
    },
    {
      id: 2,
      name: "Rahul Desai",
      review: "The cakes are absolutely phenomenal. Premium quality, amazing taste, and great packaging. Really impressed with the quality!",
      rating: 5
    },
    {
      id: 3,
      name: "Sneha Patel",
      review: "Ordered a custom cake for my daughter's birthday. It looked exactly like the reference image I sent and tasted heavenly!",
      rating: 4
    },
    {
      id: 4,
      name: "Amit Kumar",
      review: "Their pastries are my daily guilty pleasure. The 'Buy 2 Get 1 Free' offer is totally worth it. Highly recommended bakery in Mumbai.",
      rating: 5
    }
  ];

  return (
    <section className="testimonials section-padding" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        
        <motion.div 
          className="testimonials-slider"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Slider {...settings}>
            {reviews.map((review) => (
              <div key={review.id} className="testimonial-slide">
                <div className="testimonial-card glass-panel">
                  <Quote size={40} className="quote-icon" />
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        fill={i < review.rating ? "var(--color-secondary)" : "none"} 
                        color="var(--color-secondary)"
                      />
                    ))}
                  </div>
                  <p className="review-text">"{review.review}"</p>
                  <h5 className="reviewer-name">- {review.name}</h5>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
