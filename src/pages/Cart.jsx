import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartItem from '../components/Cart/CartItem'
import '../styles/cart.css'

function Cart() {
  const { cart, getTotal } = useCart()

  return (
    <div className="container">
      <h1 className="cart-title">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="cart-total">
            <p>Total: ${getTotal().toFixed(2)}</p>
            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart