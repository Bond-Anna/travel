import React from 'react'
import Rectangle from 'sources/subscribe/Rectangle'
import styles from './styles.module.scss'

const Subscribe: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.frame}>
        <Rectangle />
      </span>
      <p className={styles.title}>
        Get weekly inspiration and expert advice
        <span>Sign up for our Weekly Newsletter</span>
      </p>
      <form className={styles.subsForm}>
        <input type="email" placeholder="Email address" className={styles.subsFormInput} />
        <button className={styles.subsFormBtn}>Subscribe</button>
      </form>
      <div className={styles.shadow}></div>
    </div>
  )
}

export default Subscribe
