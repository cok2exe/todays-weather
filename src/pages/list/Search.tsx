import React, { Dispatch, useState } from 'react'
import { KeyPressNames } from '../../enum/common'
import { ICity } from '../../interface/city'
import { StyledSearch } from './styled'

interface IProps {
  cities: ICity[]
  setSearchedCities: Dispatch<ICity[]>
}
const Search: React.FC<IProps> = ({ cities, setSearchedCities }) => {
  const [keyword, setKeyword] = useState<string>('')

  const searchCities = () => {
    setSearchedCities(cities.filter(city => city.name.includes(keyword)))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === KeyPressNames.ENTER) {
      searchCities()
    }
  }

  return (
    <StyledSearch>
      <input name="keyword" value={keyword} onChange={handleChange} onKeyPress={handleKeyPress} />
      <button onClick={searchCities}>검색</button>
    </StyledSearch>
  )
}

export default Search