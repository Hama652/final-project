import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/*logo*/}
        <Link to="/" className="footer-logo">
          <img src={logo} alt="PlayVerse" />
          <span>Play<span className="verse">Verse</span></span>
        </Link>

        {/*socials*/}
        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 5a8.5 8.5 0 0 1-2.4.7A4.2 4.2 0 0 0 22.4 3a8.3 8.3 0 0 1-2.6 1A4.2 4.2 0 0 0 12 7.7 11.9 11.9 0 0 1 3.4 3.4 4.2 4.2 0 0 0 4.7 9 4.1 4.1 0 0 1 2.8 8.5v.1a4.2 4.2 0 0 0 3.3 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2 17.5 11.9 11.9 0 0 0 8.4 19c7.7 0 11.9-6.4 11.9-11.9v-.5A8.5 8.5 0 0 0 23 5z" />
            </svg>
          </a>
          <a href="https://discord.com" target="_blank" rel="noreferrer" aria-label="Discord">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4.4A19 19 0 0 0 15.3 3l-.2.5a14 14 0 0 1 4.1 2 13 13 0 0 0-11 0 14 14 0 0 1 4.1-2L12 3a19 19 0 0 0-4.7 1.4C4.3 8.5 3.5 12.6 3.9 16.6A19 19 0 0 0 9.6 19l.4-.6c-1-.3-1.8-.7-2.6-1.2l.6-.5a13 13 0 0 0 11 0l.6.5c-.8.5-1.6.9-2.6 1.2l.4.6a19 19 0 0 0 5.7-2.4c.5-4.6-.8-8.7-3.1-12.2zM9.7 14.4c-.9 0-1.7-.8-1.7-1.9s.8-1.9 1.7-1.9 1.7.9 1.7 1.9-.7 1.9-1.7 1.9zm4.6 0c-.9 0-1.7-.8-1.7-1.9s.8-1.9 1.7-1.9 1.7.9 1.7 1.9-.7 1.9-1.7 1.9z" />
            </svg>
          </a>
          <a href="https://twitch.tv" target="_blank" rel="noreferrer" aria-label="Twitch">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 2 3 6v13h4v3h3l3-3h4l5-5V2H4zm16 9-3 3h-4l-3 3v-3H6V4h14v7z" />
              <path d="M15 7h2v5h-2zM11 7h2v5h-2z" />
            </svg>
          </a>
        </div>

        {/*copyright*/}
        <p className="footer-copy">© 2026 PlayVerse. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
