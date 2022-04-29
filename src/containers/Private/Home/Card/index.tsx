import React from 'react'
import styles from './styles.module.scss'

type Props = {
  src: any
  title: string
  text: string
}

const Card = ({ src, title, text }: Props) => {
  return (
    <div className={styles.cardBlock}>
      <div className={styles.wrapper} style={{ background: `url(${src})` }}>
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
