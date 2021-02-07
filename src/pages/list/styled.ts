import styled from 'styled-components'

export const StyledWrapper = styled.section`
  > ul {
    list-style: none;
    margin: 0;
    padding: 0;

    > li {
      height: 48px;
      background-color: #ffffff;
      box-shadow: rgba(0, 0, 0, 0.12) -1px 1px 20px;
      margin-bottom: 4px;
      border-radius: 4px;
      transition: 0.3s;
      //cursor: pointer;


      > a {
        display: flex;
        align-items: center;
        text-decoration: none;
        height: 100%;
        padding: 0 12px;
        color: #000000;
      }

      &:hover {
        background-color: rgba(54, 114, 228, 0.19);
      }
    }
  }
`