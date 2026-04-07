import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

const Layout = () => {
  return (
    <div className="app-root">
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
