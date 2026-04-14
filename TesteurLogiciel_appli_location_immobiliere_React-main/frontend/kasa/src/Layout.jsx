import { Outlet, Link } from 'react-router-dom'
import Footer from './components/Footer'
import logoImg from './assets/kasa_logo.svg'
import './App.css'

const Layout = () => {
  return (
    <div className="app-root">
      <header className="site-header">
        <nav className="nav">
          <Link to="/" className="logo">
            <img src={logoImg} alt="Kasa" />
          </Link>

          <ul className="nav-list">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
