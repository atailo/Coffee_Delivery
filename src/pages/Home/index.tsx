import { CoffeeitemContainer, MainContainer } from './styles'
import introFigure from '../../assets/introFigure.svg'
import carrinho from '../../assets/carrinho.svg'
import relogio from '../../assets/relogio.svg'
import caixa from '../../assets/caixa.svg'
import cafe from '../../assets/cafe.svg'
import { CoffeItemComponent, CoffeItem } from '../../Components/CoffeItem'

const CoffeList: CoffeItem[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    type: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    image: 'src/assets/tradicional.svg',
  },
  {
    id: 2,
    name: 'Expresso Americano',
    type: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicionals',
    price: 9.9,
    image: 'src/assets/ex-american.svg',
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    type: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 10.9,
    image: 'src/assets/ex-cremy.svg',
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    type: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    image: 'src/assets/ex-ice.svg',
  },
  {
    id: 5,
    name: 'Café Com Leite',
    type: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    image: 'src/assets/Coffee_adn_milk.svg',
  },
  {
    id: 6,
    name: 'Latte',
    type: ['Tradicional', 'Com Leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    image: 'src/assets/latte.svg',
  },
  {
    id: 7,
    name: 'Capuccino',
    type: ['Tradicional', 'Com Leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    image: 'src/assets/capuccino.svg',
  },
  {
    id: 8,
    name: 'Macchiato',
    type: ['Tradicional', 'Com Leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    image: 'src/assets/Macchiato.svg',
  },
  {
    id: 9,
    name: 'Mocaccino',
    type: ['Tradicional', 'Com Leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    image: 'src/assets/Mocaccino.svg',
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    type: ['Especial', 'Com Leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    image: 'src/assets/hot_chocollatte.svg',
  },
  {
    id: 11,
    name: 'Cubano',
    type: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    image: 'src/assets/cuban.svg',
  },
  {
    id: 12,
    name: 'Havaiano',
    type: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    image: 'src/assets/havaian.svg',
  },
  {
    id: 13,
    name: 'Árabe',
    type: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    image: 'src/assets/arabian.svg',
  },
  {
    id: 14,
    name: 'Irlandês',
    type: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    image: 'src/assets/Irish.svg',
  },
]

export function Home() {
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
                    key={CoffeList.id}
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
