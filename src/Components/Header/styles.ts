import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.white};
  height: 10rem;
  width: 74rem;
  position: fixed;
  top: 0;

  div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    nav {
      a {
        color: ${(props) => props.theme['Yellow-Dark']};
        background-color: ${(props) => props.theme['Yellow-Light']};
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px;
        gap: 4px;
        border-radius: 6px;
        &:hover {
          cursor: pointer;
        }
      }
    }
    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      gap: 4px;
      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 0;
      width: flex;
      height: 3rem;
      outline: none;
      color: ${(props) => props.theme['Purple-dark']};
      background-color: ${(props) => props.theme['Purple-light']};
      font-size: 0.875rem;
      border: none;
      border-radius: 6px;
      span {
        color: ${(props) => props.theme.Purple};
      }
    }
  }
`
