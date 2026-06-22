import Collapse from '../components/Collapse/Collapse'
import Banner from '../components/Banner/Banner'
import imageAPropos from '../assets/image_a_propos.jpg'
import './About.css'

const aboutItems = [
  {
    title: 'Fiabilité',
    content:
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes nos annonces sont vérifiées par notre équipe.',
  },
  {
    title: 'Respect',
    content:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de mauvaise foi sera sanctionné dans les plus brefs délais.',
  },
  {
    title: 'Service',
    content:
      'Nos équipes conseillers et nos algorithmes de matching automatiques s\'assurent de toujours trouver le logement qui vous correspond le mieux.',
  },
  {
    title: 'Sécurité',
    content:
      'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité légaux.',
  },
]

const About = () => {
  return (
    <div className="about">
      <Banner backgroundImage={imageAPropos} />

      <div className="about__content">
        {aboutItems.map((item) => (
          <Collapse key={item.title} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  )
}

export default About

