import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import Logo from '../../../../sources/common/Logo'
import CallMeDecor from '../../../../sources/common/callMeDecor'
import st from './footer.module.scss'

const Footer: FC = () => {
  return (
    <div className={st.footer}>
      <NavLink to="/">
        <Logo style={st.logoSizes} />
      </NavLink>

      <div className={st.footerMenu}>
        <div className={st.blockMenu}>
          <NavLink to="#">
            <p className={st.blockMenuItem}>
              Luxury packages
              <span>
                <CallMeDecor />
              </span>
            </p>
          </NavLink>
          <NavLink to="#">
            <p className={st.blockMenuItem}>
              Book with us
              <span>
                <CallMeDecor />
              </span>
            </p>
          </NavLink>
        </div>
        <button type="button" className={st.footerBtn}>
          Call Me Back
          <CallMeDecor />
        </button>
        <div className={st.blockMenu}>
          <NavLink to="#">
            <p className={st.blockMenuItem}>
              Why Lux Trips
              <span>
                <CallMeDecor />
              </span>
            </p>
          </NavLink>
          <NavLink to="#">
            <p className={classNames(st.blockMenuItem, st.lastEl)}>
              Contact
              <span>
                <CallMeDecor />
              </span>
            </p>
          </NavLink>
        </div>
      </div>
      <div className={st.footerBottom}>
        <p>© 2021 All Rights Reserved | Luxtrips</p>
        <p>Company Site | Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer
