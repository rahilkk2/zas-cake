import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Bestsellers.css';

const Bestsellers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  const products = [
    { id: 1, name: 'Made With Love Cake', price: null, img: '/products/cake 3.jpeg' },
    { id: 2, name: 'Sweet Celebration Cake', price: null, img: '/products/cake 4.jpeg' },
    { id: 3, name: 'Perfect Occasion Cake', price: null, img: '/products/cake 5 .jpeg' },
    { id: 4, name: 'Delight in Every Bite', price: null, img: '/products/cake 6.jpeg' },
    { id: 5, name: 'Crafted to Perfection', price: null, img: '/products/cake 7.jpeg' },
    { id: 6, name: 'A Treat to Remember', price: null, img: '/products/cake 8.jpeg' },
  ];

  return (
    <section className="bestsellers section-padding" id="cakes">
      <div className="container">
        <h2 className="section-title">Our Bestsellers</h2>
        
        <motion.div 
          className="bestsellers-slider"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="product-slide">
                <div className="product-card">
                  <div className="product-image-wrap">
                    <img src={product.img} alt={product.name} className="product-image" />
                  </div>
                  <div className="product-info">
                    <h4 className="product-name">{product.name}</h4>
                    {product.price && <p className="product-price">₹{product.price}</p>}
                    <button className="btn btn-primary btn-sm product-btn">Order Now</button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Bestsellers;
