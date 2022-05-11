import React, { useState } from 'react'
import cn from 'classnames'
import citys from '../store/citys'
import Cross from 'sources/common/cross'
import MyResponsiveLine from '../Graph'
import styles from './styles.module.scss'

export default function Card({ city, list }: { city: object; list: object }) {
  const [isCel, setIsCel] = useState(true)

  // @ts-ignore
  const date = new Date(list[0].dt_txt.slice(0, 10)).toUTCString().slice(0, -13)
  // @ts-ignore
  const time = list[0].dt_txt.slice(11, 16)

  // @ts-ignore
  const iconS = list[0].weather[0].icon
  const link = `http://openweathermap.org/img/wn/${iconS}@2x.png`

  const graphData: any[] = [{ id: 'japan', color: 'hsl(23, 70%, 50%)', data: [] }]
  // @ts-ignore
  const result = list.map((el: any): void => {
    console.log(
      { x: el.dt_txt.slice(8, 11), y: el.main.tempC },
      '{ x: el.dt_txt, y: el.main.tempC }'
    )
    // @ts-ignore
    return { x: el.dt_txt.slice(8, 11), y: el.main.tempC }
  })
  // @ts-ignore
  graphData[0].data = result
  console.log(graphData, 'graphData')

  const onBtnC = () => {
    setIsCel(true)
    // @ts-ignore
    citys.editCity({ isCel: true, id: city.id })
  }

  const onBtnF = () => {
    setIsCel(false)
    // @ts-ignore
    citys.editCity({ isCel: false, id: city.id })
  }

  return (
    <div
      className={cn(styles.card, {
        // @ts-ignore
        [styles.worm]: list[0].main.tempC > 0,
        // @ts-ignore
        [styles.cold]: list[0].main.tempC <= 0,
      })}
    >
      <div className={styles.topInfo}>
        <div className={styles.location}>
          {/* @ts-ignore */}
          {city.name}, {city.country}
        </div>
      </div>
      <div className={styles.weather}>
        <img src={link} alt="icon" />
        {/* @ts-ignore */}
        {list[0].weather[0].main}
      </div>
      <p className={styles.date}>
        {date}, {time}
      </p>
      <div className={styles.graph}>
        {/* @ts-ignore */}
        <MyResponsiveLine data={graphData} />
      </div>
      <div className={styles.bottomInfo}>
        <div>
          <div className={styles.bottomInfoTemperature}>
            {isCel ? (
              // @ts-ignore
              <span className={styles.degrees}>{list[0].main.tempC}</span>
            ) : (
              // @ts-ignore
              <span className={styles.degrees}>{list[0].main.tempF}</span>
            )}
            <div className={styles.units}>
              <button className={cn(styles.celsius, { [styles.active]: isCel })} onClick={onBtnC}>
                °C{' '}
              </button>
              <button
                className={cn(styles.fahrenheit, { [styles.active]: !isCel })}
                onClick={() => onBtnF()}
              >
                °F
              </button>
            </div>
          </div>
          <p className={styles.feels}>
            Feels like:{' '}
            {isCel ? (
              // @ts-ignore
              <span>{list[0].main.feelsC} °C</span>
            ) : (
              // @ts-ignore
              <span>{list[0].main.feelsF} °F</span>
            )}
          </p>
        </div>
        <ul className={styles.bottomInfoPrecipitation}>
          <li>
            Wind:{' '}
            <span
              className={cn(styles.worm, {
                // @ts-ignore
                [styles.cold]: list[0].main.tempC <= 0,
              })}
            >
              {/* @ts-ignore */}
              {list[0].wind.speed} m/s
            </span>
          </li>
          <li>
            Humidity:{' '}
            <span
              className={cn(styles.worm, {
                // @ts-ignore
                [styles.cold]: list[0].main.tempC <= 0,
              })}
            >
              {/* @ts-ignore */}
              {list[0].main.humidity} %
            </span>
          </li>
          <li>
            Pressure:{' '}
            <span
              className={cn(styles.worm, {
                // @ts-ignore
                [styles.cold]: list[0].main.tempC <= 0,
              })}
            >
              {/* @ts-ignore */}
              {list[0].main.pressure} Pa
            </span>
          </li>
        </ul>
      </div>
      {/* @ts-ignore */}
      <Cross trigger={() => citys.delCity(city.id)} className={styles.iconCross} />
    </div>
  )
}
