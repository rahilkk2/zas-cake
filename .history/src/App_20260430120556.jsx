import { useState, useEffect } from 'react';
import { 
  Phone, Mail, Clock, MapPin, 
  ShoppingBag, Menu, X, Heart, Calendar, Gift, 
  Sparkles, Leaf, Shield, Truck, Camera, MessageCircle, Star
} from 'lucide-react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

/* ─── TOP BAR ─── */
function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <span><Phone size={14} /> 7738443411</span>
          <span><Clock size={14} /> Mon-Sun 10:30 AM - 1:30 AM</span>
        </div>
        <div className="topbar-right">
        </div>
      </div>
    </div>
  );
}

/* ─── NAVBAR ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Special Combo', href: '#combo' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
    { label: 'Gallery', href: '#gallery' },
  ];
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="nav-logo">
          <img src="/logo.png" alt="ZAS! Cake" />
          <span className="logo-sub">BAKED WITH LOVE</span>
        </a>
        <ul className="nav-links">
          {links.map((l, i) => (
            <li key={l.label}><a href={l.href} className={i === 0 ? 'active' : ''}>{l.label}</a></li>
          ))}
        </ul>
        <a href="https://wa.me/917738443411" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm nav-order">
          <ShoppingBag size={16} /> Order Now
        </a>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(l => <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>)}
        <a href="https://wa.me/917738443411" className="btn btn-primary" style={{marginTop:8, justifyContent: 'center'}}>
          <ShoppingBag size={16} /> Order Now
        </a>
      </div>
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="hero" id="home">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="petal" style={{
          top: `${15 + i * 14}%`, left: `${5 + i * 18}%`,
          background: i % 2 === 0 ? '#fce4ec' : '#f8bbd0',
          width: `${14 + i * 3}px`, height: `${14 + i * 3}px`,
          animationDelay: `${i * 0.8}s`, animationDuration: `${5 + i * 1.5}s`,
        }} />
      ))}
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-tagline">CRAFTED TO PERFECTION</p>
          <h1 className="hero-heading">Where Elegance<br/>Meets <span className="pink">Indulgence</span></h1>
          <div className="hero-divider"><span><Heart size={20} fill="currentColor" /></span></div>
          <p className="hero-desc">From timeless classics to modern masterpieces, every creation is baked with passion, crafted with love.</p>
          <div className="hero-btns">
            <a href="#cakes" className="btn btn-primary">Explore Our Cakes →</a>
            <a href="#combo" className="btn btn-outline">View Menu</a>
          </div>
        </div>
        <div className="hero-img-wrap">
          <div className="hero-glow"></div>
          <div className="hero-cake-frame">
            <img src="/products/cake 12.jpeg" alt="Premium Cake" className="hero-cake" />
          </div>
          <div className="hero-logo-badge">
            <img src="/logo.png" alt="ZAS!" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT US ─── */
function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-img-wrap">
            <img src="/instagram/img shop1.jpeg" alt="ZAS! Cake Shop" className="about-img" />
            <div className="about-experience">
              <span className="exp-num">100%</span>
              <span className="exp-text">Premium Quality</span>
            </div>
          </div>
          <div className="about-text">
            <div className="section-title-wrap" style={{textAlign: 'left', margin: '0 0 24px 0', maxWidth: '100%'}}>
              <h2 className="section-title" style={{margin: 0}}>Our Story</h2>
            </div>
            <h3 className="about-heading">Baking Happiness With Every <span className="pink">Masterpiece</span></h3>
            <p className="about-desc">
              Welcome to <strong>ZAS! Cake</strong>, your ultimate destination for premium, handcrafted cakes and pastries in Mumbra. We believe that every celebration deserves a touch of sweetness and elegance.
            </p>
            <p className="about-desc">
              Our expert bakers use only the finest ingredients to craft delicious cakes that not only look spectacular but taste divine. From intimate birthdays to grand anniversaries, our cakes are baked fresh daily, ensuring uncompromising quality and hygiene.
            </p>
            <ul className="about-list">
              <li><Heart size={16} className="pink" /> Handcrafted with passion and care</li>
              <li><Leaf size={16} className="pink" /> 1/2 kg cakes start from ₹300 | 1/4 kg from ₹150 | Pastries from ₹50</li>
              <li><Sparkles size={16} className="pink" /> Premium, fresh, and high-quality ingredients</li>
            </ul>
            <a href="#cakes" className="btn btn-primary" style={{marginTop: 32}}>Taste The Magic</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── OFFERS ─── */
