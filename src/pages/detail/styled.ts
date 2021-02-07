import styled from 'styled-components'

export const StyledWrapper = styled.section`
  padding: 32px 16px;
  box-shadow: rgba(0, 0, 0, 0.12) -1px 1px 20px;
  border-radius: 4px;
`

export const StyledWeather = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;

  span {
    font-size: 12px;
  }

  p {
    margin: 4px 0 0;

    + span {
      margin: 12px 0 0;
    }
  }
`

export const Divider = styled.hr`
  margin: 1rem 0;
`

export const StyledHeader = styled.header`
  > h2 {
    margin: 12px 0 4px;
  }

  > span {
    margin-bottom: 8px;
  }
`

export const StyledCurrent = styled.article`
  text-align: center;
  padding: 0.75em 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .weatherText {
    display: flex;
    align-items: center;

    img {
      width: 36px;
    }
  }

  b {
    font-size: 4em;
  }

  .weatherMaxMin {
    display: flex;
    align-items: center;
    
    p + span {
      margin-left: 12px;
    }
  }
`

export const StyledInfo = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    width: 50%;
  }
`