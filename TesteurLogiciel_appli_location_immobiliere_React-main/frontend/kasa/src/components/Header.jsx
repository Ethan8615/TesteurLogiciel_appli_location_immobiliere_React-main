import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="site-header">
      <nav className="nav">
        <Link to="/" className="logo">Kasa</Link>
        <ul className="nav-list">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À propos</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
