import React, { FC } from 'react'
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
      <div className={styles.footerMenu}>
        <div className={cn(styles.blockMenu, styles.rightMenu)}>
          <NavLink to="#">
            <p className={styles.blockMenuItem}>Luxury packages</p>
          </NavLink>
          <NavLink to="#">
            <p className={cn(styles.blockMenuItem, styles.lastEl)}>Book with us</p>
          </NavLink>
        </div>
        <button type="button" className={styles.footerBtn}>
          Call Me Back
        </button>
        <div className={cn(styles.blockMenu, styles.leftMenu)}>
          <NavLink to="#">
            <p className={styles.blockMenuItem}>Why Lux Trips</p>
          </NavLink>
          <NavLink to="#">
            <p className={cn(styles.blockMenuItem, styles.lastEl)}>Contact</p>
          </NavLink>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2021 All Rights Reserved | Luxtrips</p>
        <p>Company Site | Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer
