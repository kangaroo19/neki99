import styles from './BgIcon.module.css'

export default function BgIcon({ title, imgObj }) {
  return (
    <div className={styles.boxContainer}>
      <img src={imgObj.src} alt={imgObj.alt} />
      <div>{title}</div>
    </div>
  )
}
