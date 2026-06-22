import PropertyCard from '../components/PropertyCard'
import Banner from '../components/Banner/Banner'
import useProperties from '../hooks/useProperties'
import imageAccueil from '../assets/image_acceuil.jpg'
import './Home.css'

const Home = () => {
  const { properties, loading, error } = useProperties()

  return (
    <div className="home">
      <Banner backgroundImage={imageAccueil} text="Chez vous, partout et ailleurs" />

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

