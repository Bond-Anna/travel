import { makeAutoObservable } from 'mobx'
import { api } from 'config'

class Citys {
  citysData: object[] = []

  constructor() {
    makeAutoObservable(this)
  }
  date: string = new Date().toISOString().slice(0, 10)

  async getCityWeather(name: string) {
    try {
      const res = await api.get(`?q=${name}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      console.log(res.data)

      const hourDateArrey: any = []

      res.data.list.forEach((el: object) => {
        // @ts-ignore
        if (!hourDateArrey.find(it => it?.dt_txt.slice(0, 10) === el.dt_txt.slice(0, 10))) {
          // @ts-ignore
          el.main.tempC = Math.round(el.main.temp - 273.15)
          hourDateArrey.push(el)
          console.log(hourDateArrey, 'hourDateArrey')
        }
        // @ts-ignore
        console.log(hourDateArrey.find(it => it?.dt_txt === el.dt_txt))
      })

      console.log([...this.citysData, { city: res.data.city, list: hourDateArrey }], '12121212')

      const main = res.data.list[0].main

      // main.tempC = Math.round(main.temp - 273.15)
      main.tempF = Math.round(1.8 * (main.temp - 273.15) + 32)
      main.feelsC = Math.round(main.feels_like - 273.15)
      main.feelsF = Math.round(1.8 * (main.feels_like - 273.15) + 32)
      main.flag_isCelsius = true

      this.citysData = [...this.citysData, { city: res.data.city, list: hourDateArrey }]
    } catch (error) {
      console.log(error)
    }
  }
  // @ts-ignore
  editCity(data) {
    // @ts-ignore
    const pickedCity = this.citysData.find(it => it.city.id === data.id)
    // @ts-ignore
    pickedCity.list[0].main.flag_isCelsius = data.isCel
    //   localStorage.setItem('city-data', JSON.stringify(state.city));
  }

  // @ts-ignore
  delCity(id) {
    // @ts-ignore
    this.citysData = this.citysData.filter(it => it.city.id !== id)
  }
}
export default new Citys()
