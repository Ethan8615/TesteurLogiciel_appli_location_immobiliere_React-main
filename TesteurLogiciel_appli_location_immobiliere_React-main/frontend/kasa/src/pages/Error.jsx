import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/V2_kasa_logo.png'
import footerLogo from '../assets/V2_kasa_logo_noir.png'

const Error = () => {
  return (
    <>
      <header className="site-header">
        <nav className="nav">
          <Link to="/" className="logo" aria-label="Kasa - Accueil">
            <img src={logo} alt="Kasa logo" className="logo-img" />
          </Link>

          <ul className="nav-list">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                A Propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <div className="notfound">
          <h1 className="notfound__code">404</h1>
          <p className="notfound__message">Oups ! La page que vous demandez n'existe pas.</p>
          <Link to="/" className="notfound__link">
            Retourner sur la page d'accueil
          </Link>
        </div>
      </main>

      <footer className="footer">
        <img src={footerLogo} alt="Kasa logo" className="footer-logo-img" />
        <p className="footer-copy">© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  )
}

export default Error
