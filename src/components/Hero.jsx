import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const titleWords = ["Where", "Elegance", "Meets"];

  return (
    <section className="hero" id="home">
      {/* Floating Petals Background */}
      <div className="hero-bg-particles">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`petal petal-${i + 1}`}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          style={{ y: y1, opacity }}
        >
          <motion.p 
            className="hero-tagline"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            CRAFTED TO PERFECTION
          </motion.p>
          
          <h1 className="hero-title">
            {titleWords.map((word, index) => (
              <motion.span 
                key={index}
                custom={index + 2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="inline-block mr-3"
              >
                {word}{" "}
              </motion.span>
            ))}
            <br />
            <motion.span 
              className="text-pink-italic inline-block"
              custom={5}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Indulgence
            </motion.span>
          </h1>
          
          <motion.div className="hero-divider" custom={6} initial="hidden" animate="visible" variants={textVariants}>
            <span>❤</span>
          </motion.div>

          <motion.p 
            className="hero-description"
            custom={7}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            From timeless classics to modern masterpieces, every creation is baked with passion, crafted with love.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            custom={8}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <button className="btn btn-primary magnetic-btn">
              Explore Our Cakes <ArrowRight size={18} className="ml-2" />
            </button>
            <button className="btn btn-outline magnetic-btn">
              View Menu
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div 
            className="hero-image-glow"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img 
            src="/hero/img 2.jpeg" 
            alt="Premium Cake" 
            className="hero-image"
            animate={{ y: [-15, 15, -15], rotateZ: [-1, 1, -1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, rotateZ: 0 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
