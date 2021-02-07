import React from 'react'
import Badge from '../../components/Badge'
import { IWeather } from '../../interface/weather'
import { StyledCurrent } from './styled'

interface IProps {
  weather?: IWeather
}

const Current: React.FC<IProps> = ({weather}) => {
  return (
    <StyledCurrent>
      {weather?.weather.map(item => (
          <div className="weatherText" key={item.id}>
            <img
              src={`http://openweathermap.org/img/wn/${item.icon}.png`}
              alt={item.description}
            />
            {item.description}
          </div>
        )
      )}

      <b>{Math.round(weather?.main.temp || 0)}°C</b>

      <div className="weatherMaxMin">
        <Badge title="순간 최고" />
        <p>
          {Math.round(weather?.main.temp_max || 0)}°C
        </p>
        <Badge title="순간 최저" primary />
        <p>
          {Math.round(weather?.main.temp_min || 0)}°C
        </p>
      </div>
    </StyledCurrent>
  )
}

export default Current