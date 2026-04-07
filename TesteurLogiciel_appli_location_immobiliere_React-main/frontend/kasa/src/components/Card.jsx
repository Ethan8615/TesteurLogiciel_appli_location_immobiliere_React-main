import { Link } from 'react-router-dom'

const Card = ({ property }) => {
  if (!property) return null

  const { id, title, cover, location } = property

  return (
    <article className="card">
      <Link to={`/fiche/${id}`} className="card-link">
        {cover ? (
          <img src={cover} alt={title || 'Photo du logement'} className="card-cover" />
        ) : (
          <div className="card-cover placeholder" aria-hidden="true" />
        )}
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          {location && <p className="card-location">{location}</p>}
        </div>
      </Link>
    </article>
  )
}

export default Card
