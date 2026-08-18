import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import './Layout.css'

const Layout = () => {
  return (
    <div className="app-root">
      <Header />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout

