import { ImgOrder, MainOrder, OrderItens } from './styles'

export function Delivery() {
  return (
    <MainOrder>
      <OrderItens>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
        <div>
          <p>
            <img src="src/assets/pisition.svg" alt="" />
            Entrega em Rua João Daniel Martinelli, 102 <br /> Farrapos - Porto
            Alegre, RS
          </p>
          <p>
            <img src="src/assets/clock.svg" alt="" />
            Previsão de entrega <br /> 20 min - 30 min
          </p>
          <p>
            <img src="src/assets/cash.svg" alt="" />
            Pagamento na entrega <br /> Cartão de Crédito
          </p>
        </div>
      </OrderItens>
      <ImgOrder>
        <img src="src/assets/motorcycle.svg" alt="" />
      </ImgOrder>
    </MainOrder>
  )
}
