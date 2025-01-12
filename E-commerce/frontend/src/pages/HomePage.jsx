import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


import '../CSS/HomePage.css';
import {Link, useNavigate} from 'react-router-dom'

function HomePage() {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?auto=format&fit=crop&w=1920&h=600',
      title: 'New iPhone 14 Pro',
      description: 'Experience the power of innovation with up to 20% off on the latest iPhone models',
      cta: 'Shop Now',
      discount: 'Save 20%',
      link: '/product/iphone-14-pro'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1920&h=600',
      title: 'MacBook Pro M2',
      description: 'Unleash your creativity with the all-new MacBook Pro featuring the M2 chip',
      cta: 'Learn More',
      discount: 'Save $200',
      link: '/product/macbook-pro-m2'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1920&h=600',
      title: 'Gaming Laptops',
      description: 'Level up your gaming experience with premium gaming laptops',
      cta: 'Explore Now',
      discount: 'Up to 30% Off',
      link: '/product/gaming-laptops'
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
                  onClick={() => navigate(slides[currentSlide].link)}

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
      
  );

 }


export default HomePage;