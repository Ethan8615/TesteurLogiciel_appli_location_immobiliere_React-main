import styles from './Rating.module.css'

const Rating = ({ rating }) => {
  const total = 5
  const filled = Math.round(Number(rating) || 0)

  return (
    <div className={styles.stars} aria-label={`Note : ${filled} sur 5`}>
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`${styles.star} ${i < filled ? styles.starFilled : styles.starEmpty}`}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default Rating

