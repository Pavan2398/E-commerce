import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiShoppingCart, FiUser, FiMenu } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../CSS/HomePage.css';
import {Link} from 'react-router-dom'
import useUserStore from '../store/userdetails';
function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isLoggedIn = useUserStore((state)=>state.isLoggedIn)
  const name = useUserStore((state)=>state.name)
  console.log(isLoggedIn)
  console.log(name)
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?auto=format&fit=crop&w=1920&h=600',
      title: 'New iPhone 14 Pro',
      description: 'Experience the power of innovation with up to 20% off on the latest iPhone models',
      cta: 'Shop Now',
      discount: 'Save 20%'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1920&h=600',
      title: 'MacBook Pro M2',
      description: 'Unleash your creativity with the all-new MacBook Pro featuring the M2 chip',
      cta: 'Learn More',
      discount: 'Save $200'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1920&h=600',
      title: 'Gaming Laptops',
      description: 'Level up your gaming experience with premium gaming laptops',
      cta: 'Explore Now',
      discount: 'Up to 30% Off'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    'Electronics', 'Fashion', 'Home & Living', 'Books', 'Sports',
    'Beauty', 'Toys', 'Automotive', 'Grocery'
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: '$129.99',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&h=300'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: '$199.99',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&h=300'
    },
    {
      id: 3,
      name: 'Laptop Pro',
      price: '$999.99',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=300&h=300'
    },
    {
      id: 4,
      name: 'Gaming Console',
      price: '$499.99',
      image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&fit=crop&w=300&h=300'
    }
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="header-top">
          <div className="logo">
            <FiMenu className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} />
            <h1>ShopHub</h1>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search for products, brands and more..." />
            <FiSearch className="search-icon" />
          </div>
          <div className="header-actions">
            <div className="action-item">
              <FiUser />
              {isLoggedIn==false&& <Link to="/login">
                Login
              </Link>}{
                isLoggedIn==true &&  <span>{name}</span>

              }
              
            </div>
            <div className="action-item">
              <FiShoppingCart />
              
              <span>Cart</span>
                      
            </div>
          </div>
        </div>
        <nav className={`categories ${isMenuOpen ? 'open' : ''}`}>
          {categories.map((category, index) => (
            <a key={index} href="#" className="category-item">{category}</a>
          ))}
        </nav>
      </header>

      <main>
        <section className="carousel-section">
          <div className="carousel-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="carousel-slide"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7 }}
                style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
              >
                <div className="carousel-overlay"></div>
                <div className="carousel-content">
                  <motion.div
                    className="discount-badge"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {slides[currentSlide].discount}
                  </motion.div>
                  <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {slides[currentSlide].title}
                  </motion.h2>
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                  <motion.button
                    className="carousel-cta"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {slides[currentSlide].cta}
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="carousel-controls">
              <button 
                className="carousel-arrow left"
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              >
                ‹
              </button>
              <button 
                className="carousel-arrow right"
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              >
                ›
              </button>
            </div>
            <div className="carousel-indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="featured-products">
          <h3>Featured Products</h3>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="product-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p className="price">{product.price}</p>
                <button className="add-to-cart">Add to Cart</button>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <motion.div className="footer-section">
            <h4>About ShopHub</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press Releases</a></li>
              <li><a href="#">Corporate Information</a></li>
            </ul>
          </motion.div>

          <motion.div className="footer-section">
            <h4>Help & Support</h4>
            <ul>
              <li><a href="#">Customer Service</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </motion.div>

          <motion.div className="footer-section">
            <h4>Policy</h4>
            <ul>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </motion.div>

          <motion.div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ShopHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;