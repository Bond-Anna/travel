import React, { FC } from 'react'
import TopEl from './TopEl'
import Subt from './Subt'
import DownEl from './DownEl'
import st from './blackDecor.module.scss'

const BlackDecor: FC = () => {
  return (
    <div className={st.wrapper}>
      <div className={st.top}>
        <TopEl />
      </div>
      <div className={st.sub}>
        <Subt />
      </div>
      <div className={st.bot}>
        <DownEl />
      </div>
    </div>
  )
}

export default BlackDecor
