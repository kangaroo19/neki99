import styles from './WindowContainer.module.css'

export default function WindowContainer({ children }) {
  return <div className={styles.boxContainer}>{children}</div>
}
