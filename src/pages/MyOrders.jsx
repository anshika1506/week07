import '../styles/myorders.css'

function MyOrders() {
  const orders = [
    { id: 'ORD001', date: '2025-07-15', total: 99.99 },
    { id: 'ORD002', date: '2025-07-10', total: 49.99 },
    { id: 'ORD003', date: '2025-07-05', total: 129.99 },
  ]

  return (
    <div className="myorders-page">
      <div className="myorders-container">
        <h2>My Orders</h2>
        {orders.length > 0 ? (
          <ul className="orders-list">
            {orders.map((order) => (
              <li key={order.id} className="order-item">
                <span>Order ID: {order.id}</span>
                <span>Date: {order.date}</span>
                <span>Total: ${order.total}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No orders yet.</p>
        )}
      </div>
    </div>
  )
}

export default MyOrders