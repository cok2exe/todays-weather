import React from 'react'
import { StyledInfo, StyledWeather } from './styled'
import moment from 'moment'
import { ICurrentWeather } from '../../interface/weather'

interface IProps {
  currentWeather?: ICurrentWeather
}

const Info: React.FC<IProps> = ({ currentWeather }) => {
  return (
    <StyledInfo>
      <StyledWeather>
        <span>일출</span>
        <p>{currentWeather?.sys.sunrise && moment.utc(currentWeather.sys.sunrise, 'X').add(currentWeather.timezone, 'seconds').format('HH:mm')}</p>
      </StyledWeather>
      <StyledWeather>
        <span>일몰</span>
        <p>{currentWeather?.sys.sunset && moment.utc(currentWeather.sys.sunset, 'X').add(currentWeather.timezone, 'seconds').format('HH:mm')}</p>
      </StyledWeather>
      <StyledWeather>
        <span>가시 거리</span>
        <p>{Math.round((currentWeather?.visibility || 0) / 1000).toFixed(1)}km</p>
      </StyledWeather>
      <StyledWeather>
        <span>체감 온도</span>
        <p>{Math.round(currentWeather?.main.feels_like || 0)}°C</p>
      </StyledWeather>
      <StyledWeather>
        <span>습도</span>
        <p>{currentWeather?.main.humidity}%</p>
      </StyledWeather>
      <StyledWeather>
        <span>기압</span>
        <p>{currentWeather?.main.pressure}hPa</p>
      </StyledWeather>
    </StyledInfo>
  )
}

export default Info