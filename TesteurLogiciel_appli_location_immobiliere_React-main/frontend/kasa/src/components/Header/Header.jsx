import { Link, NavLink } from 'react-router-dom'

import styles from './Header.module.css'

// Path to the logo file (served by Vite as a static asset)
const logoPath = '/src/assets/V2_kasa_logo.png'

const Header = () => {
  return (
    <header className={styles.siteHeader}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo} aria-label="Kasa - Accueil">
          <img
            src={logoPath}
            alt="Kasa logo"
            className={styles.logoImg}
            onError={(e) => {
              // hide broken image and reveal fallback SVG
              e.currentTarget.style.display = 'none'
              const fallback = document.getElementById('logo-fallback')
              if (fallback) fallback.style.display = 'inline-block'
            }}
            onLoad={() => {
              const fallback = document.getElementById('logo-fallback')
              if (fallback) fallback.style.display = 'none'
            }}
          />

          <svg
            id="logo-fallback"
            width="80"
            height="36"
            viewBox="0 0 80 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'none' }}
          >
            <text
              x="0"
              y="28"
              fontFamily="Montserrat, sans-serif"
              fontWeight="700"
              fontSize="28"
              fill="#FF6060"
            >
              K
            </text>
            <circle cx="22" cy="14" r="6" fill="#FF6060" />
            <text
              x="30"
              y="28"
              fontFamily="Montserrat, sans-serif"
              fontWeight="700"
              fontSize="28"
              fill="#FF6060"
            >
              sa
            </text>
          </svg>
        </Link>

        <ul className={styles.navList}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink)}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink)}
            >
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

