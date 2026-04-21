import { useParams, Navigate } from 'react-router-dom'
import logements from '../data/logements'
import './Logement.css'

/* Étoiles de notation */
const Stars = ({ rating }) => {
  const total = 5
  const filled = parseInt(rating, 10)
  return (
    <div className="stars" aria-label={`Note : ${filled} sur 5`}>
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={`star ${i < filled ? 'star--filled' : 'star--empty'}`}>
          ★
        </span>
      ))}
    </div>
  )
}

/* Accordéon générique */
const Collapse = ({ title, children }) => (
  <details className="collapse">
    <summary className="collapse__header">
      <span>{title}</span>
      <span className="collapse__icon">▾</span>
    </summary>
    <div className="collapse__body">{children}</div>
  </details>
)

const Logement = () => {
  const { id } = useParams()
  const logement = logements.find((l) => l.id === id)

  if (!logement) return <Navigate to="/404" replace />

  return (
    <div className="logement">
      {/* Carrousel (simplifié : 1 image ici) */}
      <div className="carousel">
        <img
          src={logement.cover}
          alt={logement.title}
          className="carousel__img"
        />
        <span className="carousel__count">1 / 1</span>
      </div>

      {/* Infos principales */}
      <div className="logement__top">
        <div className="logement__meta">
          <h1 className="logement__title">{logement.title}</h1>
          <div className="logement__tags">
            {logement.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="logement__host">
          <div className="host__info">
            <span className="host__name">{logement.host.name}</span>
            <div className="host__avatar">
              {logement.host.name.charAt(0)}
            </div>
          </div>
          <Stars rating={logement.rating} />
        </div>
      </div>

      {/* Accordéons */}
      <div className="logement__collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul className="equipment-list">
            {logement.equipments.map((eq) => (
              <li key={eq}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  )
}

export default Logement
