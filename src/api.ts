import axios from 'axios'
import { ICity } from './interface/city'

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
}

export { Weather }