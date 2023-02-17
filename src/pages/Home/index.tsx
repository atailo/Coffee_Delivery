import { CoffeeitemContainer, MainContainer } from './styles'
import introFigure from '../../assets/introFigure.svg'
import carrinho from '../../assets/carrinho.svg'
import relogio from '../../assets/relogio.svg'
import caixa from '../../assets/caixa.svg'
import cafe from '../../assets/cafe.svg'
import { CoffeItemComponent } from '../../Components/CoffeItem'
import { CoffeeCarContext } from '../../context/coffeeCar'
import { useContext } from 'react'

export function Home() {
  const { CoffeList } = useContext(CoffeeCarContext)
  return (
    <MainContainer>
      <aside>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <ol>
            <div>
              <p>
                <img src={carrinho} alt="" width={32} height={32} />
                Compra simples e segura
              </p>
              <p>
                <img src={relogio} alt="" width={32} height={32} />
                Entrega rápida e rastreada
              </p>
            </div>
            <div>
              <p>
                <img src={caixa} alt="" width={32} height={32} />
                Embalagem mantém o café intacto
              </p>
              <p>
                <img src={cafe} alt="" width={32} height={32} />O café chega
                fresquinho até você
              </p>
            </div>
          </ol>
        </div>
        <img src={introFigure} alt="" />
      </aside>
      <CoffeeitemContainer>
        <main>
          <h1>Nossos Cafés</h1>
          <ul>
            {CoffeList.map((CoffeList) => {
              return (
                <li key={CoffeList.id}>
                  <CoffeItemComponent
                    id={CoffeList.id}
                    name={CoffeList.name}
                    price={CoffeList.price}
                    image={CoffeList.image}
                    description={CoffeList.description}
                    type={CoffeList.type}
                  />
                </li>
              )
            })}
          </ul>
        </main>
      </CoffeeitemContainer>
    </MainContainer>
  )
}
