import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../../../sources/common/Logo'
import CallMeDecor from '../../../../sources/common/callMeDecor'
import st from './footer.module.scss'

const Footer: FC = () => {
  return (
    <div className={st.footer}>
      <Logo style={st.logoSizes} />

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
            <p className={st.blockMenuItem}>
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
