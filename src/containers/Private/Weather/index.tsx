import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import Autocomplete from 'react-google-autocomplete'
import { useState } from 'react'
import { Button } from 'antd'
import citys from './store/citys'
import Card from './Card/Card'
import MyResponsiveLine from './Graph'
import styles from './styles.module.scss'

const Weather: FC = observer(() => {
  const [name, setName] = useState<string>('')
  const [autocomplete, setAutocomplete] = useState<object>({})

  const getWeather = (): void => {
    citys.getCityWeather(name)
    // @ts-ignore
    setAutocomplete((autocomplete.value = ''))
  }

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <Autocomplete
          placeholder="City.."
          apiKey="AIzaSyA9bslaj5Bl5nLuQQXe8rr_PkhDvvZqzMs"
          onPlaceSelected={(place, autocomplete) => {
            // @ts-ignore
            setAutocomplete(autocomplete)
            setName(place.address_components[0].long_name)
          }}
        />
        <Button type="primary" onClick={getWeather}>
          Add
        </Button>
      </div>
      {/* <div className={styles.test}>
        <MyResponsiveLine />
      </div> */}
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
