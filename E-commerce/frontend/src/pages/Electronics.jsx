import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Electronics.css';

const Electronics = () => {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');

  const products = [
    // Mobiles
    {
      id: 1,
      name: "Samsung Galaxy S23 Ultra (256GB) - Phantom Black",
      price: 124999,
      originalPrice: 149900,
      discount: 17,
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&h=500",
      rating: 4.7,
      reviews: 12453,
      brand: "Samsung",
      category: "Mobiles"
    },
    {
      id: 2,
      name: "iPhone 14 Pro Max (256GB) - Deep Purple",
      price: 139900,
      originalPrice: 159900,
      discount: 13,
      image: "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?w=500&h=500",
      rating: 4.8,
      reviews: 32126,
      brand: "Apple",
      category: "Mobiles"
    },
    {
      id: 3,
      name: "Vivo V27 Pro (128GB) - Magic Blue",
      price: 37999,
      originalPrice: 42999,
      discount: 12,
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500",
      rating: 4.4,
      reviews: 8562,
      brand: "Vivo",
      category: "Mobiles"
    },
    {
      id: 4,
      name: "OnePlus 11R 5G (256GB) - Galactic Silver",
      price: 44999,
      originalPrice: 49999,
      discount: 10,
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500",
      rating: 4.6,
      reviews: 15234,
      brand: "OnePlus",
      category: "Mobiles"
    },
    {
      id: 5,
      name: "Xiaomi 13 Pro (256GB) - Ceramic Black",
      price: 79999,
      originalPrice: 89999,
      discount: 11,
      image: "https://images.unsplash.com/photo-1598524374912-6b0b0bdd5e4e?w=500&h=500",
      rating: 4.5,
      reviews: 6789,
      brand: "Xiaomi",
      category: "Mobiles"
    },

    // Mobile Accessories
    {
      id: 6,
      name: "Samsung Galaxy Buds2 Pro",
      price: 17999,
      originalPrice: 19999,
      discount: 10,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500",
      rating: 4.6,
      reviews: 4521,
      brand: "Samsung",
      category: "Mobile Accessories"
    },
    {
      id: 7,
      name: "Apple AirPods Pro (2nd Generation)",
      price: 26900,
      originalPrice: 29900,
      discount: 10,
      image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=500&h=500",
      rating: 4.8,
      reviews: 8956,
      brand: "Apple",
      category: "Mobile Accessories"
    },
    {
      id: 8,
      name: "OnePlus SuperVOOC 80W Charger",
      price: 2999,
      originalPrice: 3499,
      discount: 14,
      image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&h=500",
      rating: 4.5,
      reviews: 2345,
      brand: "OnePlus",
      category: "Mobile Accessories"
    },
    {
      id: 9,
      name: "iPhone 14 Pro Silicone Case",
      price: 4999,
      originalPrice: 5999,
      discount: 17,
      image: "https://images.unsplash.com/photo-1541877590-a229a13a2c7b?w=500&h=500",
      rating: 4.4,
      reviews: 1567,
      brand: "Apple",
      category: "Mobile Accessories"
    },

    // Laptops
    {
      id: 10,
      name: "HP Pavilion Gaming Laptop Ryzen 7",
      price: 82999,
      originalPrice: 94999,
      discount: 13,
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&h=500",
      rating: 4.5,
      reviews: 3245,
      brand: "HP",
      category: "Laptops"
    },
    {
      id: 11,
      name: "Dell XPS 13 Plus",
      price: 159999,
      originalPrice: 179999,
      discount: 11,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500",
      rating: 4.7,
      reviews: 2134,
      brand: "Dell",
      category: "Laptops"
    },
    {
      id: 12,
      name: "Lenovo ThinkPad X1 Carbon",
      price: 124999,
      originalPrice: 144999,
      discount: 14,
      image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=500&h=500",
      rating: 4.6,
      reviews: 1876,
      brand: "Lenovo",
      category: "Laptops"
    },
    {
      id: 13,
      name: "MacBook Pro M2 Pro",
      price: 199999,
      originalPrice: 219999,
      discount: 9,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500",
      rating: 4.9,
      reviews: 4532,
      brand: "Apple",
      category: "Laptops"
    },
    {
      id: 14,
      name: "Asus ROG Strix Scar 16",
      price: 224999,
      originalPrice: 249999,
      discount: 10,
      image: "https://images.unsplash.com/photo-1595327656903-2f54e37ce09b?w=500&h=500",
      rating: 4.8,
      reviews: 987,
      brand: "Asus",
      category: "Laptops"
    },

    // Cameras
    {
      id: 15,
      name: "Canon EOS R6 Mark II",
      price: 219999,
      originalPrice: 244999,
      discount: 10,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=500",
      rating: 4.8,
      reviews: 765,
      brand: "Canon",
      category: "Cameras"
    },
    {
      id: 16,
      name: "Sony Alpha A7 IV",
      price: 239999,
      originalPrice: 259999,
      discount: 8,
      image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=500&h=500",
      rating: 4.9,
      reviews: 543,
      brand: "Sony",
      category: "Cameras"
    },
    {
      id: 17,
      name: "Nikon Z6 II",
      price: 189999,
      originalPrice: 209999,
      discount: 10,
      image: "https://images.unsplash.com/photo-1617799899086-439167a0ce37?w=500&h=500",
      rating: 4.7,
      reviews: 432,
      brand: "Nikon",
      category: "Cameras"
    },
    {
      id: 18,
      name: "Canon EOS 90D",
      price: 119999,
      originalPrice: 134999,
      discount: 11,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500",
      rating: 4.6,
      reviews: 876,
      brand: "Canon",
      category: "Cameras"
    },
    {
      id: 19,
      name: "Sony ZV-E10",
      price: 64999,
      originalPrice: 69999,
      discount: 7,
      image: "https://images.unsplash.com/photo-1589712186148-03ec318289c0?w=500&h=500",
      rating: 4.5,
      reviews: 654,
      brand: "Sony",
      category: "Cameras"
    },
    {
      id: 20,
      name: "Nikon D780",
      price: 179999,
      originalPrice: 199999,
      discount: 10,
      image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=500&h=500",
      rating: 4.8,
      reviews: 321,
      brand: "Nikon",
      category: "Cameras"
    },
    {
      id: 21,
      name: "Fujifilm X-T5",
      price: 169999,
      originalPrice: 189999,
      discount: 11,
      image: "https://images.unsplash.com/photo-1588979355313-6711a095465f?w=500&h=500",
      rating: 4.7,
      reviews: 234,
      brand: "Fujifilm",
      category: "Cameras"
    }
  ];

  const brands = ["Apple", "Samsung", "Vivo", "OnePlus", "Xiaomi", "HP", "Dell", "Lenovo", "Asus", "Canon", "Sony", "Nikon", "Fujifilm"];
  const categories = ["Mobiles", "Mobile Accessories", "Laptops", "Cameras"];

  const handleBrandFilter = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  const handlePriceChange = (e) => {
    setPriceRange([parseInt(e.target.value), priceRange[1]]);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const filteredProducts = products.filter(product => {
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesRating = selectedRating === 0 || product.rating >= selectedRating;
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesBrand && matchesPrice && matchesRating && matchesCategory;
  });

  return (
    <div className="electronics-page">
      <div className="filters-section">
        <h3>Filters</h3>
        
        <div className="filter-group">
          <h4>Categories</h4>
          {categories.map(category => (
            <label key={category} className="filter-item">
              <input 
                type="checkbox"
                checked={selectedCategory === category}
                onChange={() => handleCategoryFilter(category)}
              />
              {category}
            </label>
          ))}
        </div>

        <div className="filter-group">
          <h4>Price Range</h4>
          <div className="price-range">
            <input 
              type="range" 
              min="0" 
              max="200000" 
              value={priceRange[0]} 
              onChange={handlePriceChange}
            />
            <div className="price-inputs">
              <input 
                type="number" 
                value={priceRange[0]} 
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
              />
              <span>to</span>
              <input 
                type="number" 
                value={priceRange[1]} 
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              />
            </div>
          </div>
        </div>

        <div className="filter-group">
          <h4>Brands</h4>
          {brands.map(brand => (
            <label key={brand} className="filter-item">
              <input 
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandFilter(brand)}
              />
              {brand}
            </label>
          ))}
        </div>

        <div className="filter-group">
          <h4>Customer Rating</h4>
          {[4, 3, 2, 1].map(rating => (
            <label key={rating} className="filter-item">
              <input 
                type="radio"
                name="rating"
                checked={selectedRating === rating}
                onChange={() => setSelectedRating(rating)}
              />
              {rating}★ & above
            </label>
          ))}
        </div>
      </div>

      <div className="products-section">
        <div className="products-header">
          <h2>Electronics {selectedCategory && `- ${selectedCategory}`}</h2>
          <span>{filteredProducts.length} Products</span>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-rating">
                  <span className="rating">
                    {product.rating}★
                  </span>
                  <span className="reviews">
                    ({product.reviews.toLocaleString()})
                  </span>
                </div>
                <div className="product-price">
                  <span className="current-price">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="original-price">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="discount">
                    {product.discount}% off
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Electronics;