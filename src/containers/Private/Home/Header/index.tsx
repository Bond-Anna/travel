import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import Logo from '../../../../sources/common/Logo'
import CallMeDecor from '../../../../sources/common/callMeDecor'
// mob
import Burger from 'sources/common/BurgerIcon'
// import MenuRhomb from 'sources/common/MenuRhomb'
//styless
import st from './header.module.scss'

const Header: React.FC = () => {
  const [isActiv, setIsActive] = useState(false)

  const onBurgerClick = () => {
    setIsActive(true)
  }
  return (
    <div className={st.header}>
      <NavLink to="/" className={st.logo}>
        <Logo />
      </NavLink>
      <ul className={classNames(st.menu, { [st.mobile]: isActiv })}>
        <li className={st.menuItem}>
          <NavLink to="#">Home</NavLink>
        </li>
        <li className={st.menuItem}>
          <NavLink to="#">Luxury packages</NavLink>
        </li>
        <li className={st.menuItem}>
          <NavLink to="#">Book with us</NavLink>
        </li>
        <li className={st.menuItem}>
          <NavLink to="#">Why Lux Trips</NavLink>
        </li>
        <li className={st.menuItem}>
          <NavLink to="#">Contact</NavLink>
        </li>
        <li className={st.menuItem}>
          <NavLink to="#">Client Area</NavLink>
        </li>
        {/* <span className={st.rhombIcon}>
          <MenuRhomb />
        </span> */}
      </ul>
      <button className={st.btn}>
        Call Me<span className={st.btnText}> Back</span>
        <CallMeDecor />
      </button>
      <span className={st.burger} onClick={onBurgerClick}>
        <Burger />
      </span>
    </div>
  )
}

export default Header
