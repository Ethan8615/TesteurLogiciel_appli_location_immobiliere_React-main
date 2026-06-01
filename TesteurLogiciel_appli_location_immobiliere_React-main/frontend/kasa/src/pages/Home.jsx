import PropertyCard from '../components/PropertyCard'
import useProperties from '../hooks/useProperties'
import './Home.css'

const Home = () => {
  const { properties, loading, error } = useProperties()

  return (
    <div className="home">
      {/* Hero Banner */}
      <section className="hero">
        <div className="hero__overlay" />
        <p className="hero__tagline">Chez vous, partout et ailleurs</p>
      </section>

      <section className="listings">
        {loading && <p className="listings__status">Chargement des logements...</p>}
        {error && <p className="listings__status">Erreur : {error.message}</p>}
        {!loading && !error && (
          <div className="listings__grid">
            {properties.map((logement) => (
              <PropertyCard
                key={logement.id}
                id={logement.id}
                title={logement.title}
                cover={logement.cover}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Home
