import { Link } from 'react-router-dom'
import '../styles/login.css'

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Login functionality is mock. Redirecting to Account page.')
    window.location.href = '/account'
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username or Email</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p>
          Don’t have an account? <Link to="/account">Create one</Link>
        </p>
      </div>
    </div>
  )
}

export default Login