import React from 'react'
import BlackDecor from 'sources/common/blackDecorBtn'
import st from './card.module.scss'

type Props = {
  src: any
  title: string
  text: string
}

const Card = ({ src, title, text }: Props) => {
  return (
    <div className={st.cardBlock}>
      <div className={st.wrapper}>
        <img src={src} alt="" />
        <p className={st.cardTitle}>{title}</p>
      </div>
      <p className={st.cardText}>{text}</p>
      <button type="button" className={st.cardBtn}>
        Make A Request
        <span>
          <BlackDecor />
        </span>
      </button>
    </div>
  )
}

export default Card
