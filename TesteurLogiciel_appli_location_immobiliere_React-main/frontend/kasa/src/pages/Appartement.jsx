import { useState } from 'react'
import { Link, Navigate, NavLink, useParams } from 'react-router-dom'
import logements from '../data/logements'
import logo from '../assets/V2_kasa_logo.png'
import footerLogo from '../assets/V2_kasa_logo_noir.png'

const Appartement = () => {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)
  const [currentImage, setCurrentImage] = useState(0)
  const [openSections, setOpenSections] = useState({})

  if (!logement) {
    return <Navigate to="/404" replace />
  }

  const pictures = logement.pictures?.length ? logement.pictures : [logement.cover]
  const hasMultiplePictures = pictures.length > 1
  const rating = Math.round(Number(logement.rating))
  const hostInitials = logement.host.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  const previousImage = () => {
    setCurrentImage((index) => (index === 0 ? pictures.length - 1 : index - 1))
  }

  const nextImage = () => {
    setCurrentImage((index) => (index === pictures.length - 1 ? 0 : index + 1))
  }

  const toggleSection = (section) => {
    setOpenSections((current) => ({
      ...current,
      [section]: !current[section],
    }))
  }

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
        <div className="logement">
          <section className="carousel" aria-label="Photos du logement">
            <img src={pictures[currentImage]} alt="" className="carousel__img" />

            {hasMultiplePictures && (
              <>
                <button
                  type="button"
                  className="carousel__btn carousel__btn--left"
                  onClick={previousImage}
                  aria-label="Image precedente"
                >
                  {'<'}
                </button>
                <button
                  type="button"
                  className="carousel__btn carousel__btn--right"
                  onClick={nextImage}
                  aria-label="Image suivante"
                >
                  {'>'}
                </button>
                <span className="carousel__count">{currentImage + 1} / {pictures.length}</span>
              </>
            )}
          </section>

          <div className="logement__top">
            <div className="logement__meta">
              <h1 className="logement__title">{logement.title}</h1>
              <p className="logement__location">{logement.location || logement.tags.at(-1)}</p>
              <div className="logement__tags">
                {logement.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="logement__host">
              <div className="host__info">
                <span className="host__name">{logement.host.name}</span>
                {logement.host.picture ? (
                  <img src={logement.host.picture} alt={logement.host.name} className="host__avatar" />
                ) : (
                  <div className="host__avatar">{hostInitials}</div>
                )}
              </div>

              <div className="stars" aria-label={`Note : ${rating} sur 5`}>
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} className={index < rating ? 'star star--filled' : 'star star--empty'}>
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="logement__collapses">
            <article className="collapse">
              <button
                type="button"
                className="collapse__header"
                onClick={() => toggleSection('description')}
                aria-expanded={Boolean(openSections.description)}
              >
                <span className="collapse__title">Description</span>
                <span className={openSections.description ? 'collapse__arrow collapse__arrow--open' : 'collapse__arrow'}>
                  v
                </span>
              </button>
              <div className={openSections.description ? 'collapse__content collapse__content--open' : 'collapse__content'}>
                <p>{logement.description}</p>
              </div>
            </article>

            <article className="collapse">
              <button
                type="button"
                className="collapse__header"
                onClick={() => toggleSection('equipments')}
                aria-expanded={Boolean(openSections.equipments)}
              >
                <span className="collapse__title">Equipements</span>
                <span className={openSections.equipments ? 'collapse__arrow collapse__arrow--open' : 'collapse__arrow'}>
                  v
                </span>
              </button>
              <div className={openSections.equipments ? 'collapse__content collapse__content--open' : 'collapse__content'}>
                <ul className="equipment-list">
                  {logement.equipments.map((equipment) => (
                    <li key={equipment}>{equipment}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </main>

      <footer className="footer">
        <img src={footerLogo} alt="Kasa logo" className="footer-logo-img" />
        <p className="footer-copy">© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  )
}

export default Appartement
