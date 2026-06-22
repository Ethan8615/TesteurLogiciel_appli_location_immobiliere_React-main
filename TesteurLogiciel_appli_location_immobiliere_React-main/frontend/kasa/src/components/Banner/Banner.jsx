import styles from './Banner.module.css'

const Banner = ({ backgroundImage, text }) => {
  return (
    <section
      className={styles.banner}
      role="region"
      aria-label="Bannière"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay} />
      {text ? <p className={styles.text}>{text}</p> : null}
    </section>
  )
}

export default Banner

