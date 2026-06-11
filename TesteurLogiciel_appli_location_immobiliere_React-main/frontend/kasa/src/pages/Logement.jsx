import { useParams, Navigate } from 'react-router-dom'
import useProperty from '../hooks/useProperty'
import Carousel from '../components/Carousel'
import Collapse from '../components/Collapse/Collapse'
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

const Logement = () => {
  const { id } = useParams()
  const { property: logement, loading, error } = useProperty(id)

  if (loading) return <div className="logement"><p>Chargement du logement...</p></div>
  if (error || !logement) return <Navigate to="/404" replace />

  const images = (logement.pictures && logement.pictures.length > 0)
    ? logement.pictures.slice(0, 4)
    : [logement.cover]

  return (
    <div className="logement">
      <Carousel images={images} alt={logement.title} />

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
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={(
            <ul className="equipment-list">
              {logement.equipments.map((eq) => (
                <li key={eq}>{eq}</li>
              ))}
            </ul>
          )}
        />
      </div>
    </div>
  )
}

export default Logement
