import { Link } from 'react-router-dom'
import { FaShoppingCart, FaSearch, FaUser, FaListAlt, FaSignInAlt } from 'react-icons/fa'
import { useCart } from '../../context/CartContext'
import '../../styles/navbar.css'

function Navbar() {
  const { cart } = useCart()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          E-Shop
        </Link>
        <div className="navbar-links">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
            />
          </div>
          <Link to="/products">Products</Link>
          <Link to="/login" className="nav-icon">
            <FaSignInAlt /> Login
          </Link>
          <Link to="/myorders" className="nav-icon">
            <FaListAlt /> My Orders
          </Link>
          <Link to="/account" className="nav-icon">
            <FaUser /> Account
          </Link>
          <Link to="/cart" className="cart-link">
            <FaShoppingCart className="cart-icon" />
            {cart.length > 0 && (
              <span className="cart-count">{cart.length}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar