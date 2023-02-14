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
  CarfItens,
  Carform,
  FormDelete,
  FormItens,
  InputDivs,
  Inputs,
  ItemCar,
  ItemCarGroup,
  ItemCenterContent,
  ItemDelete,
  ItemQaunt,
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

const schema = yup
  .object({
    cep: yup.string().required(),
    numero: yup.number().positive().integer().required(),
  })
  .required()

export function Checkout() {
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
        console.log('deu erro')
      })
  }

  async function submit(data: {}) {
    if (data) {
      navigate('/delivery')
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
              <FormDelete onClick={reset}>
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
                  value="credito"
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
                  value="debito"
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
                  value="dinheiro"
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
            <ItemCarGroup>
              <ItemCar>
                <div>
                  <img src="src/assets/tradicional.svg" alt="" />
                </div>
                <ItemCenterContent>
                  <div>
                    <div>
                      <h3>Expresso Tradicional</h3>
                    </div>
                    <ItemQaunt>
                      <section>
                        <Minus weight="bold" color="#8047F8" />
                        <p>1</p>
                        <Plus weight="bold" color="#8047F8" />
                      </section>
                      <ItemDelete>
                        <Trash size={16} color="#8047F8" />
                        Remover
                      </ItemDelete>
                    </ItemQaunt>
                  </div>
                </ItemCenterContent>
                <div>R$ 9,90</div>
              </ItemCar>
              <div>
                <hr />
              </div>
            </ItemCarGroup>
            <ItemCarGroup>
              <ItemCar>
                <div>
                  <img src="src/assets/tradicional.svg" alt="" />
                </div>
                <ItemCenterContent>
                  <div>
                    <div>
                      <h3>Expresso Tradicional</h3>
                    </div>
                    <ItemQaunt>
                      <section>
                        <Minus weight="bold" color="#8047F8" />
                        <p>1</p>
                        <Plus weight="bold" color="#8047F8" />
                      </section>
                      <ItemDelete>
                        <Trash size={16} color="#8047F8" />
                        Remover
                      </ItemDelete>
                    </ItemQaunt>
                  </div>
                </ItemCenterContent>
                <div>R$ 9,90</div>
              </ItemCar>
              <div>
                <hr />
              </div>
            </ItemCarGroup>
          </div>
        </CarfItens>
        <OrderResume>
          <OrderText>
            <OrderLine>
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </OrderLine>
            <OrderLine>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </OrderLine>
            <OrderLineTotal>
              <p>Total</p>
              <p>R$ 33,20</p>
            </OrderLineTotal>
          </OrderText>
          <ButtonOrder typeof="submit">confirmar pedido</ButtonOrder>
        </OrderResume>
      </Carform>
    </MainCheckout>
  )
}
