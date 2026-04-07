import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404 — Page introuvable</h1>
      <p>L'URL demandée n'existe pas ou a été mal saisie.</p>
      <p><Link to="/">Retour à l'accueil</Link></p>
    </div>
  )
}

export default NotFound
