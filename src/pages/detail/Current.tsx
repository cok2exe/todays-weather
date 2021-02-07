import React from 'react'
import Badge from '../../components/Badge'
import { IWeather } from '../../interface/weather'

interface IProps {
  weather?: IWeather
}

const Current: React.FC<IProps> = ({weather}) => {
  return (
    <article>
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

      <div className="weatherFeelsLike">
        <Badge title="채감 온도" primary={(weather?.main.feels_like || 0) < 0}/>
        <span>
          {Math.round(weather?.main.feels_like || 0)}°C
        </span>
      </div>
    </article>
  )
}

export default Current