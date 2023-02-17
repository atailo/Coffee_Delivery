import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'

export interface CoffeItem {
  id?: number
  name: string
  type: string[]
  description: string
  price: number
  image: string
}

interface CoffeeCarContextInterface {
  CoffeList: CoffeItem[]
  addCar: (id: number, quantidade: number) => void
  altQtdItemCarlis: (id: number, quantidade: number) => void
  deleteCaritem: (id: number) => void
  carItens: (CoffeItem & { quantidade: number })[]
}
interface CoffeeCarContextProviderProps {
  children: ReactNode
}
export const CoffeeCarContext = createContext({} as CoffeeCarContextInterface)

export function CoffeeCarContextProvider({
  children,
}: CoffeeCarContextProviderProps) {
  const CoffeList: CoffeItem[] = useMemo(
    () => [
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
        description:
          'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.9,
        image: 'src/assets/Mocaccino.svg',
      },
      {
        id: 10,
        name: 'Chocolate Quente',
        type: ['Especial', 'Com Leite'],
        description:
          'Bebida feita com chocolate dissolvido no leite quente e café',
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
        description:
          'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.9,
        image: 'src/assets/Irish.svg',
      },
    ],
    [],
  )
  const [carItens, setcarItens] = useState<
    (CoffeItem & { quantidade: number })[]
  >([])

  const addCar = useCallback(
    (id: number, quantidade: number) => {
      const coffee = CoffeList.find((item) => {
        return item.id === id
      })

      if (coffee) {
        // setcarItens([...carItens, { ...coffee, quantidade }])
        setcarItens((itens) => {
          const indexItem = itens.findIndex((item) => item.id === id)
          if (indexItem < 0) {
            return [...itens, { ...coffee, quantidade }]
          }
          itens[indexItem] = {
            ...itens[indexItem],
            quantidade: itens[indexItem].quantidade + quantidade,
          }
          return itens
        })
      }
    },
    [CoffeList],
  )

  const altQtdItemCarlis = useCallback(
    (id: number, quantidade: number) => {
      const copyArray = [...carItens]
      const indexItem = copyArray.findIndex((item) => item.id === id)

      if (indexItem >= 0) {
        copyArray[indexItem] = {
          ...copyArray[indexItem],
          quantidade,
        }
        setcarItens(copyArray)
      }
    },
    [carItens],
  )
  const deleteCaritem = useCallback(
    (id: number) => {
      const copyArray = [...carItens]
      const filteredItens = copyArray.filter((item) => item.id !== id)

      setcarItens(filteredItens)
    },
    [carItens],
  )
  return (
    <CoffeeCarContext.Provider
      value={{ CoffeList, addCar, carItens, altQtdItemCarlis, deleteCaritem }}
    >
      {children}{' '}
    </CoffeeCarContext.Provider>
  )
}
