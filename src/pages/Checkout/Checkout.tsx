import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'

import {
  AdressForm,
  AdressItens,
  AdressPay,
  AdressTitle,
  ButtonOrder,
  ButtonPay,
  CarEmpt,
  CarfItens,
  Carform,
  CarQtd,
  FormDelete,
  FormItens,
  InputDivs,
  Inputs,
  ItemCar,
  ItemCarGroup,
  ItemCenterContent,
  ItemDelete,
  ItemQaunt,
  ItemTotal,
  LineTxtex,
  MainCheckout,
  OrderLine,
  OrderLineTotal,
  OrderResume,
  OrderText,
  Radiopay,
} from './styles'

import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeCarContext } from '../../context/coffeeCar'

const schema = yup
  .object({
    cep: yup.string().required(),
    numero: yup.number().positive().integer().required(),
  })
  .required()

export function Checkout() {
  const { carItens, altQtdItemCarlis, deleteCaritem, addAdress, clearCar } =
    useContext(CoffeeCarContext)
  const { register, watch, setValue, reset, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  })
  const navigate = useNavigate()

  function onblurCep(cep: string) {
    const value = cep.replace(/[^0-9]/g, '')

    fetch(`https://viacep.com.br/ws/${value}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(value)
        setValue('rua', data.logradouro)
        setValue('bairro', data.bairro)
        setValue('Cidade', data.localidade)
        setValue('estado', data.uf)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  async function submit(data: any) {
    if (carItens.length > 0) {
      console.log(data.rua)
      navigate('/delivery')
      addAdress({
        rua: data.rua,
        numero: data.numero,
        complemento: data.complemento,
        bairro: data.bairro,
        cidade: data.Cidade,
        estado: data.estado,
        pagamento: data.pagamento,
      })
      clearCar()
    } else {
      alert('data.error')
    }
  }
  return (
    <MainCheckout onSubmit={handleSubmit(submit)}>
      <AdressForm>
        <AdressItens>
          <div>
            <AdressTitle>
              <MapPinLine size={22} weight="thin" color="#C47F17" />
              <h3>Endereço de Entrega</h3>
            </AdressTitle>
            <h4>Informe o endereço onde deseja receber seu pedido</h4>
          </div>
          <div>
            <FormItens>
              <InputDivs>
                <Inputs
                  type="text"
                  {...register('cep')}
                  placeholder="CEP"
                  onBlur={() => {
                    onblurCep(watch('cep'))
                  }}
                />
              </InputDivs>
              <InputDivs>
                <Inputs
                  type="text"
                  {...register('rua')}
                  placeholder="Rua / Av."
                  disabled
                />
              </InputDivs>
              <InputDivs>
                <Inputs
                  type="text"
                  style={{ flexGrow: 1 }}
                  {...register('numero', { required: true })}
                  placeholder="Número"
                />
                <Inputs
                  type="text"
                  {...register('complemento')}
                  placeholder="Complemento"
                />
              </InputDivs>
              <InputDivs>
                <Inputs
                  type="text"
                  {...register('bairro')}
                  placeholder="Bairro"
                  disabled
                />
                <Inputs
                  type="text"
                  {...register('Cidade')}
                  placeholder="Cidade"
                  disabled
                />
                <Inputs
                  type="text"
                  {...register('estado')}
                  placeholder="Estado"
                  disabled
                />
              </InputDivs>
              <FormDelete
                onClick={() => {
                  reset()
                }}
              >
                <Trash size={16} color="#8047F8" />
                Limpar endereço
              </FormDelete>
            </FormItens>
          </div>
        </AdressItens>
        <AdressPay>
          <h3>
            <CurrencyDollar size={22} weight="fill" color="#8047F8" />
            Pagamento
          </h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
          <Radiopay>
            <ButtonPay>
              <label htmlFor="cartao" className="divida">
                <input
                  {...register('pagamento')}
                  type="radio"
                  id="cartao"
                  name="pagamento"
                  value="Cartão de Crédito"
                  className="checkbox"
                />
                <div className="divida_item">
                  <CreditCard size={16} weight="thin" color="#8047F8" />
                  Cartão de Crédito{' '}
                </div>
              </label>
            </ButtonPay>
            <ButtonPay>
              <label htmlFor="debito" className="divida">
                <input
                  {...register('pagamento')}
                  type="radio"
                  id="debito"
                  name="pagamento"
                  value="Cartão de Débito"
                  className="checkbox"
                />
                <div className="divida_item">
                  <Bank size={16} weight="thin" color="#8047F8" />
                  Cartão de Débito{' '}
                </div>
              </label>
            </ButtonPay>
            <ButtonPay>
              <label htmlFor="dinheiro" className="divida">
                <input
                  {...register('pagamento')}
                  type="radio"
                  id="dinheiro"
                  name="pagamento"
                  value="Dinheiro"
                  className="checkbox"
                />
                <div className="divida_item">
                  <Money size={16} weight="thin" color="#8047F8" />
                  Dinheiro
                </div>
              </label>
            </ButtonPay>
          </Radiopay>
        </AdressPay>
      </AdressForm>
      <Carform>
        <CarfItens>
          <div>
            {carItens.length === 0 && (
              <CarEmpt>
                Seu carrinho está vazio, <br /> adicione itens !
              </CarEmpt>
            )}
            <ItemCarGroup>
              {carItens.map((item) => (
                <ItemCar key={item.id}>
                  <div>
                    <img src={item.image} alt="" />
                  </div>
                  <ItemCenterContent>
                    <div>
                      <div>
                        <h3>{item.name}</h3>
                      </div>
                      <ItemQaunt>
                        <section>
                          <CarQtd
                            onClick={() => {
                              if (item.quantidade > 1)
                                altQtdItemCarlis(
                                  item.id as number,
                                  item.quantidade - 1,
                                )
                            }}
                          >
                            <Minus weight="bold" color="#8047F8" />
                          </CarQtd>
                          <p>{item.quantidade}</p>
                          <CarQtd
                            onClick={() => {
                              altQtdItemCarlis(
                                item.id as number,
                                item.quantidade + 1,
                              )
                            }}
                          >
                            <Plus weight="bold" color="#8047F8" />
                          </CarQtd>
                        </section>
                        <ItemDelete
                          onClick={() => {
                            deleteCaritem(item.id as number)
                          }}
                        >
                          <Trash size={16} color="#8047F8" />
                          Remover
                        </ItemDelete>
                      </ItemQaunt>
                    </div>
                  </ItemCenterContent>
                  <ItemTotal>
                    <p>R${(item.quantidade * item.price).toFixed(2)}</p>
                  </ItemTotal>
                </ItemCar>
              ))}
            </ItemCarGroup>
          </div>
        </CarfItens>
        <LineTxtex>
          <hr />
        </LineTxtex>
        <OrderResume>
          <OrderText>
            <LineTxtex>
              <hr />
            </LineTxtex>
            <OrderLine>
              <p>Total de itens</p>
              <p>
                R${' '}
                {carItens
                  .reduce((acc, item) => acc + item.quantidade * item.price, 0)
                  .toFixed(2)}
              </p>
            </OrderLine>
            <OrderLine>
              <p>Entrega - (R$1,50 por item)</p>
              <p>
                R${' '}
                {carItens
                  .reduce((acc, item) => acc + item.quantidade * 1.5, 0)
                  .toFixed(2)}
              </p>
            </OrderLine>
            <OrderLineTotal>
              <p>Total</p>
              <p>
                R${' '}
                {(
                  carItens.reduce(
                    (acc, item) => acc + item.quantidade * item.price,
                    0,
                  ) +
                  carItens.reduce((acc, item) => acc + item.quantidade * 1.5, 0)
                ).toFixed(2)}
              </p>
            </OrderLineTotal>
          </OrderText>
          <ButtonOrder typeof="submit">confirmar pedido</ButtonOrder>
        </OrderResume>
      </Carform>
    </MainCheckout>
  )
}
