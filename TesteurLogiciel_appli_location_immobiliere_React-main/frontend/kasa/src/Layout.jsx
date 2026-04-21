import { Outlet, Link, NavLink } from 'react-router-dom'
import Footer from './components/Footer'
import './Layout.css'

// Path to the new logo file. Place `V2_kasa_logo.png` inside `src/assets/`.
const logoPath = '/src/assets/V2_kasa_logo.png'

const Layout = () => {
  return (
    <div className="app-root">
      <header className="site-header">
        <nav className="nav">
          {/* Prefer the provided PNG logo; fall back to inline SVG if image is missing */}
          <Link to="/" className="logo" aria-label="Kasa - Accueil">
            <img
              src={logoPath}
              alt="Kasa logo"
              className="logo-img"
              onError={(e) => {
                // hide broken image and reveal fallback SVG
                e.currentTarget.style.display = 'none'
                const fallback = document.getElementById('logo-fallback')
                if (fallback) fallback.style.display = 'inline-block'
              }}
              onLoad={(e) => {
                // hide fallback SVG when image loads
                const fallback = document.getElementById('logo-fallback')
                if (fallback) fallback.style.display = 'none'
              }}
            />

            <svg id="logo-fallback" width="80" height="36" viewBox="0 0 80 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
              <text x="0" y="28" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="28" fill="#FF6060">K</text>
              <circle cx="22" cy="14" r="6" fill="#FF6060" />
              <text x="30" y="28" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="28" fill="#FF6060">sa</text>
            </svg>
          </Link>

          <ul className="nav-list">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                À Propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
