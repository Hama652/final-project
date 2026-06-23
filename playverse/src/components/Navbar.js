import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import logo from '../assets/logo.png'
import './Navbar.css'

function Navbar() {
  const { cartCount } = useCart()
  const { isLoggedIn, user, logout } = useAuth()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function search(e) {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query)}`)
      setQuery('')
    }
  }

  function signOut() {
    logout()
    setMenuOpen(false)
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/*logo*/}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="PlayVerse" className="navbar-logo-img" />
          <div className="navbar-logo-text">Play<span className="verse">Verse</span></div>
        </Link>

        {/*menu*/}
        <ul className="navbar-menu">
          <li><NavLink to="/shop">Shop</NavLink></li>
          <li><NavLink to="/shop/gaming">Gaming</NavLink></li>
          <li><NavLink to="/shop/anime">Anime</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>

        {/*actions*/}
        <div className="navbar-actions">
          <form onSubmit={search} className="navbar-search">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>

          <Link to="/cart" className="icon-btn">
            🛒
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          {isLoggedIn ? (
            <div className="account-menu">
              <button className="account-avatar" onClick={() => setMenuOpen(!menuOpen)}>
                {user.name[0].toUpperCase()}
              </button>
              {menuOpen && (
                <>
                  <div className="account-backdrop" onClick={() => setMenuOpen(false)}></div>
                  <div className="account-dropdown">
                    <div className="account-dropdown-head">
                      <span className="account-dropdown-name">{user.name}</span>
                      <span className="account-dropdown-email">{user.email}</span>
                    </div>
                    <Link to="/profile" onClick={() => setMenuOpen(false)}>My profile</Link>
                    <button onClick={signOut}>Sign out</button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary navbar-signin">Sign in</Link>
          )}

          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/*mobile menu*/}
      {mobileOpen && (
        <div className="mobile-menu">
          <NavLink to="/shop" onClick={() => setMobileOpen(false)}>Shop</NavLink>
          <NavLink to="/shop/gaming" onClick={() => setMobileOpen(false)}>Gaming</NavLink>
          <NavLink to="/shop/anime" onClick={() => setMobileOpen(false)}>Anime</NavLink>
          <NavLink to="/about" onClick={() => setMobileOpen(false)}>About</NavLink>
          {isLoggedIn
            ? <NavLink to="/profile" onClick={() => setMobileOpen(false)}>My profile</NavLink>
            : <NavLink to="/login" onClick={() => setMobileOpen(false)}>Sign in</NavLink>}
        </div>
      )}
    </nav>
  )
}

export default Navbar
