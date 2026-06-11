import { useState } from 'react'
import PropTypes from 'prop-types'
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
        <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>⌄</span>
      </button>

      <div className={`${styles.content} ${isOpen ? styles.open : ''}`}>
        <div className={styles.contentBody}>{content}</div>
      </div>
    </article>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}

export default Collapse
