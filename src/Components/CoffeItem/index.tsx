import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  Carbutton,
  CoffeImage,
  CoffeType,
  PriceContainer,
  QtdButton,
} from '../../pages/Home/styles'

export interface CoffeItem {
  id?: number
  name: string
  type: string[]
  description: string
  price: number
  image: string
}

export function CoffeItemComponent(props: CoffeItem) {
  return (
    <>
      <CoffeImage>
        <img src={props.image} alt="" />
      </CoffeImage>

      <CoffeType>
        {props.type.map((type, index) => {
          return <h3 key={index}>{type}</h3>
        })}
      </CoffeType>

      <h1>{props.name}</h1>
      <h2>{props.description}</h2>
      <div>
        <PriceContainer>
          <h4>R$</h4>
          {props.price.toFixed(2)}
        </PriceContainer>
        <span>
          <section>
            <QtdButton onClick={alert}>
              <Minus size={14} weight="bold" color="#8047F8" />
            </QtdButton>
            <p>1</p>
            <QtdButton>
              <Plus size={14} weight="bold" color="#8047F8" />
            </QtdButton>
          </section>
          <Carbutton>
            <ShoppingCart size={19} weight="fill" />
          </Carbutton>
        </span>
      </div>
    </>
  )
}
