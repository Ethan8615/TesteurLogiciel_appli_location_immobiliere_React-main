import { useParams, Link } from 'react-router-dom'

const Fiche = () => {
  const { id } = useParams()

  return (
    <div>
      <h1>Fiche du logement</h1>
      <p>ID : <strong>{id}</strong></p>
      <p>Contenu de la fiche à implémenter (détails, images, description, hôte...)</p>
      <p><Link to="/">Retour à l'accueil</Link></p>
    </div>
  )
}

export default Fiche
