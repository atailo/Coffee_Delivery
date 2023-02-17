import styled from 'styled-components'

export const MainCheckout = styled.form`
  display: flex;
  justify-content: space-around;
  margin-top: 10rem;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
`
export const AdressForm = styled.div`
  width: 642px;
  height: 595px;
  justify-items: center;
  align-items: center;
  border-radius: 6px;
  display: block;
`
export const AdressItens = styled.div`
  height: 70%;
  margin-bottom: 0.5rem;
  background-color: ${(props) => props.theme.Card};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;
  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: #403937;
  }
  h4 {
    margin-left: 2rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: #574f4d;
    /* or 18px */

    display: flex;
    align-items: center;
  }
`
export const InputDivs = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 12px;
  flex: none;
  width: 100%;

  /* Inside auto layout */
`
export const FormHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
`
export const AdressTitle = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const FormItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  padding: 0px;
  gap: 1.2rem;
  max-width: 100%;
`
export const Inputs = styled.input`
  align-items: center;
  padding: 12px;
  gap: 4px;
  width: 100%;
  height: 42px;
  background: #eeeded;
  border: 1px solid #e6e5e5;
  border-radius: 4px;
  color: 1px solid ${(props) => (props ? 'red' : 'green')};
  /* Inside auto layout */
`

export const AdressPay = styled.div`
  color: ${(props) => props.theme.Subtitle};
  justify-content: center;
  display: block;
  width: 100%;
  border-radius: 6px;
  background-color: ${(props) => props.theme.Card};
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;

  h3 {
    display: flex;
    align-items: center;
    font-size: 0.87rem;
    color: ${(props) => props.theme.Text};
  }
  p {
    margin-left: 1.3rem;
    font-size: 1rem;
    color: ${(props) => props.theme.Text};
  }
`
export const Radiopay = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  align-self: center;
`
export const ButtonPay = styled.div`
  input {
    display: none;
  }
  .divida .checkbox:checked ~ div {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: red;
    padding: 16px;
    gap: 12px;
    width: 178.67px;
    height: 51px;
    border-radius: 6px;
    font-size: 0.875rem;
    flex: none;
    order: 0;
    flex-grow: 1;
    background: ${(props) => props.theme.button};
    border: 1px solid ${(props) => props.theme.Purple};
  }
  .divida .checkbox:not(:checked) ~ div {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: red;
    padding: 16px;
    gap: 12px;
    width: 178.67px;
    height: 51px;
    border-radius: 6px;
    font-size: 0.875rem;
    flex: none;
    order: 0;
    flex-grow: 1;
    background: ${(props) => props.theme.button};
  }
`

export const Carform = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.Card};
  width: 448px;
  height: 498px;
  justify-items: center;
  align-items: center;
  border-radius: 6px 44px;
  align-self: flex-start;
`

export const CarfItens = styled.div`
  display: flex;
  overflow-y: scroll;
  height: 70%;
  align-items: center;

  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 0.2rem;
    width: 72px;
    height: auto;
    background-color: ${(props) => props.theme.button};
    border-radius: 6px;
  }
`

export const CarEmpt = styled.div`
  color: ${(props) => props.theme['Yellow-Dark']};
  font-weight: 700;
  line-height: 2;
  width: 100%;
  justify-content: center;
  align-self: center;
  justify-self: center;
  text-align: center;
  padding: 6rem;
`
export const ItemTotal = styled.div`
  display: flex;
  gap: 0.2rem;
`
export const ItemCar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px 4px;
  gap: 2rem;
  width: 368px;
  height: 80px;
  background: #f3f2f2;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  img {
    width: 4rem;
    height: 4rem;
  }
  div {
    align-self: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme.Text};
  }
`

export const ItemCarGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`
export const ItemCenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 100%;
    text-align: center;
    margin-bottom: 0.5rem;
  }
`
export const ItemQaunt = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 10.7rem;
  height: 2rem;
  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;
    width: 72px;
    height: 32px;
    background: #e6e5e5;
    border-radius: 6px;
  }
`
export const ItemDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 4px;
  width: auto;
  height: 32px;
  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.theme.button};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  text-transform: uppercase;
`
export const OrderResume = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`

export const LineTxtex = styled.div`
  hr {
    height: 1px;
    width: 100%;
    border: 1px solid ${(props) => props.theme.button};
  }
`

export const OrderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  width: 23rem;
  height: 5.75rem;
  margin-top: -2rem;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 100%;
  }
`
export const OrderLine = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */

  display: flex;
  align-items: center;
  text-align: right;
`
export const OrderLineTotal = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  /* identical to box height, or 26px */

  display: flex;
  align-items: center;
  text-align: right;
  color: ${(props) => props.theme.Subtitle};
`
export const ButtonOrder = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  gap: 4px;
  border: none;
  width: 368px;
  height: 46px;
  cursor: pointer;

  /* Brand / Yellow */

  background: #dbac2c;
  border-radius: 6px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  /* or 22px */

  text-transform: uppercase;

  /* Base/White */

  color: ${(props) => props.theme.white};
  font-stretch: 100;
`

export const FormDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 4px;
  width: auto;
  height: 32px;
  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.theme['Purple-light']};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;

  color: ${(props) => props.theme.Text};
`
export const CarQtd = styled.button`
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
  display: flex;
`
