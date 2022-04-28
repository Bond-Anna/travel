import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../../../sources/common/Logo'
import CallMeDecor from 'sources/common/callMeDecor'
//styles
import st from './header.module.scss'

const Header: React.FC = () => {
  return (
    <div className={st.header}>
      <Logo />
      <ul className={st.menu}>
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
      </ul>
      <button className={st.btn}>
        Call Me Back
        <CallMeDecor />
      </button>
    </div>
  )
}

export default Header
