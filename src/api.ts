import axios from 'axios'
import { ICity } from './interface/city'
import { ICurrentWeather } from './interface/weather'

axios.interceptors.response.use(
  (response) => {
    return response.data
  },

  (reject) => {
    throw reject.response.data
  }
)

const Weather = {
  getCities: async (): Promise<ICity[]> => await axios.get('/citylist.json'),
  getWeatherByCity: async (cityId: number): Promise<ICurrentWeather> => await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${process.env.REACT_APP_API_KEY}&lang=kr&units=metric`),
}

export { Weather }