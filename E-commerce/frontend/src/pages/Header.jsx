import { useState, useEffect } from 'react';
import { FiSearch, FiShoppingCart, FiUser, FiMenu } from 'react-icons/fi';
import '../CSS/Header.css';
import {Link} from 'react-router-dom'
import {  useNavigate } from 'react-router-dom';




function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
              <Link to="/login">
           <span>Account</span>
              </Link>
            </div>
            <div className="action-item">
              <FiShoppingCart />
              
              <span>Cart</span>
                      
            </div>
          </div>
        </div>
        <nav className={`categories ${isMenuOpen ? 'open' : ''}`}>
          {categories.map((category, index) => (
            <a key={index} href="#" className="category-item" onClick={(e) => {
              e.preventDefault();
              if (category === 'Electronics') {
                navigate('/electronics');
              }
            }}>{category}</a>
          ))}
        </nav>
      </header>
);

}

export default Header;