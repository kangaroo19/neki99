import styles from './BgIcon.module.css'

export default function BgIcon({ title, imgObj, onDoubleClick }) {
  return (
    <div className={styles.boxContainer} onDoubleClick={onDoubleClick}>
      <img src={imgObj.src} alt={imgObj.alt} />
      <div>{title}</div>
    </div>
  )
}
