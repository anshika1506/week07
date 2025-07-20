import { Link } from 'react-router-dom'
import '../styles/account.css'

function Account() {
  const user = {
    name: 'Anshika Singh',
    email: 'anshika156s@gmail.com',
    joined: '2025-07-01',
  }

  const handleLogout = () => {
    alert('Logout functionality is mock. Redirecting to Login page.')
    window.location.href = '/login'
  }

  return (
    <div className="account-page">
      <div className="account-container">
        <h2>My Account</h2>
        <div className="user-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Joined:</strong> {user.joined}</p>
        </div>
        <div className="account-actions">
          <Link to="/myorders" className="account-link">View Orders</Link>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Account