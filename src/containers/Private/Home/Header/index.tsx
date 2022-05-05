import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import Logo from 'sources/common/Logo'
import Burger from 'sources/common/BurgerIcon'
import styles from './styles.module.scss'

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const onBurgerClick = (): void => {
    setIsActive(!isActive)
  }

  useEffect(() => {
    if (isActive) {
      document.querySelector('body')!.style.overflowY = 'hidden'
    } else {
      // @ts-ignore
      document.querySelector('body').style.overflowY = 'initial'
    }
  }, [isActive])

  return (
    <div className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <Logo />
      </NavLink>
      <div className={cn(styles.menu, { [styles.mobile]: isActive })}>
        <div className={cn(styles.mobileHeader, { [styles.mobileActive]: isActive })}>
          <button className={styles.btn}>
            Call Me<span className={styles.btnText}> Back</span>
          </button>
          <NavLink to="/" className={styles.logo}>
            <Logo />
          </NavLink>
          <span className={styles.burger} onClick={onBurgerClick}>
            <Burger />
          </span>
        </div>

        <ul className={cn(styles.menuList, { [styles.menuListMob]: isActive })}>
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
      </div>

      <button className={styles.btn}>
        Call Me<span className={styles.btnText}> Back</span>
      </button>
      <span className={styles.burger} onClick={onBurgerClick}>
        <Burger />
      </span>
    </div>
  )
}

export default Header
