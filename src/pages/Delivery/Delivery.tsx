import { ImgOrder, MainOrder, OrderItens, PageOrder } from './styles'
import { CoffeeCarContext } from '../../context/coffeeCar'
import { useContext } from 'react'

export function Delivery() {
  const { adressItem } = useContext(CoffeeCarContext)
  return (
    <MainOrder>
      <PageOrder>
        <OrderItens>
          <h1>Uhu! Pedido confirmado</h1>
          <h2>Agora é só aguardar que logo o café chegará até você</h2>
          <div>
            <p>
              <img src="src/assets/pisition.svg" alt="" />
              Entrega em {adressItem.rua}, {adressItem.numero},{' '}
              {adressItem.complemento} <br /> {adressItem.bairro} -{' '}
              {adressItem.cidade}, {adressItem.estado}
            </p>
            <p>
              <img src="src/assets/clock.svg" alt="" />
              Previsão de entrega <br /> 20 min - 30 min
            </p>
            <p>
              <img src="src/assets/cash.svg" alt="" />
              Pagamento na entrega <br /> {adressItem.pagamento}
            </p>
          </div>
        </OrderItens>
        <ImgOrder>
          <img src="src/assets/motorcycle.svg" alt="" />
        </ImgOrder>
      </PageOrder>
    </MainOrder>
  )
}
