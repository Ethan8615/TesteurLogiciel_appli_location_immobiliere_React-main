import PropertyCard from '../components/PropertyCard'
import logements from '../data/logements'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Banner */}
      <section className="hero">
        <div className="hero__overlay" />
        <p className="hero__tagline">Chez vous, partout et ailleurs</p>
      </section>

      {/* Grille de logements */}
      <section className="listings">
        <div className="listings__grid">
          {logements.map((logement) => (
            <PropertyCard
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
