import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { useParams } from 'react-router'
import { Weather } from '../../api'
import { ICity } from '../../interface/city'
import Badge from '../../components/Badge'
import { Divider, StyledWrapper } from './styled'
import { IWeather } from '../../interface/weather'
import moment from 'moment'
import Current from './Current'
import Info from './Info'
import 'moment-timezone'

const Detail: React.FC = () => {
  const {id} = useParams<{ id: string }>()
  const [city, setCity] = useState<ICity>()
  const [weather, setWeather] = useState<IWeather>()

  const fetchWeatherById = async () => {
    try {
      const response: ICity[] = await Weather.getCities()
      if (!response) {
        return
      }
      const cityById = response.find(city => city.id === +id)
      setCity(cityById)
    } catch (err) {
      alert(err)
    }
  }

  const getWeatherByCity = async () => {
    try {
      if (!(city?.name || city?.country)) {
        return
      }

      const weather: IWeather = await Weather.getWeatherByCity(+city?.id)
      setWeather(weather)
    } catch (err) {
      alert(err)
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
        <header>
          <Badge
            title={
              <>
                {city?.country && (
                  <img
                    src={`http://openweathermap.org/images/flags/${city?.country.toLowerCase()}.png`}
                    alt=""
                  />
                )}
                {city?.country || city?.name}
              </>
            }
            big
          />
          <br/>
          <h2>
            {city?.name}의
            <br/>
            현재 날씨는?
          </h2>
          <u>
            {weather?.dt && moment.utc().add(weather.timezone, 'seconds').format('HH:mm, MM/DD')}
          </u>
        </header>

        <Current weather={weather}/>

        <Divider/>

        <Info weather={weather}/>
      </StyledWrapper>
    </Layout>
  )
}

export default Detail