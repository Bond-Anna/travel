import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import Logo from 'sources/common/Logo'
import CallMeDecor from 'sources/common/callMeDecor'
import Burger from 'sources/common/BurgerIcon'
import styles from './styles.module.scss'

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  console.log(isActive, 'isActive')

  const onBurgerClick = () => {
    setIsActive(true)
  }

  useEffect(() => {
    if (isActive) {
      // @ts-ignore
      document.querySelector('#root').styles.overflow = 'hidden'
    }
  }, [isActive])

  return (
    <div className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <Logo />
      </NavLink>
      <ul className={classNames(styles.menu, { [styles.mobile]: isActive })}>
        <li className={styles.menuItem}>
          <NavLink to="#">Home</NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink to="#">Luxury packages</NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink to="#">Book with us</NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink to="#">Why Lux Trips</NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink to="#">Contact</NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink to="#">Client Area</NavLink>
        </li>
      </ul>
      <button className={styles.btn}>
        Call Me<span className={styles.btnText}> Back</span>
        {/* <CallMeDecor /> */}
      </button>
      <span className={styles.burger} onClick={onBurgerClick}>
        <Burger />
      </span>
    </div>
  )
}

export default Header
