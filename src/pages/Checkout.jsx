import { useCart } from '../context/CartContext'
import CheckoutForm from '../components/Checkout/CheckoutForm'
import '../styles/checkout.css'

function Checkout() {
  const { cart, getTotal } = useCart()

  return (
    <div className="container">
      <h1 className="checkout-title">Checkout</h1>
      <div className="checkout-grid">
        <div className="order-summary">
          <h2>Order Summary</h2>
          {cart.map((item) => (
            <div key={item.id} className="order-item">
              <span>{item.title}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <p className="order-total">Total: ${getTotal().toFixed(2)}</p>
        </div>
        <CheckoutForm />
      </div>
    </div>
  )
}

export default Checkout