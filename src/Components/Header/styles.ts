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
      display: flex;
      text-decoration: none;
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

export const CarNumberItens = styled.div`
  text-decoration: none;
  background-color: ${(props) => props.theme.Yellow};
  border-radius: 50%;
  margin-left: -0.5rem;
  margin-top: -0.5rem;
  align-self: flex-start;
  font-size: 0.7rem;
  padding: 0.4rem;
  color: ${(props) => props.theme.Title};
  font-weight: 800;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
