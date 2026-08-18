import { Link } from 'react-router-dom'
import './PropertyCard.css'

const PropertyCard = ({ id, title, cover }) => {
  return (
    <Link to={`/logement/${id}`} className="property-card">
      <div
        className="property-card__bg"
        style={{ backgroundImage: `url(${cover})` }}
      />
      <div className="property-card__overlay" />
      <p className="property-card__title">{title}</p>
    </Link>
  )
}

export default PropertyCard
