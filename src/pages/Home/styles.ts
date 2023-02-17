import styled from 'styled-components'

export const CoffeType = styled.div`
  display: flex;
  justify-content: center;
`

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;

  aside {
    height: 34rem;
    background: blur(80px);
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      width: 100%;
    }
    h1 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 3rem;
      line-height: 130%;
      color: ${(props) => props.theme.Title};
      flex: none;
      order: 0;
      align-self: stretch;
      flex-grow: 0;
      margin-bottom: 1rem;
    }
    h2 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 130%;
      color: ${(props) => props.theme.Subtitle};
      margin-bottom: 4.25rem;
    }
    ol {
      div {
        justify-content: center;
        align-items: center;
        gap: 2.5rem;
      }
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        margin-bottom: 1.25rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 1rem;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        color: ${(props) => props.theme.Text};
      }
    }
  }
`

export const CoffeeitemContainer = styled.main`
  main {
    display: block;
    h1 {
      margin-bottom: 3.375rem;
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 32px;
      line-height: 130%;
      color: ${(props) => props.theme.Title};
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: first baseline;
      margin-bottom: 4rem;
      li {
        list-style-type: none;
        width: 256px;
        height: 310px;
        left: 0px;
        top: 0px;
        background-color: ${(props) => props.theme.Card};
        border-radius: 6px 36px;

        h3 {
          width: auto;
          border-radius: 100px;
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          font-size: 10px;
          line-height: 130%;
          text-transform: uppercase;
          color: ${(props) => props.theme['Yellow-Dark']};
          background-color: ${(props) => props.theme['Yellow-Light']};
        }
        h1 {
          font-family: 'Baloo 2';
          justify-content: center;
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 130%;
          display: flex;
          align-items: flex-end;
          text-align: center;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          color: ${(props) => props.theme.Subtitle};
        }
        h2 {
          display: flex;
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 130%;
          border: none;
          padding-inline: 1.25rem;
          /* or 18px */
          width: 100%;
          text-align: center;
          margin-bottom: 2.05rem;
        }
        div {
          display: flex;
          justify-content: space-around;
          align-items: center;
          span {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            p {
              font-family: 'Roboto';
              font-style: normal;
              font-weight: 400;
              font-size: 1.25rem;
              line-height: 130%;
              text-align: center;
            }
            section {
              display: flex;
              background: #e6e5e5;
              border-radius: 6px;
              align-items: center;
              justify-content: space-around;
              gap: 0.25rem;
              width: 4.87rem;
              button {
                border: none;
              }
            }
            /* button {
              
            } */
          }
        }
      }
    }
  }
`

export const Carbutton = styled.button`
  display: flex;
  background: ${(props) => props.theme['Purple-dark']};
  border: none;
  width: 1.375;
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  padding: 4px;
  justify-content: center;
  align-items: center;
  margin: none;
  box-sizing: border-box;
`

export const QtdButton = styled.button`
  border: none;
  background: none;
`
export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 130%;
  gap: 0.25rem;
  h4 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }
  /* or 31px */

  text-align: right;
`
export const CoffeImage = styled.div`
  margin-bottom: 0.8rem;
  margin-top: -2rem;

  img {
    width: 7rem;
    height: 7rem;
    /* transform: translate(0, -2rem); */
    display: inline;
  }
`
