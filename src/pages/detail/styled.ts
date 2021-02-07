import styled from 'styled-components'

export const StyledWrapper = styled.section`
  padding: 32px 16px;
  box-shadow: rgba(0, 0, 0, 0.12) -1px 1px 20px;
  border-radius: 4px;

  > header {
    > h2 {
      margin: 12px 0 4px;
    }

    > span {
      margin-bottom: 8px;
    }
  }

  > article {
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

    .weatherFeelsLike {
      display: flex;
      align-items: center;
    }
  }

  > .weatherLayout {
    display: flex;
    flex-wrap: wrap;

    > * {
      width: 50%;
    }
  }
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

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eee;
  margin: 1rem 0;
`