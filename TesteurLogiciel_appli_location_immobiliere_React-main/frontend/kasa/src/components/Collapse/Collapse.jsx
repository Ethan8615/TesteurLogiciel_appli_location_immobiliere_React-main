import { useState } from 'react'
import ChevronIcon from '../icons/ChevronIcon'
import styles from './Collapse.module.css'

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <article className={styles.collapse}>
      <button
        type="button"
        className={styles.header}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span className={styles.title}>{title}</span>
        <ChevronIcon
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}
          ariaHidden
        />
      </button>

      <div className={`${styles.content} ${isOpen ? styles.open : ''}`}>
        <div className={styles.contentBody}>{content}</div>
      </div>
    </article>
  )
}

export default Collapse
