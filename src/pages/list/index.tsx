import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Weather } from '../../api'
import { ICity } from '../../interface/city'
import { StyledWrapper } from './styled'
import { KeyPressNames } from '../../enum/common'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import Badge from '../../components/Badge'

const pageSize: number = 100

const List: React.FC = () => {
  const cities = useRef<ICity[]>([])
  const [searchedCities, setSearchedCities] = useState<ICity[]>([])
  const [displayedCities, setDisplayedCities] = useState<ICity[]>([])
  const [keyword, setKeyword] = useState<string>('')

  const infiniteScroll = useCallback(() => {
    const scrollHeight: number = document.documentElement.scrollHeight
    const scrollTop: number = document.documentElement.scrollTop
    const clientHeight: number = document.documentElement.clientHeight

    if (scrollTop + clientHeight >= scrollHeight) {
      setDisplayedCities(state => state.concat(searchedCities.slice(state.length, state.length + pageSize)))
    }
  }, [searchedCities])

  const fetchCities = async () => {
    try {
      const response: ICity[] = await Weather.getCities()
      cities.current = response
      setSearchedCities(response)
    } catch (err) {
      alert(err.message)
    }
  }

  useEffect(() => {
    fetchCities()
  }, [])

  useEffect(() => {
    // if (searchedCities.length) {
    //   setDisplayedCities(searchedCities.slice(0, pageSize))
    // }
    setDisplayedCities(searchedCities.slice(0, pageSize))
  }, [searchedCities])

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll)

    return () => {
      window.removeEventListener('scroll', infiniteScroll)
    }
  }, [searchedCities])

  const searchCities = () => {
    setSearchedCities(cities.current.filter(city => city.name.includes(keyword)))
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
    <Layout>
      <StyledWrapper>
        <input type="text" name="keyword" value={keyword}
               onChange={handleChange}
               onKeyPress={handleKeyPress}/>
        <button onClick={searchCities}>검색</button>

        <ul>
          {displayedCities.map(city => <li key={city.id}>
              <Link to={`/detail/${city.id}`}>
                <Badge title={city.country} />
                {city.name}
              </Link>
            </li>
          )}
        </ul>
      </StyledWrapper>
    </Layout>
  )
}

export default List