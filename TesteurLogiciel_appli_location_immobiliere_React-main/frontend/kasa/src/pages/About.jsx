import './About.css'

const About = () => {
  return (
    <div className="about">
      <section className="about__hero" />

      <div className="about__content">
        <details className="collapse">
          <summary className="collapse__header">
            <span>Fiabilité</span>
            <span className="collapse__icon">▾</span>
          </summary>
          <div className="collapse__body">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements et toutes nos annonces
              sont vérifiées par notre équipe.
            </p>
          </div>
        </details>

        <details className="collapse">
          <summary className="collapse__header">
            <span>Respect</span>
            <span className="collapse__icon">▾</span>
          </summary>
          <div className="collapse__body">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa.
              Tout comportement discriminatoire ou de mauvaise foi sera
              sanctionné dans les plus brefs délais.
            </p>
          </div>
        </details>

        <details className="collapse">
          <summary className="collapse__header">
            <span>Service</span>
            <span className="collapse__icon">▾</span>
          </summary>
          <div className="collapse__body">
            <p>
              Nos équipes conseillers et nos algorithmes de matching
              automatiques s'assurent de toujours trouver le logement
              qui vous correspond le mieux.
            </p>
          </div>
        </details>

        <details className="collapse">
          <summary className="collapse__header">
            <span>Sécurité</span>
            <span className="collapse__icon">▾</span>
          </summary>
          <div className="collapse__body">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
              que pour les voyageurs, chaque logement correspond aux
              critères de sécurité légaux.
            </p>
          </div>
        </details>
      </div>
    </div>
  )
}

export default About
