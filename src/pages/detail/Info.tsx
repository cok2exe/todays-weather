import React from 'react'
import { StyledInfo, StyledWeather } from './styled'
import moment from 'moment'
import { IWeather } from '../../interface/weather'

interface IProps {
  weather?: IWeather
}

const Info: React.FC<IProps> = ({ weather }) => {
  return (
    <StyledInfo>
      <StyledWeather>
        <span>일출</span>
        <p>{weather?.sys.sunrise && moment.utc(weather.sys.sunrise, 'X').add(weather.timezone, 'seconds').format('HH:mm')}</p>
      </StyledWeather>
      <StyledWeather>
        <span>일몰</span>
        <p>{weather?.sys.sunset && moment.utc(weather.sys.sunset, 'X').add(weather.timezone, 'seconds').format('HH:mm')}</p>
      </StyledWeather>
      <StyledWeather>
        <span>가시 거리</span>
        <p>{Math.round((weather?.visibility || 0) / 1000).toFixed(1)}km</p>
      </StyledWeather>
      <StyledWeather>
        <span>체감 온도</span>
        <p>{Math.round(weather?.main.feels_like || 0)}°C</p>
      </StyledWeather>
      <StyledWeather>
        <span>습도</span>
        <p>{weather?.main.humidity}%</p>
      </StyledWeather>
      <StyledWeather>
        <span>기압</span>
        <p>{weather?.main.pressure}hPa</p>
      </StyledWeather>
    </StyledInfo>
  )
}

export default Info