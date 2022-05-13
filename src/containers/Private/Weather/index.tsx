import { FC, useEffect } from 'react'
import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import Autocomplete from 'react-google-autocomplete'
import citys from './store/citys'
import Card from './Card/Card'
import LangDrop from './LangDrop'
import styles from './styles.module.scss'

const Weather: FC = observer(() => {
  const [autocomplete, setAutocomplete] = useState<any>({})
  // @ts-ignore
  // console.log(autocomplete.value, 'autocomplete.value')

  const getWeather = (name: string): void => {
    citys.getCityWeather(name)
    // @ts-ignore
    setAutocomplete((autocomplete.value = ''))
  }

  useEffect(() => {
    if (!localStorage.getItem('geo')) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        citys.myGeo({ latitude, longitude })
      })
    }
    // @ts-ignore
    citys.setCity(JSON.parse(localStorage.getItem('city-data')) || [])
  }, [])

  return (
    <div className={styles.container}>
      <LangDrop />
      <div className={styles.input}>
        <Autocomplete
          inputAutocompleteValue=""
          placeholder="City.."
          apiKey="AIzaSyA9bslaj5Bl5nLuQQXe8rr_PkhDvvZqzMs"
          onPlaceSelected={(place, autocomplete) => {
            console.log(autocomplete, 'autocomplete')
            console.log(place, 'place')

            // @ts-ignore
            setAutocomplete(autocomplete)
            getWeather(place.address_components[0].long_name)
          }}
        />
      </div>
      <div className={styles.cardList}>
        {/* @ts-ignore */}
        {citys.citysData.map(({ city, list }) => (
          // @ts-ignore
          <Card key={city.id} city={city} list={list} />
        ))}
      </div>
    </div>
  )
})
export default Weather

// const lowFilter = name.toLowerCase()

// if (citys.citysData.find(it => it.name.toLowerCase() === lowFilter))

// if (citys.citysData) {
//   // @ts-ignore
//   citys.citysData.find(it => console.log(it.city.name.toLowerCase() === lowFilter, 'dddddd'))
// }
