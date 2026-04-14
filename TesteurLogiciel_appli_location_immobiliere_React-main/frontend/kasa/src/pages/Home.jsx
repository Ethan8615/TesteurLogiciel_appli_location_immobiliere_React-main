import Banner from '../components/Banner'
import Card from '../components/Card'
import useProperties from '../hooks/useProperties'

const Home = () => {
  const { properties, loading, error } = useProperties()

  // Alias to match existing naming in the provided markup
  const logements = properties
  const PropertyCard = ({ id, title, cover }) => (
    <Card property={{ id, title, cover }} />
  )

  return (
    <div>
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

      <Banner title="Bienvenue sur Kasa" subtitle="Trouvez votre logement idéal" />

      <section className="container">
        <h2>Propriétés</h2>

        {loading && <p>Chargement des propriétés…</p>}
        {error && (
          <p className="error">Erreur lors de la récupération des données : {error.message}</p>
        )}

        {!loading && !error && (
          <>
            <p>Nombre de propriétés trouvées : {properties.length}</p>
            <div className="cards-grid">
              {properties.map((p) => (
                <Card key={p.id} property={p} />
              ))}
            </div>

            <h3>Liste des IDs disponibles</h3>
            <ul>
              {properties.map((p) => (
                <li key={`id-${p.id}`}>{p.id}</li>
              ))}
            </ul>
          </>
        )}
      </section>
    </div>
  )
}

export default Home
