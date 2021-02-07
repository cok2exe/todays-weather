import React from 'react'
import { StyledWeather } from './styled'
import moment from 'moment'
import { IWeather } from '../../interface/weather'

interface IProps {
  weather?: IWeather
}

const Info: React.FC<IProps> = ({weather}) => {
  return (
    <div className="weatherLayout">
      <StyledWeather>
        <span>일출</span>
        <p>{moment.utc(weather?.sys.sunrise, 'X').format('HH:mm')}</p>
      </StyledWeather>
      <StyledWeather>
        <span>일몰</span>
        <p>{moment.utc(weather?.sys.sunset, 'X').format('HH:mm')}</p>
      </StyledWeather>

      <StyledWeather>
        <span>습도</span>
        <p>{weather?.main.humidity}%</p>
      </StyledWeather>
      <StyledWeather>
        <span>기압</span>
        <p>{weather?.main.pressure}hPa</p>
      </StyledWeather>
    </div>
  )
}

export default Info