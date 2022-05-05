import { FC } from 'react'
import Header from './Header'
import Card from './Card'
import Subscribe from './Subscribe'
import Footer from './Footer'
import imgArray from './ImgArray'
import styles from './styles.module.scss'

const Home: FC = () => {
  return (
    <div>
      <Header />
      <h1 className={styles.title}>Book with us</h1>
      <div className={styles.container}>
        <div className={styles.cards}>
          {imgArray.map(({ id, img, title, text }) => (
            <Card key={id} src={img} title={title} text={text} />
          ))}
        </div>
        <Subscribe />
        <Footer />
      </div>
    </div>
  )
}

export default Home
