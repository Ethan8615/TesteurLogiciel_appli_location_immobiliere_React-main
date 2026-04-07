import { Link } from 'react-router-dom'

const sampleListings = [
  { id: 'logement-1', title: 'Bel appartement en centre-ville' },
  { id: 'logement-2', title: 'Studio cosy proche métro' },
  { id: 'logement-3', title: 'Maison familiale avec jardin' },
]

const Home = () => {
  return (
    <div>
      <h1>Accueil</h1>
      <p>Bienvenue sur Kasa — liste d'exemples de logements :</p>
      <ul>
        {sampleListings.map((l) => (
          <li key={l.id}>
            <Link to={`/fiche/${l.id}`}>{l.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
