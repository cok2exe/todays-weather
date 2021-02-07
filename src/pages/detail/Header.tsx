import React from 'react'
import Badge from '../../components/Badge'
import moment from 'moment'
import { ICity } from '../../interface/city'
import { ICurrentWeather } from '../../interface/weather'
import { StyledHeader } from './styled'

interface IProps {
  city?: ICity
  currentWeather?: ICurrentWeather
}

const Header: React.FC<IProps> = ({ city, currentWeather }) => {
  return (
    <StyledHeader>
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
        {currentWeather?.timezone && moment.utc().add(currentWeather.timezone, 'seconds').format('HH:mm, MM/DD')}
      </u>
    </StyledHeader>
  )
}

export default Header