function Offers() {
  return (
    <section className="offers" id="offers">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">OUR EXCLUSIVE OFFERS</h2>
        </div>
        <div className="offers-grid-wide">
          
          <div className="offer-card-wide">
            <div className="offer-content">
              <div className="offer-top-text"><span className="pink">EVERY</span> MONTH</div>
              <div className="date-circles">
                <span className="date-circle">5</span>
                <span className="date-circle">15</span>
                <span className="date-circle">25</span>
              </div>
              <p className="offer-sub">Any Half Kg Cake</p>
              <div className="offer-price">₹220 <span className="dark-text">Only</span></div>
              <a href="https://wa.me/917738443411" className="btn btn-outline btn-sm">Order Now</a>
            </div>
            <div className="offer-img-wrap"><img src="/products/cake 1.jpeg" alt="Monthly Offer" /></div>
          </div>

          <div className="offer-card-wide">
            <div className="offer-content">
              <div className="offer-top-text">AFTER 11 PM</div>
              <h3 className="offer-title-lg">Happy<br/>Hours</h3>
              <p className="offer-sub">Any Display Cake</p>
              <div className="offer-highlight">15% OFF</div>
              <a href="https://wa.me/917738443411" className="btn btn-primary btn-sm">Order Now</a>
            </div>
            <div className="offer-img-wrap"><img src="/products/cake 2.jpeg" alt="Happy Hours" /></div>
          </div>

          <div className="offer-card-wide">
            <div className="offer-content">
              <div className="offer-top-text">EVERYDAY ALWAYS</div>
              <div className="crown-icon">♔</div>
              <p className="offer-sub" style={{marginBottom:0,fontSize:14}}>Buy 2 Pastries</p>
              <div className="offer-highlight">GET 1 FREE</div>
              <a href="https://wa.me/917738443411" className="btn btn-primary btn-sm" style={{marginTop:8}}>Explore Pastries</a>
            </div>
            <div className="offer-img-wrap"><img src="/products/pastry 1.jpeg" alt="Pastry Offer" /></div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── BESTSELLERS ─── */
function Bestsellers() {
  const products = [
    { name: 'Made With Love Cake', price: null, img: '/products/cake 3.jpeg' },
    { name: 'Sweet Celebration Cake', price: null, img: '/products/cake 4.jpeg' },
    { name: 'Perfect Occasion Cake', price: null, img: '/products/cake 5 .jpeg' },
    { name: 'Delight in Every Bite', price: null, img: '/products/cake 6.jpeg' },
    { name: 'Crafted to Perfection', price: null, img: '/products/cake 7.jpeg' },
    { name: 'A Treat to Remember', price: null, img: '/products/cake 8.jpeg' },
  ];
  return (
    <section className="bestsellers" id="cakes">
      <div className="container">
        <h2 className="section-title">Our Bestsellers</h2>
        <div className="slider-wrapper">
          <div className="products-track">
            {products.map((p, i) => (
              <div className="product-card" key={i}>
                <div className="product-img-wrap"><img src={p.img} alt={p.name} loading="lazy" /></div>
                <div className="product-name">{p.name}</div>
                {p.price && <div className="product-price">₹{p.price}</div>}
                <a href="https://wa.me/917738443411" className="btn btn-primary btn-sm">Order Now</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FEATURES ─── */
function Features() {
  const items = [
    { icon: <Sparkles size={24} />, title: 'Premium Ingredients', desc: 'Only the finest & fresh ingredients' },
    { icon: <Shield size={24} />, title: 'Hygienic & Safe Preparation', desc: 'Made with care & complete hygiene' },
    { icon: <Truck size={24} />, title: 'On-Time Delivery', desc: 'Because your time matters' },
    { icon: <Heart size={24} />, title: 'Made With Love Since Day 1', desc: 'Crafting happiness in every bite' },
  ];
  return (
    <section className="features-strip">
      <div className="container">
        <div className="features-inner">
          {items.map((f, i) => (
            <div className="feature-item" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <div><div className="feature-title">{f.title}</div><div className="feature-desc">{f.desc}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SPECIAL COMBO ─── */
function SpecialCombo() {
  return (
    <section className="combo" id="combo">
      <div className="container">
        <div className="combo-banner">
          <p className="combo-sub">LIMITED TIME OFFER</p>
          <h2 className="combo-heading">Buy 3 Half Kg Cakes<br/><span className="pink">→ Get 1 Quarter Kg Cake FREE</span></h2>
          <p className="combo-desc">Make your celebrations bigger and sweeter with our special combo. Perfect for family gatherings and parties!</p>
          <a href="https://wa.me/917738443411" target="_blank" rel="noreferrer" className="btn btn-primary pulse-glow">Claim Offer Now →</a>
        </div>
      </div>
    </section>
  );
}

/* ─── INSTAGRAM / GALLERY ─── */
function InstagramGallery() {
  const [lb, setLb] = useState(null);
  
  // Only using the actual shop images from the instagram folder as requested
  const imgs = [
    '/instagram/img shop1.jpeg',
    '/instagram/img shop2.jpeg',
    '/instagram/img shop 3.jpeg',
    '/instagram/img shop 4.jpeg'
  ];
  
  return (
    <section className="insta" id="gallery">
      <div className="container">
        <h2 className="section-title"><Camera size={28} className="pink" /> Follow Us On Instagram</h2>
        <div className="insta-grid-clean">
          {imgs.map((img, i) => (
            <div className="insta-item" key={i} onClick={() => setLb(img)}>
              <img src={img} alt={`ZAS! Cake Shop View ${i+1}`} loading="lazy" />
              <div className="insta-overlay"><Camera size={32} /></div>
            </div>
          ))}
        </div>
        <div className="insta-cta-full">
          <Camera size={40} strokeWidth={1.5} className="pink" style={{marginBottom:12}} />
          <h4>@zascake8</h4>
          <p>Explore more behind the scenes and fresh bakes on our feed!</p>
          <a href="https://instagram.com/zascake8" target="_blank" rel="noreferrer" className="btn btn-primary" style={{marginTop:16}}>Follow Us</a>
        </div>
      </div>
      {lb && (
        <div className="lightbox" onClick={() => setLb(null)}>
          <button className="lightbox-close" onClick={() => setLb(null)}><X size={32} /></button>
          <img src={lb} alt="Enlarged" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function Testimonials() {
  // Real reviews from images
  const reviews = [
    { name: 'Hasan Khan', text: 'Nice and tasty cake at reasonable price.', rating: 5 },
    { name: 'MIQDAAD KHAN', text: 'Great taste specially choco truffle cake', rating: 5 },
    { name: 'Rahil Khatik', text: 'Food service was best , had came with my friends now they are like idhar hi chalo cake khaane', rating: 5 },
    { name: 'Ahmed Kazi', text: 'Great experience', rating: 5 },
  ];
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="reviews-track">
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <div className="quote-mark">"</div>
              <div className="stars">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={16} fill={idx < r.rating ? "currentColor" : "none"} />
                ))}
              </div>
              <p className="review-text">"{r.text}"</p>
              <h5 className="reviewer">— {r.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <img src="/logo.png" alt="ZAS! Cake" className="footer-logo" />
            <p className="footer-desc">Your celebrations, our passion.<br/>We bake happiness in every bite.</p>
            <div className="social-icons">
              <a href="https://instagram.com/zascake8" target="_blank" rel="noreferrer" className="social-icon"><FaInstagram size={18} /></a>
              <a href="#" className="social-icon"><FaFacebookF size={18} /></a>
              <a href="https://wa.me/917738443411" target="_blank" rel="noreferrer" className="social-icon"><FaWhatsapp size={18} /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">QUICK LINKS</h4>
            <ul className="footer-list">
              <li><a href="#home">Home</a></li><li><a href="#cakes">Cakes</a></li>
              <li><a href="#offers">Pastries</a></li><li><a href="#offers">Offers</a></li>
              <li><a href="#combo">Custom Cakes</a></li><li><a href="#gallery">Gallery</a></li>
              <li><a href="#about">About Us</a></li><li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">CONTACT US</h4>
            <div className="contact-item"><div className="contact-icon"><Phone size={16} /></div><span>7738443411</span></div>
            <div className="contact-item"><div className="contact-icon"><Mail size={16} /></div><span>zascake8@gmail.com</span></div>
            <div className="contact-item"><div className="contact-icon"><MapPin size={16} /></div><span>AL Javed Apartment, Ground Floor,<br/>Near Kausa Qabrastan,<br/>Mumbra, Thane</span></div>
            <a href="https://wa.me/917738443411" target="_blank" rel="noreferrer" className="wa-btn"><FaWhatsapp size={16} /> Order on WhatsApp</a>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">OPENING HOURS</h4>
            <p style={{fontSize:14,color:'var(--gray)',marginBottom:4}}>Monday - Sunday</p>
            <p style={{fontSize:14,color:'var(--gray)',marginBottom:20}}>11:00 AM - 11:30 PM</p>
            <div className="footer-sig">Baked<br/>with Love <Heart size={20} fill="currentColor" style={{display:'inline', verticalAlign:'middle'}} /></div>
          </div>
        </div>
        <div className="footer-bottom"><p>&copy; {new Date().getFullYear()} ZAS! Cake. All rights reserved.</p></div>
      </div>
    </footer>
  );
}

/* ─── FREE DELIVERY BADGE ─── */
function DeliveryBadge() {
  return (
    <div className="delivery-badge">
      <Truck size={18} /> Free Delivery Above ₹500!
    </div>
  );
}

/* ─── APP ─── */
function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <TopBar />
      <Navbar />
      <DeliveryBadge />
      <main>
        <Hero />
        <About />
        <Offers />
        <Bestsellers />
        <Features />
        <SpecialCombo />
        <InstagramGallery />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
