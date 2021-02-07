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


export const StyledSearch = styled.div`
  background-color: rgba(86, 115, 235, 0.12);
  padding: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  
  > input {
    border: none;
    flex: 1;
    margin-right: 8px;
    height: 32px;
    padding: 0 12px;
    
    &:focus {
      outline: none;
    }
  }
  
  > button {
    background-color: rgba(86, 115, 235, 0.3);
    border: none;
    color: rgb(86, 115, 235);
    cursor: pointer;
    padding: 0 12px;
    border-radius: 4px;
    height: 32px;
  }
`