import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { useParams } from 'react-router'
import { Weather } from '../../api'
import { ICity } from '../../interface/city'
import { Divider, StyledWrapper } from './styled'
import { ICurrentWeather } from '../../interface/weather'
import Current from './Current'
import Info from './Info'
import Header from './Header'

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [city, setCity] = useState<ICity>()
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>()

  const fetchWeatherById = async () => {
    try {
      const response: ICity[] = await Weather.getCities()
      if (!response) {
        return
      }
      const cityById = response.find(city => city.id === +id)
      setCity(cityById)
    } catch (err) {
      alert(err.message)
    }
  }

  const getWeatherByCity = async () => {
    try {
      if (!(city?.name || city?.country)) {
        return
      }

      const weather: ICurrentWeather = await Weather.getWeatherByCity(+city?.id)
      setCurrentWeather(weather)
    } catch (err) {
      alert(err.message)
    }
  }
  useEffect(() => {
    fetchWeatherById()
  }, [])

  useEffect(() => {
    getWeatherByCity()
  }, [city])

  return (
    <Layout>
      <StyledWrapper>
        <Header city={city} currentWeather={currentWeather} />

        <Current currentWeather={currentWeather}/>

        <Divider/>

        <Info currentWeather={currentWeather}/>
      </StyledWrapper>
    </Layout>
  )
}

export default Detail