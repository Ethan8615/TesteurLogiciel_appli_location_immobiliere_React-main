import './Footer.css'

// Footer uses a dark logo PNG when available. Place `V2_kasa_logo_noir.png` in `src/assets/`.
const logoPath = '/src/assets/V2_kasa_logo_noir.png'

const Footer = () => {
  return (
    <footer className="footer">
      <img
        src={logoPath}
        alt="Kasa logo"
        className="footer-logo-img"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
          const fallback = document.getElementById('footer-logo-fallback')
          if (fallback) fallback.style.display = 'inline-block'
        }}
        onLoad={(e) => {
          const fallback = document.getElementById('footer-logo-fallback')
          if (fallback) fallback.style.display = 'none'
        }}
      />

      <svg id="footer-logo-fallback" className="footer-logo" width="80" height="36" viewBox="0 0 80 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <text x="0" y="28" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="28" fill="#FFFFFF">K</text>
        <circle cx="22" cy="14" r="6" fill="#FFFFFF" />
        <text x="30" y="28" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="28" fill="#FFFFFF">sa</text>
      </svg>

      <p className="footer-copy">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
