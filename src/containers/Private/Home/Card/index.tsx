import { FC } from 'react'
import styles from './styles.module.scss'

interface Props {
  src: any
  title: string
  text: string
}

const Card: FC<Props> = ({ src, title, text }) => {
  const background = `url(${src}) center`

  return (
    <div className={styles.cardBlock}>
      <div className={styles.wrapper} style={{ background: background }}>
        <div className={styles.rhomb}></div>
        <div className={styles.innerRhomb}></div>
        <p className={styles.cardTitle}>{title}</p>
      </div>
      <p className={styles.cardText}>{text}</p>
      <button type="button" className={styles.cardBtn}>
        Make A Request
      </button>
    </div>
  )
}

export default Card
