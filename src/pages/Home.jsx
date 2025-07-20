import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../styles/home.css'

function Home() {
  const flashSaleEnd = new Date('2025-07-20T23:59:00+05:30').getTime() // July 20, 2025, 11:59 PM IST
  const [flashSaleTime, setFlashSaleTime] = useState(Math.floor((flashSaleEnd - new Date().getTime()) / 1000))

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = Math.floor((flashSaleEnd - now) / 1000)
      setFlashSaleTime(distance > 0 ? distance : 0)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hrs}h ${mins}m ${secs}s`
  }

  const trendingItems = [
    { id: 1, title: 'Wireless Headphones', price: 49.99, image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg' }, // Updated image
    { id: 2, title: 'Smart Watch', price: 99.99, image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
    { id: 3, title: 'Gaming Mouse', price: 29.99, image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg' },
  ]

  const flashSaleItems = [
    { id: 4, title: 'Laptop Backpack', price: 39.99, originalPrice: 59.99, image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' },
    { id: 5, title: 'Smart Speaker', price: 79.99, originalPrice: 99.99, image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UL640_QL65_ML3_.jpg' }, // Updated image
  ]

  const recommendedItems = [
    { id: 6, title: 'LED Monitor', price: 129.99, image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg' },
    { id: 7, title: 'Bluetooth Speaker', price: 45.99, image: 'https://fakestoreapi.com/img/61mtL65D4CL._AC_SX679_.jpg' }, // Updated image
  ]

  const mostlySoldItems = [
    { id: 8, title: 'Running Shoes', price: 59.99, image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' },
    { id: 9, title: 'T-Shirt', price: 19.99, image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
  ]

  const sponsoredItems = [
    { id: 10, title: 'Premium Headset', price: 69.99, image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg', sponsor: 'TechBrand' }, // Updated image
    { id: 11, title: 'Smart Keyboard', price: 89.99, image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg', sponsor: 'OfficePro' },
    { id: 12, title: 'Wireless Mouse', price: 29.99, image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UL640_QL65_ML3_.jpg', sponsor: 'GadgetZone' },
    { id: 13, title: 'Gaming Chair', price: 149.99, image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', sponsor: 'ComfortTech' },
    { id: 14, title: 'Smart Light Bulb', price: 19.99, image: 'https://fakestoreapi.com/img/61mtL65D4CL._AC_SX679_.jpg', sponsor: 'HomeSmart' },
  ]

  return (
    <div className="home-page">
      <section className="hero fade-in">
        <div className="hero-content">
          <h1>Welcome to E-Shop</h1>
          <p>Discover the latest trends and unbeatable deals!</p>
          <Link to="/products" className="shop-now">
            Shop Now
          </Link>
        </div>
      </section>

      <div className="top-sections">
        <section className="trending-section fade-in">
          <h2>Trending Items</h2>
          <div className="trending-items">
            {trendingItems.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="trending-item">
                <img src={item.image} alt={item.title} className="trending-item-image" />
                <div className="trending-item-details">
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="flash-sale-section fade-in">
          <h2>Flash Sale <span className="timer">Ends: July 20, 2025, 11:59 PM IST ({formatTime(flashSaleTime)})</span></h2>
          <div className="flash-sale-items">
            {flashSaleItems.map((item) => (
              <div key={item.id} className="flash-sale-item">
                <img src={item.image} alt={item.title} className="flash-sale-item-image" />
                <div className="flash-sale-item-details">
                  <h3>{item.title}</h3>
                  <p className="flash-sale-price">${item.price} <span className="original-price">${item.originalPrice}</span></p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="sponsored-section fade-in">
        <h2>Sponsored Products</h2>
        <div className="sponsored-items">
          {sponsoredItems.map((item) => (
            <div key={item.id} className="sponsored-item">
              <img src={item.image} alt={item.title} className="sponsored-item-image" />
              <div className="sponsored-item-details">
                <h3>{item.title}</h3>
                <p>${item.price} <span className="sponsor-label">Sponsored by {item.sponsor}</span></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bottom-sections">
        <section className="recommended-section fade-in">
          <h2>Recommended For You</h2>
          <div className="recommended-items">
            {recommendedItems.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="recommended-item">
                <img src={item.image} alt={item.title} className="recommended-item-image" />
                <div className="recommended-item-details">
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mostly-sold-section fade-in">
          <h2>Mostly Sold Items</h2>
          <div className="mostly-sold-items">
            {mostlySoldItems.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="mostly-sold-item">
                <img src={item.image} alt={item.title} className="mostly-sold-item-image" />
                <div className="mostly-sold-item-details">
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <section className="delivery-info fade-in">
        <h2>Fast & Reliable Delivery</h2>
        <p>Estimated delivery: <strong>2-3 business days</strong> for in-stock items.</p>
        <p>Free shipping on orders over $50!</p>
      </section>
    </div>
  )
}

export default Home