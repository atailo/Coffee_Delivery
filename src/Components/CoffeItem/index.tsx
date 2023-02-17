import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CoffeeCarContext, CoffeItem } from '../../context/coffeeCar'
import {
  Carbutton,
  CoffeImage,
  CoffeType,
  PriceContainer,
  QtdButton,
} from '../../pages/Home/styles'

export function CoffeItemComponent(props: CoffeItem) {
  const [qtd, setqtd] = useState(0)
  const { addCar } = useContext(CoffeeCarContext)
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
            <QtdButton
              onClick={() => {
                if (qtd > 0) setqtd(qtd - 1)
              }}
            >
              <Minus size={14} weight="bold" color="#8047F8" />
            </QtdButton>
            <p>{qtd}</p>
            <QtdButton
              onClick={() => {
                setqtd(qtd + 1)
              }}
            >
              <Plus size={14} weight="bold" color="#8047F8" />
            </QtdButton>
          </section>
          <Carbutton
            onClick={(e) => {
              addCar(props.id as number, qtd)
            }}
          >
            <ShoppingCart size={19} weight="fill" />
          </Carbutton>
        </span>
      </div>
    </>
  )
}
