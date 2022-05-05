import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import Logo from 'sources/common/Logo'
import styles from './styles.module.scss'

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <NavLink to="/">
        <Logo style={styles.logoSizes} />
      </NavLink>
      <ul className={styles.footerMenu}>
        <li className={styles.blockMenuItem}>
          <NavLink to="#">Luxury packages</NavLink>
        </li>
        <li className={styles.blockMenuItem}>
          <NavLink to="#">Book with us</NavLink>
        </li>
        <li className={styles.footerBtn}>
          <NavLink to="#">Call Me Back</NavLink>
        </li>
        <li className={styles.blockMenuItem}>
          <NavLink to="#">Why Lux Trips</NavLink>
        </li>
        <li className={cn(styles.blockMenuItem, styles.lastEl)}>
          <NavLink to="#">Contact</NavLink>
        </li>
      </ul>
      <div className={styles.footerBottom}>
        <p>© 2021 All Rights Reserved | Luxtrips</p>
        <p>Company Site | Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer
