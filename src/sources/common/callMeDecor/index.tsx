import React from 'react'
import TopEl from './topEl'
import DownEl from './downEl'
import Subtr from './subtr'
import st from './callMeDecor.module.scss'

const CallMeDecor: React.FC = () => {
  return (
    <div className={st.wrapper}>
      <div className={st.top}>
        <TopEl />
      </div>
      <div className={st.sub}>
        <Subtr />
      </div>
      <div className={st.bot}>
        <DownEl />
      </div>
    </div>
  )
}

export default CallMeDecor
