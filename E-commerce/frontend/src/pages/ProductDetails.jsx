import { useState } from 'react';
import { FiHeart, FiShare2 } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import '../CSS/ProductDetails.css';

function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState('Bass Black');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const productImages = [
    'https://images.unsplash.com/photo-1511385348-a52b4a160dc2',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    'https://images.unsplash.com/photo-1546435770-a3e426bf472b',
  ];

  const colorOptions = [
    { name: 'Bass Black', image: productImages[0] },
    { name: 'Pearl White', image: productImages[1] },
    { name: 'Ocean Blue', image: productImages[2] },
    { name: 'Midnight Gray', image: productImages[3] },
  ];

  const specifications = {
    general: [
      { label: 'Model ID', value: 'BHR8362IN' },
      { label: 'Color', value: 'Bass Black' },
      { label: 'Headphone Type', value: 'True Wireless' },
      { label: 'Inline Remote', value: 'No' },
      {
        label: 'Sales Package',
        value:
          '1 Pair of Earbuds, Charging Case, User Manual, Warranty Card, Extra Pair of Eartips',
      },
      { label: 'Connectivity', value: 'Bluetooth' },
      { label: 'Headphone Design', value: 'Earbud' },
      { label: 'Compatible Devices', value: 'Mobile, Laptop, Desktop' },
    ],
    productDetails: [
      { label: 'Sweat Proof', value: 'Yes' },
      { label: 'Deep Bass', value: 'Yes' },
      { label: 'Water Resistant', value: 'Yes' },
      { label: 'Headphone Driver Units', value: '12 mm' },
    ],
  };

  const handleAddToCart = () => {
    setQuantity(1);
  };

  const incrementQuantity = () => {
    if (quantity < 6) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-details-container">
      <div className="breadcrumb">
        {/* <span>Home</span> &gt; <span>Audio & Video</span> &gt; <span>Headset</span> &gt; <span>REDMI Buds 5A</span> */}
      </div>

      <div className="product-main">
        <div className="product-gallery">
          <div className="thumbnail-list">
            {productImages.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="main-image">
            <img src={productImages[selectedImage]} alt="Product main view" />
          </div>

          <div className="buttons-container" style={{ position: 'absolute' }}>
            {quantity === 0 ? (
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                ADD TO CART
              </button>
            ) : (
              <div className="quantity-control">
                <button className="decrement-btn" onClick={decrementQuantity}>
                  -
                </button>
                <span className="quantity-display">{quantity}</span>
                <button className="increment-btn" onClick={incrementQuantity}>
                  +
                </button>
              </div>
            )}
            <button className="buy-now-btn">BUY NOW</button>
          </div>
        </div>

        <div className="product-info">
          <div className="product-header">
            <h1>
              REDMI Buds 5A, 25dB ANC,30hr playtime, AI-ENC clear calls, BT 5.4,
              low latency gaming Bluetooth
            </h1>
            <div className="product-actions">
              <button className="action-button">
                <FiHeart /> Save
              </button>
              <button className="action-button">
                <FiShare2 /> Share
              </button>
            </div>
          </div>

          <div className="ratings">
            <span className="rating-badge">
              4.1 <FaStar />
            </span>
            <span className="rating-count">5,889 Ratings & 502 Reviews</span>
          </div>

          <div className="pricing">
            <div className="special-price">Special price</div>
            <div className="price-container">
              <span className="current-price">₹1,299</span>
              <span className="original-price">₹2,999</span>
              <span className="discount">56% off</span>
            </div>
          </div>

          <div className="offers">
            <h3>Available offers</h3>
            <ul className="offer-list">
              <li>
                <strong>Bank Offer</strong> 5% Unlimited Cashback on Flipkart
                Axis Bank Credit Card
                <span className="t-and-c">T&C</span>
              </li>
              <li>
                <strong>Bank Offer</strong> Flat ₹500 off on BOBCARD EMI
                Transactions, on orders of ₹15,000 and above
                <span className="t-and-c">T&C</span>
              </li>
              <li>
                <strong>Special Price</strong> Get extra 56% off (price
                inclusive of cashback/coupon)
                <span className="t-and-c">T&C</span>
              </li>
            </ul>
          </div>

          <div className="color-selection">
            <h3>Color</h3>
            <div className="color-options">
              {colorOptions.map((color) => (
                <div
                  key={color.name}
                  className={`color-option ${
                    selectedColor === color.name ? 'selected' : ''
                  }`}
                  onClick={() => setSelectedColor(color.name)}
                >
                  <img src={color.image} alt={color.name} />
                  <span>{color.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="specifications">
            <h2>Specifications</h2>

            <div className="spec-section">
              <h3>General</h3>
              <table className="spec-table">
                <tbody>
                  {specifications.general.map((spec, index) => (
                    <tr key={index}>
                      <td className="spec-label">{spec.label}</td>
                      <td className="spec-value">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="spec-section">
              <h3>Product Details</h3>
              <table className="spec-table">
                <tbody>
                  {specifications.productDetails.map((spec, index) => (
                    <tr key={index}>
                      <td className="spec-label">{spec.label}</td>
                      <td className="spec-value">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
