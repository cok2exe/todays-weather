import { ICoord } from './common'

export interface ICurrentWeather {
  coord: ICoord
  weather: IWeather[]
  base: string
  main: IMain
  visibility: number
  wind: IWind
  clouds: IClouds
  dt: number
  sys: ISys
  id: number
  name: string
  cod: number
  timezone: number
}

interface IWeather {
  id: number
  main: string
  description: string
  icon: string
}

interface IMain {
  temp: number
  pressure: number
  humidity: number
  temp_min: number
  temp_max: number
  feels_like: number
}

interface IWind {
  speed: number
  deg: number
}

interface IClouds {
  all: number
}

interface ISys {
  type: number
  id: number
  message: number
  country: string
  sunrise: number
  sunset: number
}