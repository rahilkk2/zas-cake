import { motion } from 'framer-motion';
import { Sparkles, Leaf, ShieldCheck, Truck, Heart } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <Sparkles size={28} />,
      title: "Premium Ingredients",
      desc: "Only the finest & fresh ingredients"
    },
    {
      icon: <Leaf size={28} />,
      title: "100% Eggless Options",
      desc: "Delicious cakes for everyone"
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Hygienic Preparation",
      desc: "Made with complete hygiene"
    },
    {
      icon: <Truck size={28} />,
      title: "On-Time Delivery",
      desc: "Because your time matters"
    },
    {
      icon: <Heart size={28} />,
      title: "Made With Love",
      desc: "Crafting happiness in every bite"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  return (
    <section className="features">
      <div className="container">
        <motion.div 
          className="features-container glass-panel"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} className="feature-item" variants={itemVariants}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <div className="feature-text">
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
