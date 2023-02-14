import styled from 'styled-components'

export const MainOrder = styled.main`
  display: flex;
  justify-content: space-around;
  margin-top: 10rem;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
`

export const OrderItens = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    margin-bottom: 0.25rem;
    color: ${(props) => props.theme['Yellow-Dark']};
  }

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    margin-bottom: 2.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 6px 36px;
    border: 1px solid ${(props) => props.theme['Yellow-Dark']};
    gap: 2rem;
  }
  p {
    display: flex;
    gap: 0.5rem;
  }
`

export const ImgOrder = styled.div`
  margin-top: 6rem;
  display: flex;
  align-items: flex-end;
`
