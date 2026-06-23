import { Navigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Profile.css'

//orders
const orders = [
  { id: 1, date: '2026-06-01', total: 218, status: 'pending' },
  { id: 2, date: '2026-05-12', total: 89, status: 'delivered' },
  { id: 3, date: '2026-04-28', total: 278, status: 'delivered' },
]

function Profile() {
  const { user, isLoggedIn, logout } = useAuth()

  if (!isLoggedIn) return <Navigate to="/login" replace />

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-header">
          <div className="profile-avatar">{user.name[0].toUpperCase()}</div>
          <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
          <button className="btn btn-ghost" onClick={logout}>Sign out</button>
        </div>

        <h2 className="profile-section-title">Your orders</h2>
        <div className="orders-list">
          {orders.map((o) => (
            <div key={o.id} className="order-card">
              <div>
                <span className="order-id">Order #{o.id}</span>
                <span className="order-date">{o.date}</span>
              </div>
              <span className={`status-pill ${o.status}`}>{o.status}</span>
              <span className="order-total">${o.total}</span>
            </div>
          ))}
        </div>

        <Link to="/shop" className="btn btn-primary">Continue shopping</Link>
      </div>
    </div>
  )
}

export default Profile
